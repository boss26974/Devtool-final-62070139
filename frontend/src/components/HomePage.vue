<template>
    <div>
        <h1 style="text-align: center">My Classmate</h1>
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3 align-self-center">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Classmate Full Name</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="mate_fullname">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Classmate Studnt ID</label>
                            <input type="text" class="form-control" id="exampleInputPassword1" v-model="mate_id">
                        </div>
                        <button class="btn btn-primary" @click="addClassMate">Submit</button>
                </div>
            </div>
            <div class="row" style="margin-top: 60px">
                <div class="col-3"  v-for="(mate,index) in all_Classmate" :key="mate.mate_id">
                    <div class="card">
                        <div class="card-header">
                            My Classmate #{{index + 1}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Classmate Student ID</h5>
                            <p class="card-text">{{mate.mate_id}}</p>
                            <h5 class="card-title">Classmate Fullname</h5>
                            <p class="card-text">{{mate.mate_fullname}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default{
        data(){
            return{
                mate_id: "",
                mate_fullname: "",
                all_Classmate: []
            }
        },
        methods: {
            addClassMate() {
                if(this.mate_fullname == ""){
                    alert("กรุณาใส่ชื่อนักศึกษาให้ถูกค้อง")
                    return
                }
                if(this.mate_id == "" || this.mate_id.length != 8){
                    alert("กรุณาใส่รหัสนักศึกษาให้ถูกค้อง")
                    return
                }
                axios.post("http://localhost:3000/addstudents", {
                    mate_id: this.mate_id,
                    mate_fullname: this.mate_fullname
                }).then((res) => {
                    this.all_Classmate.push({
                        mate_id: this.mate_id,
                        mate_fullname: this.mate_fullname
                    })
                    console.log(res)
                })
            }
        },
        created() {
            console.log("test")
            axios.get("http://localhost:3000/allstudents")
            .then((res) => {
                this.all_Classmate = res.data
            })
        },
    }
</script>