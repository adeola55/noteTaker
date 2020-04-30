const express = require ("express")
const PORT = process.env.PORT || 8080
const app = express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))



app.use("/api",require("./routes/apiroutes"))

app.use("/",require("./routes/htmlroutes"))

app.listen(PORT,function(){
  console.log("app is listening",PORT)
})