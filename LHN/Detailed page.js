'use strict';


let booktitle= document.querySelector('.booktitle');
let booktitle2= document.querySelector('.booktitle2');
let booktitle3= document.querySelector('.booktitle3');
let booktitle4= document.querySelector('.booktitle4');
let booktitle5= document.querySelector('.booktitle5');

booktitle.addEventListener ('click',function() {
  let heading = document.getElementById("heading");
  heading.classList.toggle("hidden");
});

booktitle2.addEventListener ('click',function() {
  let heading2 = document.getElementById("heading2");
  heading2.classList.toggle("hidden2");
});

booktitle3.addEventListener ('click',function() {
  let heading3 = document.getElementById("heading3");
  heading3.classList.toggle("hidden3");
});

booktitle4.addEventListener ('click',function() {
  let heading4 = document.getElementById("heading4");
  heading4.classList.toggle("hidden4");
});

booktitle5.addEventListener ('click',function() {
  let heading5 = document.getElementById("heading5");
  heading5.classList.toggle("hidden5");
});




