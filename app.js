"use strict";

let template = document.querySelector(".card-templ").content;
let cards = $(".hero-cards");
let elForm = $(".form-search");
let elInput = $(".search");
let languages = $(".books-lang");
let authors = $(".books-author");
let elLinks = $(".hero-links");
let elBasket = $(".basketWrapper");


let languageArr = [];
let authorsArr = [];


renderUi(books, 8);

// number filter enabled
let numbers = Math.ceil(books.length / 8);
for(let i=0; i<numbers; i++){
    let newLi = elCreator("li", `${i+1}`);
    newLi.setAttribute("class", "hero-link py-2 px-3 rounded-2 shadow");
    elLinks.appendChild(newLi);
}

let numberLink = $$(".hero-link");

numberLink.forEach(item=>{
    item.addEventListener("click", (evt)=>{
        let elValue = +evt.srcElement.innerHTML;
        renderUi(books, elValue*8);
    })
});





// languages filtered
books.filter(item => {
    if(!languageArr.includes(item.language)){
        languageArr.push(item.language);
    };
});

languageArr.forEach(item=>{
    let newLi = elCreator("option", `${item}`);
    languages.appendChild(newLi)
});

languages.addEventListener("change",(evt)=>{
    let elValue = languages.value;
    let filteredArr = books.filter(item=>{
        return item.language == elValue;
    })

    if(elValue != 0){
        renderUi(filteredArr)
    } else{
        renderUi(books, 8);
    }
});




// authors filtered
books.filter(item => {
    if(!authorsArr.includes(item.author)){
        authorsArr.push(item.author);
    };
});

authorsArr.forEach(item=>{
    let newLi = elCreator("option", `${item}`);
    authors.appendChild(newLi)
});

authors.addEventListener("change",(evt)=>{
    let elValue = authors.value;
    let filteredArr = books.filter(item=>{
        return item.author == elValue;
    })

    if(elValue != 0){
        renderUi(filteredArr)
    } else{
        renderUi(books, 8);
    }
});



// search element
elInput.addEventListener("input", (evt)=>{
    let elValue = elInput.value;
    let filteredArr = books.filter(item=>{
        return (item.author.toLowerCase().includes(elValue) || item.title.toLowerCase().includes(elValue))
    })

    if(elValue){
        renderUi(filteredArr);
    } else{
        renderUi(books, 8);
    }
});



cards.addEventListener("click", (evt)=>{
    if(evt.target.classList.contains("basket")){
        console.log(evt.target.setAttribute("dataSet","true"));
    }
});



