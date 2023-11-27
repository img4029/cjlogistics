'use strict';


// 상세페이지 상품 설명서 (클릭이벤트 구역)
let booktitle= document.querySelector('.booktitle');
let booktitle2= document.querySelector('.booktitle2');
let booktitle3= document.querySelector('.booktitle3');
let booktitle4= document.querySelector('.booktitle4');
let booktitle5= document.querySelector('.booktitle5');
/* 클래스를 가진 요소들을 선택하여 변수에 할당 */

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
/* 위에서 지정한 클래스를 클릭했을때 ID를 소유하고 있는 클래스에서 toggle(ON&OFF => add&remove를 합친 요소) 이벤트 발생 */



// 메뉴&위아래버튼 클릭시 페이지 내 해당 위치로 이동하는 이벤트
const sectionIds = ['#reviewmeun', '#detailmeun', '#recommendedmeun', '#topbuttons_3', '#bottombuttons_3']; 
 /* ID 식별자 정의 */
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));    
/* ID들을 사용하여 요소들을 참조 */

const observer = new IntersectionObserver(callback);     
sections.forEach(section => observer.observe(section));  
/* IntersectionObserver 함수는 비동기적으로 실행되기 때문에, scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 
렌더링 성능이나 이벤트 연속 호출이 가능 (콜백함수를 호출) */

function callback(entries) {
    const lastEntry = entries[entries.length - 1];
    const isLastEntryVisible = lastEntry.isIntersecting && lastEntry.intersectionRatio >= 0.65;
    const navIndex = isLastEntryVisible ? entries.length - 1 : entries.findIndex(entry => entry.isIntersecting);
    console.log(navIndex);
    // selectNavItem(navIndex);
}   
/* ntersectionObserver의 콜백 함수로, 네비게이션아이템을 호출 => [href="${id}"]  */

navItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});
/* (behavior: 'smooth')을 이용하여 해당 섹션으로 스크롤 이동 */


// 작은 이미지 사진 클릭시 이벤트 발생
const product_leftbox = document.getElementById('product_leftbox'),
img = product_leftbox.querySelector('img'),
imgleftbox1 = document.querySelector('.imgleftbox1'),
imgleftbox2 = document.querySelector('.imgleftbox2');
let beforeNation = product_leftbox[0];

function changeImg_nation(e) {
  console.log(e.src);
    img.src = e.src;
}

imgleftbox1.addEventListener('click', (e) => {
  console.log('1');
  changeImg_nation(e.target);
});

imgleftbox2.addEventListener('click', (e) => {
  console.log('1');
  changeImg_nation(e.target);
});

// 옵션 선택 후 제품을 장바구니에 담는 기능(데이터부분)

 let josn = ProductScent["20ml"]

 





