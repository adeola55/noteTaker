var router = require("express").Router()
var data = require("../db/db.json");
var fs = require("fs")

router.get("/notes",function(req,res){ // matches route "/api/notes" get
  console.log("Data",data)
  res.json(data)
})


router.post("/notes",function(req,res){  //matches route "/api/notes" post route
  console.log("Data from user",req.body);
  var record ={
    id:data.length,
    title: req.body.title,
    text: req.body.text
  }
  data.push(record)  //Moved it to array
  fs.writeFileSync("./db/db.json",JSON.stringify(data),function(err,ress){
    if (err) throw err
    console.log(ress)
    res.json(data)
  })
 
})
router.delete("/notes/:id",function(req,res){
  var tempData = []
  console.log("ID",req.params.id)
  for(i =0; i < data.length; i++){
    if (parseInt(data[i].id) !== parseInt(req.params.id)){
      tempData.push(data[i])
    }
  }
  console.log("Temp data",tempData)
  data=tempData
  fs.writeFileSync("./db/db.json",JSON.stringify(data),function(err,ress){
    if (err) throw err
    console.log(ress)
    res.json(data)
  })
})

module.exports = router;
