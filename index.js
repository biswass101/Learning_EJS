const express = require("express")
const app = express()
const PORT = 3000;

app.use(express.urlencoded({extended : true}))
app.set("view engine", "ejs")

let plangs = []

app.get("/", (req, res) => {
    res.render("index", {pl : plangs})
})

app.post("/", (req, res) => {
    const plang = req.body.plang
    plangs.push(plang)
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:"+PORT);
})