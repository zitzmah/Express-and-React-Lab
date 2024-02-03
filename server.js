//Import Dependencies
const express = require("express");
const cors = require("cors");

//Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");

//create our app object
const app = express();

//set up middleware
app.use(cors());

//home route for testing our app
app.get("/", (req, res) => {
    res.send("Hello World")
});

//route for retrieving projects
app.get("/projects", (req, res) => {
    res.json(projects);
});

//route for retrieving about info
app.get("/about", (req, res) => {
    res.json(about)
});

//declare a variable for our port number
const PORT = process.env.PORT || 4000;

//turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))