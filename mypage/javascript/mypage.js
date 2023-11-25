'use strict'




// ================== 프로필 개인정보 ==================

let profileData = [
    {
        img: "./image/bg1.jpg",
        name: '김수빈 [임의 생성 이메일]',
        phone: '010-5764-3321',
        email: 'gjnsdx123@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: ',345 원',
        coupon: '3 개',
        id: 1,
    },
    {
        img: "./image/bg2.jpg",
        name: '이해나 [임의 생성 이메일]',
        phone: '010-2345-2176',
        email: 'fhddf2@naver.com',
        address: '서울특별시~~~~~~~~~~~~~~',
        totalCost: '2,000,000 원',
        reserves: '3,345 원',
        coupon: '3 개',
        id: 2,
    },
    {
        img: "./image/bg3.jpg",
        name: '주용현 [임의 생성 이메일]',
        phone: '010-8779-8768',
        email: 'hf665@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '3,000,000 원',
        reserves: '23,345 원',
        coupon: '3 개',
        id: 3,
    },
    {
        img: "./image/bg4.jpg",
        name: '장근정 [임의 생성 이메일]',
        phone: '010-9054-1245',
        email: 'jhtr34@naver.com',
        address: '서울특별시 ~~~~~~~~~~~~~~',
        totalCost: '4,000,000 원',
        reserves: '9,123,345 원',
        coupon: '3 개',
        id: 4,
    },
    {
        img: "./image/bg5.jpg",
        name: '임명건 [임의 생성 이메일]',
        phone: '010-1255-6475',
        email: 'mjjy4@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '5,000,000 원',
        reserves: '1,123,345 원',
        coupon: '3 개',
        id: 5,
    },
    {
        img: "./image/bg6.jpg",
        // 인덱스 1 ~ 4번까지 privacy innerHTML
        name: '김수옥 [임의 생성 이메일]',
        phone: '010-4666-2135',
        email: 'rythj2@naver.com',
        address: '서울특별시~~~~~~~~~~~~~~',
        // 인덱스 5 ~ 7까지 reserves innerText
        totalCost: '6,000,000 원',
        reserves: '123,345 원',
        coupon: '3 개',
        // 
        id: 6,
    }
];



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

makeProfile();


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

insertPriData(3);

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

latestPostData();

let OrderData = [
    {
        date: '2023.01.12',
        product: '디퓨저',
        cost: '53,252',
        detail: '<a href="">VIEW</a>'
    },
    {
        date: '2023.05.25',
        product: '향수',
        cost: '102,252',
        detail: '<a href="">VIEW</a>'
    },
    {
        date: '2023.11.12',
        product: '핸드크림',
        cost: '1,153,252',
        detail: '<a href="">VIEW</a>'
    },
]



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

latestOrderData();
// ==========================================================






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

wishList();
// oooooooooooooooooooooooooooooooooooooooooooooooooooooo

let A = [
    {
        img: "./image/bg1.jpg",
        name: '짱구',
        phone: '010-5764-3321',
        email: 'gjnsdx123@naver.com',
        address: '경기도 광주시',
        totalCost: '123,456 원',
        reserves: '123,345 원',
        coupon: 11,
        id: 1,
        latestOrder:
        {
            orderDate: '2023.11.26',
            product: '오일 퍼퓸 밤쉘',
            cost: '561,111',
        },
        lastestPost:
        {
            postData: '2023.03.11',
            subject: '매장 위치는 ?',
            board: '1:1게시판',
        },
        wishList:
        {
            item: '디퓨저 블라블라',
            cost: '536,999',
            option: "폴리데이 선물포장",
            img: "https://www.danielstruth.com/shopimages/dmcosmetic/0010000000202.jpg?1695624852"
        },
    },
    {
        img: "./image/bg2.jpg",
        name: '짱아',
        phone: '010-8979-3231',
        email: 'ffg1@naver.com',
        address: '서울특별시',
        totalCost: '19,456 원',
        reserves: '96,345 원',
        coupon: 3,
        id: 2,
        latestOrder:
        {
            orderDate: '2023.07.12',
            product: '디퓨저 올리브 릿지',
            cost: '111,111',
        },
        lastestPost:
        {
            postData: '2023.03.11',
            subject: '배송 언제?',
            board: '1:1게시판',
        },
        "wishList": [
            {
                item: '향수 블라블라',
                cost: '487,999',
                option: "선물포장 : 폴리데이 선물포장 - 오일 퍼퓸 밤쉘20ml",
                img: "https://www.danielstruth.com/shopimages/dmcosmetic/0010000000202.jpg?1695624852"
            },
            {
                item: '핸드크림 블라블라',
                cost: '986,999',
                option: "오일 퍼퓸 밤쉘20ml",
                img: "https://www.danielstruth.com/shopimages/dmcosmetic/0010000000202.jpg?1695624852"
            }]
    }];

console.log(A[1].wishList);

