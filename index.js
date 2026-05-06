const express=require("express");
const app=express();
const port=3000;
const path=require("path");

const mysql=require("mysql2");

const connnection=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'stu',
    password:'shalini'

})

connnection.query("SELECT * FROM stu",(err,resu)=>{
    console.log(err);
    console.log(resu);
})

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));


app.listen(port,()=>{
    console.log("server is wwokring");
})

app.get("/",(req,res)=>{
    res.send("working");
})

app.get("/data",(req,res)=>{
    let q="SELECT * FROM stu";
    connnection.query(q,(err,resu)=>{
        let result=resu;
        console.log(result);
        console.log(err);
          res.render("sql.ejs",{result});
    })
  
})