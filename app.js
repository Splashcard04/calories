const express = require(`express`)
const app = express()
const path = require(`path`)

app.set(`view engine`, `ejs`)
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, `css`)))

app.get(`/`, (req, res) => {
    res.render(__dirname + `/html/entry.ejs`)
})

app.post(`/tracker`, (req, res) => {
    let goal = req.body.cals;
    if(!goal || goal === undefined) {
        res.render(__dirname + `/html/tracker.ejs`)
    } else {
        res.render(__dirname  + `/html/trackerwgoal.ejs`, { goal: goal })
    }
    
})

app.listen(3000)