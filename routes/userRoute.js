const userController = require('../controllers/UserController');
const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');

route.get('/', (req, res) => {
    res.send('hi in user route')
})

route.post('/register', async (req, res) => {
    try {//pass 111111111  
        let { username, password, firstname } = req.body;
        bcrypt.hash(password, 10, async function (err, hash) {
            let data = await userController.Register(username, hash, firstname);
            if (data) {
                console.log(data);
                res.status(200).send('user was registered successfully');//all is good
            }
            else {
                res.status(403).send("data error");//user error
            }
        });
    } catch (error) {
        res.status(500).json("internal server error");//develper error
    }
});


// async function checkUser(username, password) {
//     //... fetch user from a db etc.

//     const match = await bcrypt.compare(password, user.passwordHash);

//     if(match) {
//         //login
//     }

//     //...
// }

route.post('/login', async (req, res) => {
    try {
        console.log(req.body);
        let { username, password } = req.body;

        const hashPass = await userController.GetHashPasswerd(username);

        const passwordMatch = await bcrypt.compare(password, hashPass);

        if (passwordMatch) {

            res.status(200).send(`Logged in successfully ${username}`); //all is good

        } else {
            res.status(401).send("error invalid credentials");//user error

        }



    } catch (error) {
        res.status(500).send('server error');//develper error

    }

});



module.exports = route;