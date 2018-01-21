const mongoose = require("mongoose");


const todoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name connot be blank"
    },
    completed: {
        tpye: Boolean,
        default: false
    },
    created_date: {
        typeof: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
