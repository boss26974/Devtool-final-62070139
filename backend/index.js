const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express();
app.use(bodyParser.json());
app.use(cors());

const course = require("./routes/course")

app.use("/", course)

app.listen(3000, () => console.log(`server start on port 3000`));