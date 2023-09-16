const express=require("express")
const {homePage,deleteUser,getOneUser,addUser,updateUser}=require("../controllers/controllers.js")
const route=express.Router()
route.get("/home",homePage)
route.get("/:id",getOneUser)
route.delete("/delete/:id",deleteUser)
route.post("/:id",addUser)
route.put("/:id",updateUser)
module.exports={route}