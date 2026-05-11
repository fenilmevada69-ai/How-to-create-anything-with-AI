const express = require("express");
const app = express();
app.listen(3000, () => {
    console.log("Server is running on port 3000");``
})  //server is only created, but not running yet. to start we need to call listen method

// '/' API
app.get("/", (req, res) => {
    res.send("Hello World!")
})

// 'health' API
app.get("/health", (req, res) => {
    res.send("server is healthy!");
})

app.get("/health", (req, res) => {
    res.send("server is healthy!");
})