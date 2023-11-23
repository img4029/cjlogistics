'use strict';

const tbody = document.getElementsByTagName('tbody');
const tr = document.createElement('tr');
// td = document.createElement('td');

// td 6개가 반복되게 for문 사용
// 다차원 배열 활용
function orderList() {

    const content = ["content_index", "content_date", "content_item", "content_credit", "contetn_detail", "contetn_delivery"]

    for (let i = 0; i < content.length; i++) { // 주문 1회 증가 시 row 증가
        for (let j = content[0]; j < content.length; j++) { // 주문 시 열별 데이터 입력

        }
    }

}

orderList();



// const getTd = (id) => {
//     const content = document.getElementsByTagName("td");
//     content.classList.add("content");
//     content.innerHTML = `
//       <span class="content_id">${id}</span>
//       <span class="content_date">2022.01.01</span>
//       <span class="content_item">상품명</span>
//       <span class="content_credit">결제금액</span>
//       <button class="contetn_detail"></button>
//       <button class="contetn_delivery"></button>
//     `;
//     return content;
//   };




// scollButton

'use strict';

const scrollTop = document.querySelector('.scrollTop');

document.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 20) {
    scrollTop.classList.add('visible');
  } else {
    scrollTop.classList.remove('visible');
  }
});

scrollTop.addEventListener('click', () => {
  const stopScroll = setInterval(() => {
    window.scrollBy(0, -5)

    if (window.scrollY <= 0) clearInterval(stopScroll);
  }, 5);
})