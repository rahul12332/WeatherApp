const { application } = require('express')
const express = require('express')
const app = express()
const hbs = require('hbs')
const port = 5000
const path = require('path')

app.use(express.static(path.join(__dirname, "../public")))
//let set view engine for dynamic data
const partialPath = path.join(__dirname, "../templates/partials")
const template_path = path.join(__dirname, "../templates/views")

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partialPath);


app.get("/", (req, res)=>{
  res.render("index")
})

app.get("/about", (req, res)=>{
  res.render("about")
})
app.get("/weather", (req, res)=>{
  res.render("weather")
})
app.get("*", (req, res)=>{
  res.render("error")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})