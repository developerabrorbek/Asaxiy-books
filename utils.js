"use strict";

function renderUi(arr,elNumber) {
  cards.innerHTML = "";

  if(elNumber){
    arr.forEach((item,index)=>{
      if((index>elNumber-9) && (index<elNumber)){
        let copy = template.cloneNode(true);
      let card = copy.querySelector(".card");
      let image = copy.querySelector(".card-img");
      let bookName = copy.querySelector(".card-body__title");
      let bookYear = copy.querySelector(".year");
      let bookPage = copy.querySelector(".page");
      let bookWiki = copy.querySelector(".wiki");
      let bookLang = copy.querySelector(".lang");
  
      image.setAttribute("src", `${item.imageLink}`);
      bookName.innerHTML = `${item.author}: ${item.title}`;
      bookLang.innerHTML = `${item.language}`;
      bookWiki.setAttribute("href", `${item.link}`);
      bookPage.innerHTML = `${item.pages}`;
      bookYear.innerHTML = `${item.year}`;
  
      cards.appendChild(card);
      }
  })
  } else{
    arr.forEach((item)=>{
        let copy = template.cloneNode(true);
      let card = copy.querySelector(".card");
      let image = copy.querySelector(".card-img");
      let bookName = copy.querySelector(".card-body__title");
      let bookYear = copy.querySelector(".year");
      let bookPage = copy.querySelector(".page");
      let bookWiki = copy.querySelector(".wiki");
      let bookLang = copy.querySelector(".lang");
  
      image.setAttribute("src", `${item.imageLink}`);
      bookName.innerHTML = `${item.author}: ${item.title}`;
      bookLang.innerHTML = `${item.language}`;
      bookWiki.setAttribute("href", `${item.link}`);
      bookPage.innerHTML = `${item.pages}`;
      bookYear.innerHTML = `${item.year}`;
  
      cards.appendChild(card);
  })
  }
}

const elCreator = (tagName, textContent) => {
  let newEl = document.createElement(tagName);

  if (textContent) {
    newEl.innerHTML = textContent;
  }

  return newEl;
};

function $(className){
  let newEl = document.querySelector(className);
  return newEl;
}

function $$(className){
  let newEl = document.querySelectorAll(className);
  return newEl;
}


