var router = require("express").Router()
var data = require("../db/db.json");
var fs = require("fs")

router.get("/notes",function(req,res){ // matches route "/api/notes" get
  console.log("Data",data)
  res.json(data)
})


router.post("/notes",function(req,res){  //matches route "/api/notes" post route
  console.log("Data from user",req.body);
  data.push(req.body)  //Moved it to array
  fs.writeFileSync("./db/db.json",JSON.stringify(data),function(err,ress){
    if (err) throw err
    console.log(ress)
    res.json(data)
  })
 
})


module.exports = router;
