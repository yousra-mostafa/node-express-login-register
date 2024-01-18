const Todo = require('../models/Todo');

// TO create The User

const CreateTodo = async (_title, _status, _tags, _date, _user) => {
    try {
        let Tododata = await Todo.create({ title: _title, status: _status, tags: _tags, date:_date, user:_user })
        if (Tododata) {
            console.log(Tododata);
        }
        else {
            console.log("Sorry ! ERROR");
        }
    } catch (error) {
        console.log(error);

    }
}

// TO get Users 
const ShowTodoOfuser = async (_user) => {

    try {
        let Tododata = await Todo.find({user:_user});
        if (Tododata) {
            console.log(Tododata);
        }
    }
    catch (error) {
        console.log(error);
    }

}


// to delete User
const DeleteTodo = async (_title) => {

    try {
        let Tododata = await Todo.deleteOne({title: _title})
        if (Tododata) {
            console.log("successfully deleted");
        }
    }
    catch (error) {
        console.log(e);
    }

}


const UpdateTodo = async (_title, _tags) => {

    try {
        let Tododata =  await Todo.updateOne(
            { title:_title},
            { $set: { tags: _tags } }
        )
        if (Tododata) {
            console.log("Updated Successfully");
            console.log(Tododata)
        }
    }
    catch (error) {
        console.log(error);
    }

}



module.exports = {CreateTodo, ShowTodoOfuser,DeleteTodo,UpdateTodo};