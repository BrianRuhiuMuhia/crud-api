const {db}=require("../database/database.js")
function homePage(req,res)
{
db.query("select * from public.person_db",function(err,result)
{
if(err)
{
    console.log(err)
    return res.json({"mssg":err})
}
else{
    return res.json(result.rows)

}
})
}
function getOneUser(req,res)
{
    const {id} =req.params
db.query("select * from public.person_db where id=$1",[id],function(err,result)
{
if(err)
{
    console.log(err)
    return res.json({"mssg":err})
}
else{
    return res.json(result.rows)

}
})
}
function deleteUser(req,res)
{
const {id}=req.params
db.query("delete from public.person_db where id = $1",[id])
return res.redirect("/")
}
function addUser(req,res)
{
    const {id,first_name,last_name,email,ip_address}=req.body
    db.query("insert into public.person_db values($1,$2,$3,$4,$5)",[id,first_name,last_name,email,ip_address],(err,result)=>{
if(err)
{
    console.log(err)
}
    })
}
function updateUser(req,res)
{
const {id,first_name,last_name,email,ip_address}=req.body
db.query("update public.person_db set first_name=$1,last_name=$2,email=$3,ip_address=$4"[first_name,last_name,email,ip_address],(err,result)=>{
    if(err)
    {
        console.log(err)
    }
})

}
module.exports={homePage,deleteUser,getOneUser,addUser,updateUser}