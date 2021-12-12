const express = require('express');
const logger = require("morgan"); 
const cors = require("cors");  
//const {importData, makeDb} = require('./makeDb')
//makeDb();
//importData();
const port = 3001;

const studentRouter = require('./Routes/Students/studentRouter');
const assignmentsRouter = require('./Routes/Assignments/assignmentsRouter')
const usersRouter = require('./Routes/Users/userRouter')
const enrollmentsRouter = require('./Routes/Enrollments/enrollmentsRouter')
const assignedWorkRouter = require('./Routes/AssignedWork/assignedWorkRouter')
const coursesRouter = require('./Routes/Courses/coursesRouter')
const studentNotesRouter = require('./Routes/StudentNotes/studentNotesRouter')

const app = express();    

app.use(cors());
if (process.env.NODE_ENV === "development") {
    app.use(logger("dev"));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/students', studentRouter);
app.use('/api/assignments', assignmentsRouter);
app.use('/api/users', usersRouter);
app.use('/api/enrollments', enrollmentsRouter);
app.use('/api/assigned-work', assignedWorkRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/studentNotes', studentNotesRouter);

app.listen(port, () =>{
    console.log(`Server started on port ${port}`)
})