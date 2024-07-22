/*USER FRIENDLY TO DO LIST WEB APP- JAVACRIPT FILE*/

let inputBx=document.querySelector('#inputBx');
let list=document.querySelector('#list');
console.log(list);
inputBx.addEventListener("keyup",function(event){
  if(event.key=="Enter"){
      addItem(this.value)
      this.value="";
  }
})


  let addItem = (inputBx) => {
      let listItem=document.createElement("li");
      listItem.innerHTML= `${inputBx}<i></i>`;

    listItem.addEventListener("click",function(){
     this.classList.toggle('done');
   })
   listItem.querySelector("i").addEventListener("click",function()
   {
   listItem.remove();
   })
   list.appendChild(listItem);
   }

