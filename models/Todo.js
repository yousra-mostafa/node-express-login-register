const mongoose = require('mongoose');


const TodoSchema = mongoose.Schema({
    title:
    {
        type: String,
        required: true,
        min: 5,
        max: 20
    },
    status:
    {
        type: String,
        default: "to-do",

    },
    tags:
    {
        type: [],
        maxLength: 10

    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

})

const Todo = mongoose.model('Todo', TodoSchema);
Todo.createIndexes({ title: 1 });   // it make title as uniqe for search for
//it useing find faster  
module.exports = Todo;