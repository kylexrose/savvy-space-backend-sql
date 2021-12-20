const {query,db} = require('../../server');


async function getUserById(req, res){
    try{
        const user_id = req.body;
        const sql = `SELECT * FROM Users WHERE user_id = ${db.escape(user_id)};`
        const foundUser = await query(sql);
        res.json({foundUser: foundUser[0]})
    }catch(e){
        res.json({e})
    }
}

async function login(req, res){
    const {username, password} = req.body;
    const sql = `SELECT password FROM Users WHERE username = ${db.escape(username)}`
    try{
        const foundUserPassword = await query(sql);
        if(!foundUserPassword.length){
            res.status(400).json({
                message:"failure",
                payload: "Please check your username and password",
            })
        }else{
            let comparedPassword = (password === foundUserPassword[0].password)
            // await bcrypt.compare(password, foundUser.password);
            if (!comparedPassword){
                res.status(400).json({
                    message: "failure",
                    payload: "Please check your username and password"
                })
            }else{
                const sql = `SELECT user_id, student_id, username, email FROM Users WHERE username = ${db.escape(username)}`
                const userInfo = await query(sql);
                // let jwtToken = jwt.sign(
                //     {
                //         username: foundUser.username
                //     },
                //     process.env.PRIVATE_JWT_KEY,
                //     {
                //         expiresIn: "1d",
                //     }
                // );

                res.json({user: userInfo[0]});
            }
        }
    }catch(e){
        res.json({message: "error", error: e.message});
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
                    VALUES (${db.escape(student_id)} , '${db.escape(email)}' , '${db.escape(username)}', '${db.escape(hashedPassword)}')`;
        db.query(sql, (err)=>{
            if(err){
                res.json({error: err})
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
        SET student_id = '${db.escape(student_id)}', email = '${db.escape(email)}', username = '${db.escape(username)}'
        WHERE user_id = ${db.escape(user_id)}`;
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
    const sql = `DELETE FROM User WHERE user_id = ${db.escape(user_id)}`
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
    login,
    updateUserById,
    deleteUserById
}