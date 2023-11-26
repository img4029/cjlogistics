'use strict'

let myData;

async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete');
        myData = response.data;

        makeHeadFrame();
        // makeD();
        console.log(Object.keys(myData[0].ShoppingBasket[0])[0])
        console.log(Object.keys(myData[0].ShoppingBasket[0]).length)
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();



let outer = document.querySelector('.cart_outer'),
    cart = outer.querySelector('.cart_body');

// ====================================
let title = ['번호', '사진', '상품명', '수량', '적립', '금액', '배송비', '취소'],
    divClass = ['item_num', 'item_img', 'item_name', 'item_q', 'item_reward', 'item_cost', 'item_del', 'item_cencel'];

function makeHeadFrame() {
    for (let i = 0; i < title.length; i++) {
        let makeFrame = document.createElement('div');
        cart.appendChild(makeFrame);
        makeFrame.innerText = title[i];
        makeFrame.setAttribute('class', 'headData')
        // ====================================
        makeFrame.style.padding = "10px 0"
        makeFrame.style.fontWeight = "bold"
        // ====================================
    }
}


// function makeD() {
//     for (let j = 0; j < myData[0].ShoppingBasket.length; j++) {
//         for (let i = 0; i < 8; i++) {
//             let arr = new Array(8);
//             arr[i] = document.createElement('div');
//             arr[i].setAttribute('class','cartElement');
//             cart.appendChild(arr[i]);
            
//             if (Object.keys(myData[0].ShoppingBasket[j])[i] === "img") {
//                 arr[i].innerHTML += `<img src="${Object.values(myData[0].ShoppingBasket[j])[i]}" alt="" class="cart_img">`
//             } else if(Object.keys(myData[0].ShoppingBasket[j])[i] === "howMany"){
//                 arr[i].innerHTML +=
//             }
            
//             arr[i].innerText = Object.values(myData[0].ShoppingBasket[j])[i];
            
//         }
//     }
// }



// =====================================



