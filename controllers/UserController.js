const User = require('../models/User');


// TO make Register of The User

const Register = async (_username, _password, _firstname, _age) => {
    try {

        let userdata = await User.create({ username: _username, password: _password, firstname: _firstname, age: _age })
        console.log(userdata)
        if (userdata) {
            console.log("user was registered successfully");
            return userdata;
        }
        else {
            console.log("Sorry ! ERROR");
        }
    } catch (error) {
        console.log(error);

    }
}


// TO make LogIn in The Todo


const Login = async ( _username,_password ) => {
    try {
        let userdata =  await User.find({ username: _username, password: _password });
        if (userdata) {
            console.log("logged in successfully");
        }
        else {
            console.log("error:”invalid credentials” ")
        }
    }
    catch (error) {
        console.log(error);
    }


}


// TO get Users 
const ShowUser = async  () => {

    try {
        let userdata = await User.find({},"firstname");
        if (userdata) {
            console.log(userdata);
        }
    }
    catch (error) {
        console.log(error);
    }

}


// to delete User
const DeleteUser = async (_username) => {

    try {
        let userdata = await User.deleteOne({ username: _username })
        if (userdata) {
            console.log("successfully deleted");
        }
    }
    catch (error) {
        console.log(e);
    }

}


const UpdateUser = async (_username, _age) => {

    try {
        let userdata = await User.updateOne(
            { username: _username},
            { $set: { age: _age } }
        )
        if (userdata) {
            console.log("Updated Successfully");
            console.log(userdata)
        }
    }
    catch (error) {
        console.log(error);
    }

}

async function GetHashPasswerd(username) {
    try {
    
        const user = await User.findOne({ username });

        if (user) {
            return user.password;
        } else {
            console.log("eror");
        }
    } catch (error) {
        console.error('Error during GetHashpassword', error);
    
    }
}


module.exports = { Register, Login, ShowUser, DeleteUser, UpdateUser, GetHashPasswerd};