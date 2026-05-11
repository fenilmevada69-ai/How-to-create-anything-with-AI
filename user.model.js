//mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.


const mongoose = require('mongoose');
mongoose.connect("mongodb://0.0.0.0/create-anything-with-ai")  //create-anything-with-ai is our database name(can be any name)
.then(() => {
    console.log("Connected to MongoDB");
})
//if databse not exist then it will be created automatically when we insert data into it



const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    age: Number  
})


//CRUD operation is handled(done by) user-model
const userModel = mongoose.model("users", userSchema)


module.exports = userModel;