// import our require modules
var express = require("express");
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

// create inr
const app = express()

// used those  modules 
app.use(bodyparser.json() );
app.use(express.static('public'))
app.use(bodyparser.urlencoded ({
    extended:true
}))

// connecting  the mongo DB (DataBase)
mongoose.connect('mongodb://localhost:27017/DataBase')
var db=mongoose.connection
db.on("error",() => console.log("Error in connecting to DataBase"))
db.on("open" , () => console.log('Connected to DataBase'))


// taken the value  as a input 
app.post("Sing_up" , (req , res) => {
    var name = req.body.name
    var age = req.body.age
    var email = req.body.email
    var phone = req.body.phone
    var gender = req.body.gender
    var password = req.body.password


    //  create an object 
    var data={
        "name":name,
        "age":age,
        "email":email,
        "phone":phone,
        "gender":gender,
        "password":password
    }

    //here check the data if we get any error then get error else show this console message !
    db.collection('user').insertData(data,(err , collection) => {
        if(err){
            throw err;

        }
        console.log("Record inserted Sucessfully ");
        
    })
    // then we are going to redirect to  sing up sucessfully 
     return res.redirect('singup_Sucess.html')


})

   // this is used to stablish connection between  locolhost an our file.
app.get("/",(req , res) => {
    res.set({
        "Allow-access-Allow-Origin":'*'
    })

    return res.redirect('index.html')

}).listen(3000);

console.log("Listing on the 3000");
