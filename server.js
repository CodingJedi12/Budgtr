// DECLARE DEPENDENCIES
const express = require("express")

// INITIALIZE APP EXPRESS
const app = express()

///////////////
// ROUTES
///////////////

//INDEX
app.get("/budgets", (req, res) => {
    res.send("Budgets")
})

//NEW
app.get("/budgets/new", (req, res) => {
    res.send("Budgets New")
})

//CREATE
app.post("/budgets", (req, res) => {
    res.send("Budgets")
})

//SHOW
app.get("/budgets/:index", (req, res) => {
    res.send("Budgets Index")
})


// CANN YOUUUU HEARRRR MEEEEE
app.listen(3000, () => {
    console.log("we live")
})