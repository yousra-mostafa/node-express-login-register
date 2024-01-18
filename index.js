// Starting Connect to Data Base
const mongoose = require('mongoose');
const User = require('./models/User');
const Todo = require('./models/Todo');
const UserController = require('./controllers/UserController');
const TodoController = require('./controllers/TodoController');
const express = require('express')
const app = express()
const port = 3001;
const userRoute = require('./routes/userRoute');




mongoose.connect('mongodb://127.0.0.1:27017/MongoDB3').then(() => {

    console.log("great!!!  Sucessfully connected to db");

}).catch(err => {
    console.log(err);
})


app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute);//middelwair

// UserController.Register('ahmed','12345fah','mostafa','21');
// UserController.Login('yousra','12345hag');
// UserController.ShowUser();
// UserController.DeleteUser('ahmed');
// UserController.UpdateUser('yousra','24')



// TodoController.CreateTodo('Reading','doing','English','6/13/2014','65a67f0850e07853b0d98bdc')
// TodoController.CreateTodo('Playing','doing','Doha','7/1/2014','65a67f0850e07853b0d98bdc')
// TodoController.DeleteTodo('lab')
// TodoController.DeleteTodo('lab')
// TodoController.UpdateTodo('project','Css');








app.listen(port, () => console.log(`Example app listening on port ${port}!`))
