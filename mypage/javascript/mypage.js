'use strict'





// ================== 프로필 개인정보 ==================

let orderData = [['총 주문금액:', '적 립 금', '쿠 폰'], ['0000 원', '9999원', '3개']];

let ordered = document.querySelector('.profile_inner_ordered')

for (let i = 0; i < orderData.length; i++) {
    for (let j = 0; j < orderData[i].length; j++)
        if (i === 0) {
            ordered.children[2 * j].innerText = orderData[i][j];
        } else {
            ordered.children[2 * j + 1].innerText = orderData[i][j];
        }
}


let privateData = [['전 화', '이메일', '주 소'], ['010-0000-0000', 'gjjashd@naver.com', '경기도 광주시']];

let priv = document.querySelector('.profile_inner_private');

for (let i = 0; i < privateData.length; i++) {
    for (let j = 0; j < privateData[i].length; j++)
        if (i === 0) {
            priv.children[2 * j].innerText = privateData[i][j];
        } else {
            priv.children[2 * j + 1].innerText = privateData[i][j];
        }
}

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

// ========= 관심 상품 정보 ==================
// 배경이미지 활용

// let wishList = document.querySelector('.bottom_wish_list');

// wishList.innerHTML = '<div class="wish_box"><div class="wish_img"></div><div class="item_name"></div><div class="item_cost"></div></div>'

// let wishImg = wishList.querySelector('.wish_img');

// wishImg.style.background = 'url(./image/bg1.jpg)no-repeat center/100px '

// let itemName = wishList.querySelector('.item_name'),
//     itemCost = wishList.querySelector('.item_cost');

// let itemData = ['솔리드 디퓨저 세트', '44,200 원']

// itemName.innerText = itemData[0];
// itemCost.innerText = itemData[1];
// =============================================


let itemData1 = ['솔리드 디퓨저 세트', '44,200 원'];

let wishList = document.querySelector('.bottom_wish_list');
// console.log(wishList);

function addArea() {
    let jbBtn = document.createElement('button');
    let jbBtnText = document.createTextNode('Click');
    jbBtn.appendChild(jbBtnText);
    document.body.appendChild(jbBtn);
}

function addArea() {
    let jbBtn = document.createElement('button');
    let jbBtnText = document.createTextNode('Click');
    jbBtn.appendChild(jbBtnText);
    document.body.appendChild(jbBtn);
}

function








function addImg() {

}




