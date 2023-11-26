'use strict'

import  axios  from "axios";

const jsonUrl = 'http://localhost:3000/';

// fetch 함수를 사용하여 JSON 데이터 가져오기
fetch(jsonUrl)
    .then(response => response.json())
    .then(data => {
        // 가져온 데이터를 처리하거나 표시하는 부분
        displayData(data);
    })
    .catch(error => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
    });

// JSON 데이터를 화면에 표시하는 함수
function displayData(data) {
    const resultElement = document.getElementById('result');

    // 가져온 데이터를 문자열로 변환하여 화면에 출력
    resultElement.innerHTML = `
    <p>Name: ${data.hname}</p>
    <p>Age: ${data.zip}</p>
    <p>City: ${data.har}</p>
  `;
}


// ================== 프로필 개인정보 ==================

let profile = document.querySelector('.mypage_profile_inner'),
    privacy = profile.querySelector('.profile_inner_private'),
    reserves = profile.querySelector('.profile_inner_ordered'),
    identity = profile.querySelector('.profile_identity'),
    profileImg = profile.querySelector('.profile_image');


let ProfileFrame_1 = '<div>전 화</div><div></div><div>이메일</div><div></div><div>주 소</div><div></div>',
    reservesFrame_2 = '<div>총 주문 금액</div><div></div><div>적 립 금</div><div></div><div>쿠 폰</div><div></div>';


function makeProfile() {
    privacy.innerHTML = ProfileFrame_1;
    reserves.innerHTML = reservesFrame_2;
}



// id 값 찾아서 데이터넣기
function insertPriData(code) {
    for (let i = 0; i < profileData.length; i++) {
        if (profileData[i].id === code) {
            profileImg.src = profileData[i].img
            identity.innerText = profileData[i].name
            for (let j = 0; j < privacy.children.length; j++) {
                switch (privacy.children[j].innerText) {
                    case '전 화':
                        privacy.children[j + 1].innerText = profileData[i].phone
                        break;
                    case '이메일':
                        privacy.children[j + 1].innerText = profileData[i].email
                        break;
                    case '주 소':
                        privacy.children[j + 1].innerText = profileData[i].address
                        break;
                }
                switch (reserves.children[j].innerText) {
                    case '총 주문 금액':
                        reserves.children[j + 1].innerText = profileData[i].totalCost
                        break;
                    case '적 립 금':
                        reserves.children[j + 1].innerText = profileData[i].reserves
                        break;
                    case '쿠 폰':
                        reserves.children[j + 1].innerText = profileData[i].coupon
                        break;
                }
            }
        }
    }
}


// if (privacy.children[j].innerText === '전 화') {
//     privacy.children[j + 1].innerText = profileData[i].phone;
// } else if (privacy.children[j].innerText === '이메일') {
//     privacy.children[j + 1].innerText = profileData[i].email;
// } else if (privacy.children[j].innerText === '주 소') {
//     privacy.children[j + 1].innerText = profileData[i].address;
// }

// if (reserves.children[j].innerText === '총 주문 금액') {
//     reserves.children[j + 1].innerText = profileData[i].totalCost;
// } else if (reserves.children[j].innerText === '적 립 금') {
//     reserves.children[j + 1].innerText = profileData[i].reserves;
// } else if (reserves.children[j].innerText === '쿠 폰') {
//     reserves.children[j + 1].innerText = profileData[i].coupon;
// }






// ====================최근 주문 내역 =========================

let table = document.querySelectorAll('.bottomTb');
// 테이블이 페이지에 2개라서 한번에 가져왔다.

// =============최근 등록 게시글 ===================



// 이 방법도 데이터가 내가 원하는 순서로 전달된다는 가정 하에
// 인덱스를 통한 접근 (table에 입력받기)
function latestPostData() {
    for (let i = 0; i < postData.length; i++) { // 객체배열의 길이만큼 반복시킨다.(행)
        let newRow = table[1].insertRow(-1);
        // 헤드 틀을 html에 짜둬서 행을 추가할때 아래에 추가하기 위해
        // insertRow(-1);   -1을 써줬다.
        for (let j = 0; j < Object.values(postData[0]).length; j++) {
            //객체의 프로퍼티 갯수만큼 반복시킨다.(행 => 열 추가)
            let newCell = newRow.insertCell();
            if (Object.keys(postData[i])[j] === 'board') {
                // 데이터의 프로퍼티 중에 게시판 링크(a태그)가 있어서 키 판별해주기
                newCell.innerHTML = Object.values(postData[i])[j];
            } else {
                newCell.innerText = Object.values(postData[i])[j];
            }
        }
    }
}




//  ============ 최근 주문 내역 =============================
// 데이터가 내가 입력받고자 하는 순서로 전달된다고 가정하고
// 인덱스로 들어가서 입력하는 방법
function latestOrderData() {
    for (let i = 0; i < OrderData.length; i++) {
        let newRow = table[0].insertRow(-1);
        for (let j = 0; j < Object.values(OrderData[0]).length; j++) {
            if (Object.keys(OrderData[i])[j] == 'cost') {
                let newCell = newRow.insertCell();
                newCell.innerText = `${Object.values(OrderData[i])[j]} 원`;
            } else if (Object.keys(OrderData[i])[j] == 'detail') {
                let newCell = newRow.insertCell();
                newCell.innerHTML = Object.values(OrderData[i])[j];
            } else {
                let newCell = newRow.insertCell();
                newCell.innerText = Object.values(OrderData[i])[j];
            }
        }
    }
}

// ==========================================================





// =====================================================



//  ================== 관심 상품 정보 =============================
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooo

let tag = ['img', 'p', 'p'];

let ElementName = ["wishImg", "wishItem", "wishCost"];

let wishData =
    [{
        img: './image/bg1.jpg',
        name: '~~ 사람',
        cost: '38,900 원'
    },
    {
        img: './image/bg2.jpg',
        name: '~~ 꽃',
        cost: '78,900 원'
    },
    {
        imgSrc: './image/gimbap.png',
        name: '~~ 김밥',
        cost: '78,900 원'
    },
    {
        img: './image/bg3.jpg',
        name: '~~ 겨울',
        cost: '108,900 원'
    },
    {
        img: './image/bg4.jpg',
        name: '~~ 향수',
        cost: '58,900 원'
    },
    {
        img: './image/bg4.jpg',
        name: '~~ 향수',
        cost: '58,900 원'
    },
    {
        img: './image/bg5.jpg',
        name: '~~ 핸드 크림',
        cost: '18,900 원'
    }];



function wishList() {
    for (let i = 0; i < wishData.length; i++) {

        let wishContainer = document.createElement("div");
        wishContainer.setAttribute("class", "wishContainer");
        document.querySelector('#bottom_wish_list').appendChild(wishContainer);

        let wishBox = new Array(3);

        for (let j = 0; j < Object.values(wishData[0]).length; j++) {
            wishBox[j] = document.createElement(tag[j]);
            wishContainer.appendChild(wishBox[j]);
            wishBox[j].setAttribute("class", ElementName[j]);
            if (Object.keys(wishData[i])[j] == 'img') {
                wishBox[j].src = Object.values(wishData[i])[j];
            } else {
                wishBox[j].innerText = Object.values(wishData[i])[j];
            }
        }
    }
}

// oooooooooooooooooooooooooooooooooooooooooooooooooooooo


