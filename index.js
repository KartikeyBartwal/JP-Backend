require('dotenv').config()
console.log(process.env)

const express = require("express")
const app = express()

app.get('/' , (req , res) =>{
    res.send("You're Gay!")
}); 

app.get('/twitter' , (req , res) =>{
    res.send("Its X now")
});

app.get('/login' , (req , res) =>{
    res.send("<h1> Thank you for logging </h1>")
});

app.get('/youtube' , (req , res)=>{
    res.send("Pikachu");
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
    console.log("Pikachu")
});


console.log("Chai aur Code")