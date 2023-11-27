'use strict'

let myData,
    outer = document.querySelector('.cart_outer'),
    cart = document.querySelector('.cart_body'),
    wish = document.querySelector('.wish_body'),
    divClass = ['item_num', 'item_img', 'item_name', 'item_q', 'item_reward', 'item_cost', 'item_del', 'item_cencel'],
    divClass2 = ['item_img', 'item_name', 'item_q', 'item_reward', 'item_cost', '', 'item_cencel'];
async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete/1');
        let endDiv = document.createElement('div'),
            priceSum = 0;
        myData = response.data;
        

        for (let i = 0; i < myData.ShoppingBasket.length; i++) {
            priceSum += myData.ShoppingBasket[i].price;
            makeCartFrame(myData.ShoppingBasket[i], i, myData.ShoppingBasket);
        }
        console.log(myData.wishList.length);
        for (let i = 0; i < myData.wishList.length; i++) {
            makeWishFrame(myData.wishList[i]);
        }
        cart.appendChild(endDiv);
        endDiv.style.gridColumn = "span 8";
        endDiv.style.height = "50px";
        endDiv.innerText = `총 구매금액 : ${priceSum.toLocaleString()}원`;
        endDiv.style.justifyContent = "flex-end";
        endDiv.style.fontWeight = "bold";
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

// ====================================
// let divClass = ['item_num', 'item_img', 'item_name', 'item_q', 'item_reward', 'item_cost', 'item_del', 'item_cencel'];

function makeCartFrame(ShoppingBasket, count, myData) {
    for (let i = 0; i < 8; i++) {
        let makeFrame = document.createElement('div');
        cart.appendChild(makeFrame);
        switch (i) {
            case 0:
                makeFrame.innerHTML = count + 1;
                makeFrame.className = divClass[i];
                break;
            case 1:
                makeFrame.className = divClass[i];
                let img = document.createElement('img');
                makeFrame.appendChild(img);
                img.src = ShoppingBasket.img;
                break;
            case 2:
                makeFrame.className = divClass[i];
                makeFrame.style.alignItems = "flex-start"
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                makeFrame.appendChild(p1);
                makeFrame.appendChild(p2);
                p1.innerText = ShoppingBasket.productName;
                p2.innerText = ShoppingBasket.options;
                break;
            case 3:
                makeFrame.className = divClass[i];
                let div1 = document.createElement('div');
                let input = document.createElement('input');
                let div2 = document.createElement('div');
                makeFrame.appendChild(div1);
                makeFrame.appendChild(input);
                makeFrame.appendChild(div2);
                div1.innerText = "-";
                div2.innerText = "+";
                input.value = Number(ShoppingBasket.quantity);
                div1.addEventListener('click', () => {
                    if (Number(input.value) > 1) input.value -= 1;
                    else alert("1개 보다 적은 수는 주문 할 수 없습니다");
                });
                div2.addEventListener('click', () => input.value = Number(input.value) + 1);
                break;
            case 4:
                makeFrame.innerHTML = ShoppingBasket.reserve.toLocaleString();
                makeFrame.className = divClass[i];
                break;
            case 5:
                makeFrame.innerHTML = ShoppingBasket.price.toLocaleString()+"원";
                makeFrame.className = divClass[i];
                break;
            case 6:
                makeFrame.className = divClass[i];
                makeFrame.innerHTML = `<p>[기본배송]<br>조건</p>
                <div>
                <span></span>
                <p>배송조건:기본배송(조건)</p>
                <p>주문금액이 40,000원 미만시</p>
                <p>배송비 3,000원이 청구됩니다.</p>
                </div>`
                break;
            case 7:
                makeFrame.className = divClass[i];
                let btn1 = document.createElement('div');
                let btn2 = document.createElement('div');
                // makeFrame.style.alignItems = "flex-start"
                makeFrame.appendChild(btn1);
                makeFrame.appendChild(btn2);
                btn1.innerHTML = "WISH LIST";
                btn1.addEventListener('click', () => {
                    wishListMove(ShoppingBasket, count, myData);
                })
                btn2.innerHTML = "DELETE";
                btn2.addEventListener('click', () => {

                })
                break;
            default:
                break;
        }
    }
};
function makeWishFrame(wishList) { 
    for (let i = 0; i < 7; i++) {
        let makewish = document.createElement('div');
        wish.appendChild(makewish);
        switch (i) {
            case 0:
                makewish.className = divClass2[i];
                let img = document.createElement('img');
                makewish.appendChild(img);
                img.src = wishList.img;
                break;
            case 1:
                makewish.className = divClass2[i];
                makewish.style.alignItems = "flex-start"
                let p1 = document.createElement('p');
                let p2 = document.createElement('p');
                makewish.appendChild(p1);
                makewish.appendChild(p2);
                p1.innerText = wishList.productName;
                p2.innerText = wishList.options;
                break;
            case 2:
                makewish.className = divClass2[i];
                let div1 = document.createElement('div');
                let input = document.createElement('input');
                let div2 = document.createElement('div');
                makewish.appendChild(div1);
                makewish.appendChild(input);
                makewish.appendChild(div2);
                div1.innerText = "-";
                div2.innerText = "+";
                input.value = Number(wishList.quantity);
                div1.addEventListener('click', () => {
                    if (Number(input.value) > 1) input.value -= 1;
                    else alert("1개 보다 적은 수는 주문 할 수 없습니다");
                });
                div2.addEventListener('click', () => input.value = Number(input.value) + 1);
                break;
            case 3:
                makewish.innerHTML = wishList.reserve.toLocaleString();
                makewish.className = divClass2[i];
                break;
            case 4:
                makewish.innerHTML = wishList.price.toLocaleString() + "원";
                makewish.className = divClass2[i];
                break;
            case 5:
                makewish.innerHTML = "있음"
                break;
            case 6:
                makewish.className = divClass2[i];
                let btn1 = document.createElement('div');
                let btn2 = document.createElement('div');
                // makeFrame.style.alignItems = "flex-start"
                makewish.appendChild(btn1);
                makewish.appendChild(btn2);
                btn1.innerHTML = "CART";
                btn2.innerHTML = "DELETE";
                break;
            default:
                break;
        }
    }
};
async function wishListMove(ShoppingBasket, count, myData) {
    try {
        console.log(ShoppingBasket);
        myData.splice(count, 1)
        console.log(myData);
        let patchData = {
            ShoppingBasket: ''
        };
        patchData.ShoppingBasket = myData;
        console.log(patchData);
        const patchResponse = await axios.patch(`http://localhost:3000/loginComplete/1`, patchData);
        /* 
            delete 메서드는 성공한 경우, 삭제된 값이 아닌 빈 객체{} 를 반환.
        */
        // const deleteResponse = await axios.delete(`http://localhost:3000/clientData/${count}`);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();
