const {query, db} = require('./server');

const data = {
    Students : [
        {
            student_id : 123,
            last_name: 'Kershun',
            first_name: 'Reese',
            birthday: '2003/01/10'
        },
        {
            student_id : 456,
            last_name: 'Buzz',
            first_name: 'Fizz',
            birthday: '2002/04/30'
        },
        {
            student_id : 789,
            last_name: 'Taloop',
            first_name: 'Steven',
            birthday: '2003/10/19'
        }
    ],
    Users: [
        {
            user_id: 11,
            student_id: 123,
            email: "rkershun@mail.com",
            password: "hello123",
            username: "reesekershun",
        },
        {
            user_id: 12,
            student_id : 456,
            email: "hello@mail.com",
            password: "hello123",
            username: "fizzBuzz",
        },
        {
            user_id: 13,
            student_id : 789,
            email: "nodejs@mail.com",
            password: "hello123",
            username: "eventloop",
        }
    ],
    Courses: [
        {
            course_id: 97,
            course_name: "Composition",
            course_code: "COMP204",
            overview: "This is composition class, this year we will be learning how to communicate effectively through writing."
        },
        {
            course_id: 98,
            course_name: "Intermediate Spanish",
            course_code: "SPA204",
            overview: "Bienvenidos todos al espanol. This is the overview page for SPN204. It is also the landing page for the class when you select it from the Courses Page. The left column navbar has now changed to reflect the options on the individual classes. This page should include expectations of the class, maybe a link to a syllabus, grade breakdowns, course outline, pretty much whatever quick information of the course you want to include."
        },
        {
            course_id: 99,
            course_name: "Intro to Psychology",
            course_code: "PSY201",
            overview: "This is Psychology Class, here you will begin to understand how you understand."
        }
    ],
    Enrollments: [
        {
            student_id: 123,
            course_id: 97
        },  
        {
            student_id: 123,
            course_id: 98
        },  
        {
            student_id: 123,
            course_id: 99
        },
        {
            student_id: 456,
            course_id: 97
        },  
        {
            student_id: 456,
            course_id: 98
        },  
        {
            student_id: 456,
            course_id: 99
        },{
            student_id: 789,
            course_id: 97
        },  
        {
            student_id: 789,
            course_id: 98
        },  
        {
            student_id: 789,
            course_id: 99
        }
    ],
    Assignments:[
        {
            assignment_id: 1,
            due: '2022/04/10',
            assignment_name: 'Spanish Essay #1',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 98
        },
        {
            assignment_id: 2,
            due: '2022/05/10',
            assignment_name: 'Spanish Essay #2',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 98
        },
        {
            assignment_id: 3,
            due: '2022/06/10',
            assignment_name: 'Spanish Essay #3',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 98
        },
        {
            assignment_id: 4,
            due: '2022/04/10',
            assignment_name: 'Writing Assignment #1',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 97
        },
        {
            assignment_id: 5,
            due: '2022/05/10',
            assignment_name: 'Writing Assignment #2',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 97
        },
        {
            assignment_id: 6,
            due: '2022/06/10',
            assignment_name: 'Writing Assignment #3',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 97
        },
        {
            assignment_id: 7,
            due: '2022/04/10',
            assignment_name: 'Psychology Essay #1',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 99
        },
        {
            assignment_id: 8,
            due: '2022/05/10',
            assignment_name: 'Psychology Essay #2',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 99
        },
        {
            assignment_id: 9,
            due: '2022/06/10',
            assignment_name: 'Psychology Essay #3',
            details: 'This is a small description of the assignment of which this refers. It only includes a preview.',
            total_points: 100,
            course_id: 99
        },
    ],
    Assigned_Work:[
        {
            assignment_id: 1,
            student_id: 123,
        },
        {
            assignment_id: 2,
            student_id: 123,
        },
        {
            assignment_id: 3,
            student_id: 123
        },
        {
            assignment_id: 4,
            student_id: 123,
        },
        {
            assignment_id: 5,
            student_id: 123,
        },
        {
            assignment_id: 6,
            student_id: 123,
        },
        {
            assignment_id: 7,
            student_id: 123,
        },
        {
            assignment_id: 8,
            student_id: 123,
        },
        {
            assignment_id: 9,
            student_id: 123,
        },
        {
            assignment_id: 1,
            student_id: 456,
        },
        {
            assignment_id: 2,
            student_id: 456,
        },
        {
            assignment_id: 3,
            student_id: 456,
        },
        {
            assignment_id: 4,
            student_id: 456,
        },
        {
            assignment_id: 5,
            student_id: 456,
        },
        {
            assignment_id: 6,
            student_id: 456,
        },
        {
            assignment_id: 7,
            student_id: 456,
        },
        {
            assignment_id: 8,
            student_id: 456,
        },
        {
            assignment_id: 9,
            student_id: 456,
        },
        {
            assignment_id: 1,
            student_id: 789,
            grade: 77
        },
        {
            assignment_id: 2,
            student_id: 789,
            grade: 90
        },
        {
            assignment_id: 3,
            student_id: 789,
            grade: 83
        },
        {
            assignment_id: 4,
            student_id: 789,
            grade: 94
        },
        {
            assignment_id: 5,
            student_id: 789,
            grade: 97
        },
        {
            assignment_id: 6,
            student_id: 789,
            grade: 68,
        },
        {
            assignment_id: 7,
            student_id: 789,
            grade: 85
        },
        {
            assignment_id: 8,
            student_id: 789,
            grade: 91
        },
        {
            assignment_id: 9,
            student_id: 789,
            grade: 95
        },
    ],
    Student_Notes: [
        {
            user_id: 11,
            note_json: ""
        },
        {
            user_id: 12,
            note_json: ""
        },
        {
            user_id: 13,
            note_json: ""
        },
    ]
}

async function importData(){
    for(let key in data){
        firstLine = "";
        secondLine = "";
        let sql = "";
        for(let i = 0; i < data[key].length; i++){
            firstLine += `INSERT INTO ${key}(`
            secondLine += 'VALUES('
            let objectCount = 0;
            for(let col in data[key][i]){
                objectCount ++;
                firstLine += col;
                secondLine += `'${data[key][i][col]}'`
                if(objectCount < Object.keys(data[key][i]).length){
                    firstLine += ', ' 
                    secondLine += ', '
                }else{
                    firstLine += ')'
                    secondLine += ');'
                }
            }
            sql += firstLine + secondLine;
            firstLine = "";
            secondLine = "";
        }
        await query(sql);
    }
}


//*********************TO BE ONLY RUN ONCE *************************

function makeDb(){
    const sql = 
    `CREATE TABLE Students(
        student_id INT(11) NOT NULL UNIQUE PRIMARY KEY,
        last_name VARCHAR(255) NOT NULL,
        first_name VARCHAR(255),
        birthday DATE
    );
    CREATE TABLE Users(
        user_id INT(11) NOT NULL PRIMARY KEY,
        student_id INT(11),
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        username VARCHAR(30) UNIQUE NOT NULL,
        FOREIGN KEY(student_id) REFERENCES Students(student_id)
    );
    CREATE TABLE Courses(
        course_id INT(11) NOT NULL PRIMARY KEY,
        course_name VARCHAR(255) NOT NULL,
        course_code VARCHAR(16) NOT NULL,
        overview TEXT
    );
    CREATE TABLE Assignments(
        assignment_id INT(11) NOT NULL PRIMARY KEY,
        due DATE,
        assignment_name VARCHAR(45) NOT NULL,
        details TEXT,
        total_points INT(11) NOT NULL,
        course_id INT(11) NOT NULL,
        FOREIGN KEY(course_id) REFERENCES Courses(course_id)
    );
    CREATE TABLE Enrollments(
        student_id INT(11) NOT NULL,
        course_id INT(11) NOT NULL,
        FOREIGN KEY(student_id) REFERENCES Students(student_id),
        FOREIGN KEY(course_id) REFERENCES Courses(course_id)
    );
    CREATE TABLE Assigned_Work(
        assignment_id INT(11) NOT NULL,
        student_id INT(11) NOT NULL,
        grade DECIMAL(10,0),
        FOREIGN KEY(assignment_id) REFERENCES Assignments(assignment_id),
        FOREIGN KEY(student_id) REFERENCES Students(student_id)
    );
    CREATE TABLE Student_Notes(
        user_id INT(11) NOT NULL,
        note_json TEXT,
        FOREIGN KEY(user_id) REFERENCES Users(user_id)
    );
    `
    db.query(sql,(err)=>{
        if(err){
            console.log(err)
        }
        console.log("Database successfully created")
    })

}

module.exports = {makeDb, importData};