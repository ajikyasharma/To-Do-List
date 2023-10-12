let form= document.getElementById("addForm")
let ulElement= document.getElementById("items")
let filter= document.getElementById("filter");


function addToDoHandler(x){
    
    x.preventDefault()

  let val= document.getElementById("item").value
  if(val.length == 0)
  {
    alert("Please enter some text")
  }
  else
  {
   let liElement= document.createElement("li")
   liElement.innerHTML= val
   liElement.className="list-group-item"

   let btn= document.createElement("button")
   btn.innerHTML= "X"
   btn.className="btn btn-danger btn-sm float-right delete"
   liElement.appendChild(btn)
   let ulElement= document.getElementById("items")
   ulElement.appendChild(liElement)

   attachEventListener();

   let ele= document.getElementById("item")
   ele.value=""
  }
}


function removeToDoHandler(x)
{
    if(x.target.classList.contains("delete")){
          let element= x.target.parentElement
          ulElement.removeChild(element)

    }
    else{
        alert("Bhai kyu time waste kr rha hai")
    }
}

function searchHandler(x)
{
   
 let allElements= document.getElementsByClassName("list-group-item")
  
 for(let i=0; i<allElements.length; i++)
 {
   if(allElements[i].firstChild.textContent.toLowerCase().indexOf(x.target.value) != -1)
   {
        allElements[i].style.display="block"

   }
   else{
    allElements[i].style.display="none"
   }
 }
}

filter.addEventListener("keyup",(e)=>searchHandler(e))

form.addEventListener("submit", (e)=>addToDoHandler(e))

attachEventListener()
function attachEventListener()
{
  let allLiElements= document.getElementsByClassName("list-group-item")
for(let i=0; i<allLiElements.length; i++)
{
    allLiElements[i].addEventListener("click",(e) =>removeToDoHandler(e))
}
}

