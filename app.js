const express = require("express");
const userModel = require("./user.model")

const app = express();

// '/' API
// app.get("/", (req, res) => {
//     res.send("Hello World!")
// })


app.get('/', async (req, res) => {
    await userModel.create({
        username: "test",
        email: "test@test.com",
        age: 23
    })
    res.send("User created successfully!")
})


// 'health' API
app.get("/health", (req, res) => {
    res.send("server is healthy!");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");``
})  //server is only created, but not running yet. to start we need to call listen method