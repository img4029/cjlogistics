'use strict'





// ================== 프로필 개인정보 ==================

let privateData = [['전 화', '이메일', '주 소'], ['010-0000-0000', 'gjjashd@naver.com', '경기도 광주시']];

let priv = document.querySelector('.profile_inner_private');

// for (let i = 0; i < privateData.length; i++) {
//     for (let j = 0; j < privateData[i].length; j++)
//         if (i === 0) {
//             priv.children[2 * j].innerText = privateData[i][j];
//         } else {
//             priv.children[2 * j + 1].innerText = privateData[i][j];
//         }
// }



let orderData = [['총 주문금액:', '적 립 금', '쿠 폰'], ['0000 원', '9999원', '3개']];

let ordered = document.querySelector('.profile_inner_ordered')

// for (let i = 0; i < orderData.length; i++) {
//     for (let j = 0; j < orderData[i].length; j++)
//         if (i === 0) {
//             ordered.children[2 * j].innerText = orderData[i][j];
//         } else {
//             ordered.children[2 * j + 1].innerText = orderData[i][j];
//         }
// }

let data1 =
{
    name: '주용현[임의 생성 이메일]',
    phone: '010-7388-0941',
    totalCost: '100,000 원',
    email: 'dydgusc66@naver.com',
    reserves: '12,345 원',
    address: '경기도 광주시 ~~~~~~~~~~~~~~',
    coupon: '3 개',
    img: "./image/bg1.jpg",
    id: 1,
}
let client1 = Object.values(data1);


let privacy = document.querySelector('.profile_privacy'),
    pri_detail = document.querySelector('.profile_inner_private'),
    pri_inner = document.querySelector('.profile_inner_private'),
    pri_ordered = document.querySelector('.profile_inner_ordered'),
    pri_img = document.querySelector('.profile_image');

privacy.children[0].innerText = client1[0];

pri_inner.children[1].innerHTML = client1[1];
pri_inner.children[3].innerHTML = client1[3];
pri_inner.children[5].innerHTML = client1[5];

pri_ordered.children[1].innerHTML = client1[2];
pri_ordered.children[3].innerHTML = client1[4];
pri_ordered.children[5].innerHTML = client1[6];

pri_img.src = client1[7];














// ============================================================




// ====================최근 주문 내역 =========================

let table = document.getElementsByClassName('bottomTb');

let latestOrder = ['2023.11.22', '솔리드 디퓨저', '22,500 원', '<a href="" class="order_detail">VIEW</a>'];


function latestOrderTable() {
    let newRow = table[0].insertRow();

    for (let i = 0; i < latestOrder.length - 1; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerText = latestOrder[i];
    }

    let newCell = newRow.insertCell(-1);
    newCell.innerHTML = latestOrder[3];
}

latestOrderTable();
latestOrderTable();



// =============최근 등록 게시글 ===================

let objData1 = {
    date: '2023.11.22',
    subject: '배송 언제쯤?',
    board: '<a href="" class="order_detail">1:1게시판</a>'
}
let objData2 = {
    date: '2023.07.02',
    subject: '물건은?',
    board: '<a href="" class="order_detail">1:1게시판</a>'
}

function objToArray(data) {
    let changeToArr = Object.values(data);
    return changeToArr;
}


function latestPostTable(data) {

    function objToArray(data) {
        let changeToArr = Object.values(data);
        return changeToArr;
    }
    let latestPost = objToArray(data);

    let newRow = table[1].insertRow();

    for (let i = 0; i < latestPost.length - 1; i++) {
        let newCell = newRow.insertCell(i);
        newCell.innerText = latestPost[i];
    }

    let newCell = newRow.insertCell(-1);
    newCell.innerHTML = latestPost[2];
}

latestPostTable(objData1);
latestPostTable(objData2);


// ===========================================================




//  ================== 관심 상품 정보 =============================

let wishData = {
    imgSrc: './image/bg1.jpg',
    name: '~~ 디퓨저',
    cost: '38,900 원'
};

let tag = ['img', 'p', 'p'];

let ElementName = ["wishImg", "wishItem", "wishCost"];
console.log(tag[0]);


function wishList() {
    let wishContainer = document.createElement("div");
    wishContainer.setAttribute("class", "wishContainer");
    document.querySelector('#bottom_wish_list').appendChild(wishContainer);

    let wishBox = new Array(3);
    for (let j = 0; j < wishBox.length; j++) {
        wishBox[j] = document.createElement(tag[j]);
        // document.querySelector('.wishContainer').appendChild(wishBox[j]);
        wishContainer.appendChild(wishBox[j]);
    }

    for (let i = 0; i < wishBox.length; i++) {
        if (i == 0) {
            wishBox[i].setAttribute("class", ElementName[i]);
            wishBox[i].src = Object.values(wishData)[i];
        } else {
            wishBox[i].setAttribute("class", ElementName[i]);
            wishBox[i].innerText = Object.values(wishData)[i];
        }
    }
}

wishList();
wishList();
wishList();
wishList();
wishList();
wishList();

// 하나 만들고 변수명을 다시 만들어줘야 하는 문제



//  ================== 관심 상품 정보 =============================


