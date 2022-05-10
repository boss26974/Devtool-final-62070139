<template>
    <div>
        <h1 style="text-align: center">My Classmate</h1>
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3 align-self-center">
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">ค้นหา 'คณะ'</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">ค้นหา 'รอบรับสมัคร'</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">ค้นหา 'โครงการ'</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledTextInput" class="form-label">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <label for="inputPassword5" class="form-label">คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
                    <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
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
        created() {
            console.log("test")
            axios.get("http://localhost:3000/allcourses")
            .then((res) => {
                this.all_Classmate = res.data
            })
        },
    }
</script>