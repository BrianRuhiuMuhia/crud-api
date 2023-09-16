const div=document.querySelector(".user-data")
const getbtn=document.querySelector(".get-users")
const clearbtn=document.querySelector(".hide-users")
const table=document.querySelector(".content")
let deleteBtns=undefined
let result=undefined
getbtn.addEventListener("click",async function()
{
    if(!result)
    {
        const data=await fetch("/home",{
            method:"GET"
        })
        result=result==undefined ? await data.json():result
    }
    
    displayOnPage(result)
    deleteBtns.forEach((btn,index)=>{
        btn.addEventListener("click",function(event)
        {
        
        const no=index
        const id=result[no]["id"]
        fetch(`/delete/${id}`,{
            method:"DELETE"
        })
        })
        })
}  
)
function displayOnPage(data)
{
loopThru(data)  

}
function loopThru(data)
{
    data.forEach(element => {
        createElement(JSON.stringify(element))
    });
}
function createElement(data)
{
    const div=document.createElement("div")
    const btn=document.createElement("button")
    btn.className="delBtn"
    deleteBtns=document.querySelectorAll(".delBtn")
    div.textContent=data
    btn.textContent="Delete"
    div.appendChild(btn)
    table.appendChild(div)
}
clearbtn.addEventListener("click",function()
{
table.textContent=""
})

