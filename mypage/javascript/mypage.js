'use strict'



// ================== 프로필 개인정보 ==================

let clinetData = [
    {
        img: "./image/bg1.jpg",
        name: '김수빈 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 1,
    },
    {
        img: "./image/bg1.jpg",
        name: '이해나 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '서울특별시~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 2,
    },
    {
        img: "./image/bg1.jpg",
        name: '주용현 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 3,
    },
    {
        img: "./image/bg1.jpg",
        name: '장근정 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '서울특별시 ~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 4,
    },
    {
        img: "./image/bg1.jpg",
        name: '임명건 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 5,
    },
    {
        img: "./image/bg1.jpg",
        name: '김수옥 [임의 생성 이메일]',
        phone: '010-2345-3321',
        email: 'agsee2@naver.com',
        address: '서울특별시~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: '3,123,345 원',
        coupon: '3 개',
        id: 6,
    }
];



let profile = document.querySelector('.mypage_profile_inner'),
    privacy = profile.querySelector('.profile_inner_private'),
    reserves = profile.querySelector('.profile_inner_ordered');

console.log(profile);
console.log(privacy);
console.log(reserves);









// ====================최근 주문 내역 =========================


let table = document.querySelectorAll('.bottomTb');
// 테이블이 페이지에 2개라서 한번에 가져왔어

let OrderData = [
    {
        date: '2023.01.12',
        product: '디퓨저',
        cost: '53,252',
        detail: '$$$'
    },
    {
        date: '2023.05.25',
        product: '향수',
        cost: '102,252',
        detail: '***'
    },
    {
        date: '2023.11.12',
        product: '핸드크림',
        cost: '1,153,252',
        detail: '%%%'
    },
]


function latestOrderData() {
    for (let i = 0; i < OrderData.length; i++) {
        let newRow = table[0].insertRow(-1);
        // 최초 tr>th를 html에 써둬서 행을 추가할때 아래에 추가하기 위해
        // table[1].insertRow(-1);   -1을 써줬다.
        for (let j = 0; j < Object.values(OrderData[0]).length; j++) {
            let newCell = newRow.insertCell();
            newCell.innerText = `${Object.values(OrderData[i])[j]} 원`
        }
    }
}

latestOrderData();
// ==========================================================



// =============최근 등록 게시글 ===================

let postData = [{
    date: '2023.01.11',
    subject: '배송 언제 ?',
    board: '<a href="" class="order_detail">배송 관련</a>',
},
{
    date: '2023.03.25',
    subject: '재입고 는 ?',
    board: '<a href="" class="order_detail">상품 관련</a>',
},
{
    date: '2023.09.01',
    subject: '재입고 는 ?',
    board: '<a href="" class="order_detail">매장</a>',
},
{
    date: '2023.05.30',
    subject: '매장 위치는 ?',
    board: '<a href="" class="order_detail">1:1게시판</a>',
},
{
    date: '2023.07.02',
    subject: '찾아가는 방법은 ?',
    board: '<a href="" class="order_detail">1:1게시판</a>',
}];
console.log(Object.keys(postData[0])[2] === 'board');
console.log(Object.values(postData[0]));









function latestPostData() {
    for (let i = 0; i < postData.length; i++) {
        let newRow = table[1].insertRow(-1);
        // 최초 tr>th를 html에 써둬서 행을 추가할때 아래에 추가하기 위해
        // table[1].insertRow(-1);   -1을 써줬다.
        for (let j = 0; j < Object.values(postData[0]).length; j++) {
            let newCell = newRow.insertCell();
            if (Object.keys(postData[i])[j] === 'board') {
                // 데이터의 프로퍼티 중에 게시판 링크가 있어서 키 판별해주기
                newCell.innerHTML = Object.values(postData[i])[j];
            } else {
                newCell.innerText = Object.values(postData[i])[j];
            }
        }
    }
}

latestPostData();


// let active = new Array(2)
// for문(객체배열 길이만큼) {
//     let newRow = 테이블요소.insertRow(i);

//     for문(객체 프로퍼티 길이만큼) {
//         let newCell = newRow.insertCell();
//         newCell.innerText =
//             Object.values(data[i])[j]
//     }
// }


// =====================================================



//  ================== 관심 상품 정보 =============================
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooo

let tag = ['img', 'p', 'p'];

let ElementName = ["wishImg", "wishItem", "wishCost"];

let wishData =
    [{
        imgSrc: './image/bg1.jpg',
        name: '~~ 사람',
        cost: '38,900 원'
    },
    {
        imgSrc: './image/bg2.jpg',
        name: '~~ 꽃',
        cost: '78,900 원'
    },
    {
        imgSrc: './image/gimbap.png',
        name: '~~ 김밥',
        cost: '78,900 원'
    },
    {
        imgSrc: './image/bg3.jpg',
        name: '~~ 겨울',
        cost: '108,900 원'
    },
    {
        imgSrc: './image/bg4.jpg',
        name: '~~ 향수',
        cost: '58,900 원'
    },
    {
        imgSrc: './image/bg5.jpg',
        name: '~~ 핸드 크림',
        cost: '18,900 원'
    }];

function makeFrame() {
    for (let i = 0; i < wishData.length; i++) {

        let wishContainer = document.createElement("div");
        wishContainer.setAttribute("class", "wishContainer");
        document.querySelector('#bottom_wish_list').appendChild(wishContainer);

        let wishBox = new Array(3);

        for (let j = 0; j < Object.values(wishData[0]).length; j++) {
            wishBox[j] = document.createElement(tag[j]);
            wishContainer.appendChild(wishBox[j]);
            wishBox[j].setAttribute("class", ElementName[j]);
            if (j == 0) {
                wishBox[j].src = Object.values(wishData[i])[j];
            } else {
                wishBox[j].innerText = Object.values(wishData[i])[j];
            }
        }
    }
}

makeFrame();
// oooooooooooooooooooooooooooooooooooooooooooooooooooooo

