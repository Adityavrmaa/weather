const express  = require("express")
const app = express();
const port = process.env.PORT || 7000;
const path = require("path");
const hbs = require("hbs")


const webpath =  path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


app.set('view engine', 'hbs');
// set and change new path
app.set("views", template_path);

hbs.registerPartials(partials_path);

app.use(express.static(webpath));
app.get("",(req,res)=>{
 res.render('index');
})

app.get("/",(req,res)=>{
 res.render('index');
})
app.get("/about",(req,res)=>{
 res.render('about');
})
app.get("/weather",(req,res)=>{
 res.render('weather');
})
app.get("*",(req,res)=>{
 res.render('error',{
   errormsg:"opps something is wrong"
 });
})




app.listen(port,()=>{
  console.log("server is now in 7000");
});
