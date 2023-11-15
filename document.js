//1//
const rimuoviTwitter = function () {
    let linko = document.querySelector("main .p-4:last-of-type li:nth-of-type(2)")
    linko.innerHTML="<style> display: none </style>"
}
rimuoviTwitter()
//2//
const rimuoviLeggere = function(){
    const continua = document.querySelector(".stretched-link")
    continua.innerHTML="<style> display: none </style>"
}
document.querySelector(".stretched-link").addEventListener("click",rimuoviLeggere)

//3//
const autore = function(event){
    alert(event.target.innerText);
   }
   
   const authori = document.querySelectorAll(".blog-post p:first-of-type a");
   
   for(let i=0; i<authori.length; i++){
    authori[i].addEventListener("click",autore);
   }
   //4//

   const resta =function(event){
    alert("baby resta")
   }
   const agg =document.querySelector(".text-muted")
   agg.addEventListener("click",resta)