'use strict'

let outer = document.querySelector('.cart_outer'),
    cart = outer.querySelector('.cart_body');

// ====================================
let title = ['번호', '사진', '상품명', '수량', '적립', '금액', '배송비', '취소'],
    divClass = ['item_num', 'item_img', 'item_name', 'item_q', 'item_reward', 'item_cost', 'item_del', 'item_cencel'];


for (let i = 0; i < title.length; i++) {
    let makeFrame = document.createElement('div');
    cart.appendChild(makeFrame);
    makeFrame.innerText = title[i];
}
// 머리부분 만들기
// =======================================

let itemData = [
    {
        name: '오일 퍼퓸 블루 세이지 블라썸',
        option: '선물포장 : 홀리데이 선물포장 -오일 퍼퓸 블루 세이지 블라썸 1개',
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000522.jpg?1699427241",
        quantity: "1",
        cost: '54,000',
        reward: '',
        deliveryFee: `[기본배송]조건`,
        cancel: makeCancel()
    },
    {
        name: '오일 퍼퓸 20ml + 코냑캔들',
        option: '향선택1 : 오일퍼퓸20ml밤쉘, 향선택2 : 코냑 캔들 블루세이지 블라썸, 선물포장 : 홀리데이 선물포장 - 오일퍼퓸 20ml+코냑캔들1개',
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000522.jpg?1699427241",
        quantity: "1",
        cost: '166,000',
        reward: ``,
        deliveryFee: `[기본배송]조건`,
        cancel: makeCancel()
    }
];



// function makeCancel(cancel) {
//     for (let i = 0; i < 2; i++) {
//         let makeA = document.createElement('a');
//         cancel.appendChild(makeA);
//         switch (i) {
//             case 0:
//                 makeA.innerText = 'WISH LIST';
//             case 1:
//                 makeA.innerText = 'DELETE';
//         }
//     }
// }
// makeCancel('item_cancel');


function makeItem() {
    for (let i = 0; i < itemData.length; i++) {
        let itemCount = document.createElement('div');
        cart.appendChild(itemCount);
        for (let j = 0; j < itemData[i].length; j++) {
            let cartDetail = document.createElement('div');
            itemCount.appendChild(cartDetail);
            cartDetail.className
        }
    }
}
