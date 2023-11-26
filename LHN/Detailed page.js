'use strict';


// 상세페이지 상품 설명서 (클릭이벤트 구역)
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

// 메뉴 클릭시 페이지 내 해당 위치로 이동하는 이벤트

const sectionIds = ['#reviewmeun', '#detailmeun', '#recommendedmeun'];
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));

const observer = new IntersectionObserver(anny);
sections.forEach(section => observer.observe(section));

function anny(entries) {
    const lastEntry = entries[entries.length - 1];
    const isLastEntryVisible = lastEntry.isIntersecting && lastEntry.intersectionRatio >= 0.25;
    const navIndex = isLastEntryVisible ? entries.length - 1 : entries.findIndex(entry => entry.isIntersecting);
    selectNavItem(navIndex);
}

function selectNavItem(index) {
    const navItem = navItems[index];
    if (!navItem) return;

    if (activeNavItem) {
        activeNavItem.classList.remove('active');
    }

    activeNavItem = navItem;
    activeNavItem.classList.add('active');
}

navItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});








