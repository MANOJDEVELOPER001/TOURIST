import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(express.static('public'));
const port=3001;
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get("/",(req,res)=>{
    res.render('home');
});
app.get("/explore1",(req,res)=>{
    res.render('explore1');
});
app.get("/explore2",(req,res)=>{
    res.render('explore2');
});
app.get("/explore3",(req,res)=>{
    res.render('explore3');
})
app.get("/explore4",(req,res)=>{
    res.render('explore4');
})
app.get("/explore5",(req,res)=>{
    res.render('explore5');
})
app.get("/explore6",(req,res)=>{
    res.render('explore6');
})
app.get("/booking1",(req,res)=>{
    res.render('booking1');
})
app.get("/booking2",(req,res)=>{
    res.render('booking2');
})
app.get("/booking3",(req,res)=>{
    res.render('booking3');
})
app.get("/booking4",(req,res)=>{
    res.render('booking4');
})
app.get("/booking5",(req,res)=>{
    res.render('booking5');
})
app.get("/booking6",(req,res)=>{
    res.render('booking6');
})
app.get("/form1",(req,res)=>{
    res.render('form1');
})
app.get("/submit",(req,res)=>{
    res.render('home');
})
app.listen(port,()=>{
    console.log("server started");
});
