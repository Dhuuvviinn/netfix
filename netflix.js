

  
let element=document.querySelectorAll('.tab-item');
let dh = document.querySelectorAll(".tab-content-item");
//   for(var i=0;i<=element.lenght;i++){
//     console.log(i);
// element[i].addEventListener('click',()=>{
//     element[i].classList.add('tab-border');
// })
console.log(element);
element.forEach((element)=>{
element.addEventListener("click",chg)
function chg(){
 remove();

 removeShow();
  this.classList.add('tab-border');
  console.log(this.id);
  let ite=document.querySelector(`#${this.id}-content`);
   console.log(ite.id)
  ite.classList.add("show")

}
})
function remove(){
  element.forEach(function (item){
    item.classList.remove("tab-border")
  })
}
function removeShow(){

  dh.forEach(function (item) {
    item.classList.remove("show");
  })
    
  

 
}