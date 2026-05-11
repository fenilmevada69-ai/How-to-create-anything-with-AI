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

app.get('/users', async (req, res) => {
    try {   
        const users = await userModel.find();
        res.json(users);
    } catch(err) {
        res.status(500).send("Error fetching your details")
    }
});



//this will update through id
app.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(
            req.params.id,
            { username: "updatedName" },
            { new: true }
        );

        res.json(updatedUser);
    } catch (err) {
        res.status(500).send("Error updating user");
    }
});


app.delete('/users/:id', async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id);
        res.send("User deleted");
    } catch (err) {
        res.status(500).send("Error deleting user");
    }
});


// 'health' API
app.get("/health", (req, res) => {
    res.send("server is healthy!");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
})  //server is only created, but not running yet. to start we need to call listen method