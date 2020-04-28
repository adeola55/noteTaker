var router = require("express").Router()
var data = require("../db.json")
router.get("/notes",function(req,res){ // matches route "/api/notes" get
  console.log("Data",data)
  res.json(data)
})


router.post("/notes",function(req,res){  //matches route "/api/notes" post route
  console.log("Data from user",data)
  data.push(req.body)
})


module.exports = router;
