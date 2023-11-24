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

let 








// ====================최근 주문 내역 =========================

// ==========================================================



// =============최근 등록 게시글 ===================

let PostData = [
    {
        date: '2023.01.11',
        subject: '배송 언제쯤?',
        board: '<a href="" class="order_detail">1:1게시판</a>'
    },
    {
        date: '2023.03.25',
        subject: '배송 언제쯤?',
        board: '<a href="" class="order_detail">1:1게시판</a>'
    },
    {
        date: '2023.05.30',
        subject: '배송 언제쯤?',
        board: '<a href="" class="order_detail">1:1게시판</a>'
    },
    {
        date: '2023.07.02',
        subject: '물건은?',
        board: '<a href="" class="order_detail">1:1게시판</a>'
    }
];





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

