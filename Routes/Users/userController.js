const db = require('../../server');

async function getUserById(req, res){
    try{
        const userId = req.params.id;
        const sql = `SELECT * FROM Users WHERE user_id = ${userId};`
        db.query(sql, (err, payload)=>{
            if(err){
                throw err;
            }
            res.json({payload})
        })
    }catch(e){
        res.json({e})
    }
}

async function createUser(req, res){
    try{
        const {
            student_id,
            email,
            username,
            password,
        } = req.body;

        let salt = await bcrypt.genSalt(12);
        let hashedPassword = await bcrypt.hash(password, salt);
    
        const sql = `INSERT INTO Users(student_id, email, username, password) 
                    VALUES (${student_id} , '${email}' , '${username}', '${hashedPassword}')`;
        db.query(sql, (err)=>{
            if(err){
                console.log(err.code)
                console.log('line 31')
                throw err;
            }
            res.json({message: 'User created...'})
        })
    }catch(e){
        res.json({e})
    }
}

async function updateUserById(req, res){
    const {
        user_id,
        student_id,
        email,
        username
    } = req.body;
    const sql = 
        `UPDATE Users 
        SET student_id = '${student_id}', email = '${email}', username = '${username}'
        WHERE user_id = ${user_id}`;
    try{
        db.query(sql, (err)=>{
            if(err){
                throw err;
            }
            res.json({message: 'User updated...'})
        })
    }catch(e){
        res.json({e})
    }
}

async function deleteUserById(req, res){
    const user_id = req.params.id;
    const sql = `DELETE FROM User WHERE user_id = ${user_id}`
    try{
        db.query(sql, (err)=>{
            if(err){
                throw err;
            }
            res.json({message: 'User deleted...'})
        })
    }catch(e){
        res.json({e})
    }
}

module.exports = {
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}