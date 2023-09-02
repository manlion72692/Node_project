const express = require("express");

const app = express();

//app.method(endpoint(string), callback function);
app.get("/home", (req, res) => {
    res.send("<h1>Hello Browser</h1>");
});

app.post("/home", (req, res) => {
    res.send("<h1>Hello Request</h1>");
});

app.put("/home", (req, res) => {
    res.send({ name: "Narasimha", age: 22 });
});

app.listen(8080, () => console.log("server is up at 8080"));