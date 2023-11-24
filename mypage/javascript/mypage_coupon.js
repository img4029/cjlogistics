'use strict'


let couponList = document.querySelector('.mycoupon_list');

let makeOuter = document.createElement('div'); // 아우터
couponList.appendChild(makeOuter);
makeOuter.setAttribute('class', 'makeOuter');


let makeInner = document.createElement('div');

let makeBox_5 = new Array(5);
for (let i = 0; i < makeBox_5.length; i++) {
    makeBox_5[i] = document.createElement('div');
}

makeInner.setAttribute('class', 'makeinner');