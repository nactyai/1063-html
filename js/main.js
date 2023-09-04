/*hamburger menu*/
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("activve");
  navMenu.classList.toggle("activve");
});

document.querySelectorAll('.menu-link').forEach(n =>
n.addEventListener("click", () => {
  hamburger.classList.remove("activve");
  navMenu.classList.remove("activve");
}));


/*accordion*/

let acc_title = document.querySelectorAll('.accordion-title');
acc_title.forEach(item => {
  item.addEventListener('click', function () {
    acc_title.forEach(el => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
        el.nextElementSibling.style.maxHeight = null;
      } else if (el === item) {
        el.classList.add('active');
        el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
      }
    });
  });
});


/*contact accordion */
let title__contact = document.querySelectorAll('.accordion__city-title');
title__contact.forEach(item => {
  item.addEventListener('click', function () {
    title__contact.forEach(el => {
      if (el.classList.contains('active-city-btn')) {
        el.classList.remove('active-city-btn');
        el.nextElementSibling.style.maxHeight = null;
      } else if (el === item) {
        el.classList.add('active-city-btn');
        el.nextElementSibling.style.maxHeight = el.nextElementSibling.scrollHeight + 'px';
      }
    });
  });
});


/* blur service*/

function app(){
  const buttons = document.querySelectorAll('.service__btn');
  const cards = document.querySelectorAll('.service__item');
  
  function filter (category, items){
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      if(isItemFiltered){
        item.classList.add('blur');
      }
      else{
        item.classList.remove('blur');
      }
    })
  }
  
  
  
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const currentCategory = button.dataset.filter;
      filter(currentCategory, cards);
     
    })
  })
}

app();

