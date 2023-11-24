'use strict'


let couponList = document.querySelector('.mycoupon_list');




let makeInner = new Array(5);
makeInner.fill(0);

console.log(makeInner);

let headData = ['쿠폰 번호', '쿠폰 유형', '쿠폰 이름', '쿠폰 안내', '유효 기간'];
let bodyData = ['H57HESOZ', {
    title: '장바구니쿠폰', help: '쿠폰 중복 사용 불가능'
}, '신규가입 쿠폰', { title: '할인금액 10%', help: '신규가입 대상5만원 이상 구매시10% OFF', help2: '최대 할인 금액 50,000 원' }, '2023-11-14 ~ 2023-12-14'
]

// console.log(Array.isArray(bodyData));
// console.log(typeof bodyData[0]);
// console.log(typeof bodyData[0] === 'string');
// console.log(Object.values(bodyData[1]));
// console.log(typeof bodyData[1] === 'object');
function makeCouponHead() {

    let makeOuter = document.createElement('div'); // 아우터
    couponList.appendChild(makeOuter);
    makeOuter.setAttribute('class', 'makeOuter');

    for (let i = 0; i < makeInner.length; i++) {
        makeInner[i] = document.createElement('div');
        makeOuter.appendChild(makeInner[i]);
        makeInner[i].setAttribute('class', 'makeInner');
        makeInner[i].innerText = headData[i];
        makeInner[i].style.flex = 'grow 1'

    }
}

// if (bodyData[i] === 'object') {
//     makeInner[i] = Object.values(bodyData[i])
// }


makeCouponHead();
// makeCoupon();

console.log(makeInner);
// console.log()



// let makeInner = document.createElement('div'); //이너5개
// makeInner.setAttribute('class', 'makeInner');
// makeOuter.appendChild(makeInner);



// let makeBox_5 = new Array(5);
// makeBox_5.fill(0);
// for (let i = 0; i < makeBox_5.length; i++) {
//     makeBox_5[i] = document.createElement('div');
//     makeOuter.appendChild(makeBox_5[i]);
//     // makeBox_5.setAttribute('class', 'innerInner');
// }








