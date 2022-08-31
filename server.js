// DECLARE DEPENDENCIES
const express = require("express")
const budget = require("./models/budget.js")
// INITIALIZE APP EXPRESS
const app = express()

//ESTABLISH MIDDLEWARE
app.use(express.static('public'))

///////////////
// ROUTES
///////////////

//INDEX
app.get("/budgets", (req, res) => {
    res.render("budget_index.ejs", {
        budgets: budget
    })
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
    res.render("budget_show.ejs", {
        budgetIndex: budget[req.params.index]
    })
})


// CANN YOUUUU HEARRRR MEEEEE
app.listen(3000, () => {
    console.log("we live")
})