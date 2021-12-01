const express = require('express');
const logger = require("morgan"); 
const cors = require("cors");  

const port = 3001;

const studentRouter = require('./Routes/Students/studentRouter');

const app = express();    

app.use(cors());
if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students', studentRouter);

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
    console.log('MySql Connected...')
})