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
let autori=event.target.querySelectorAll("main .blog-post :nth-child(2) a ");
      function autore(event) {
        console.log(event.target.innerText);
      }
      autori.addEventListener("click", autore);