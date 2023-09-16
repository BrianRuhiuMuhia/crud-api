const express=require("express")
const {route} =require("./routes/routes.js")
const dotenv=require("dotenv")
dotenv.config()
const app=express()
app.use(express.json())
app.use(express.static("./public"))
app.use("/",route)
app.all("*",function(req,res)
{
    return res.status(404).send("404")
})
app.listen(process.env.PORT,()=>{
    console.log(`server live on port ${process.env.PORT}`)
})