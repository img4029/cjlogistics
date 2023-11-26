'use strict';

let myData;
let myData2;

async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete');

        myData = response.data;
        makeProfile();
        insertPriData();
        latestOrderData();
        latestPostData();
        addWish();

        // console.log(Object.keys(myData[0].wishList[0])[0]);
        // console.log(Object.entries(m0yData[0].lastestPosted));


        // console.log(myData[0].wishList[0].img);
        console.log(myData[0].wishList);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();





// ================== 프로필 개인정보 ==================

let profile = document.querySelector('.mypage_profile_inner'),
    privacy = profile.querySelector('.profile_inner_private'),
    reserves = profile.querySelector('.profile_inner_ordered'),
    identity = profile.querySelector('.profile_identity'),
    profileImg = profile.querySelector('.profile_image');


let profileFrame_1 = '<div>전 화</div><div></div><div>이메일</div><div></div><div>주 소</div><div></div>',
    reservesFrame_2 = '<div>총 주문 금액</div><div></div><div>적 립 금</div><div></div><div>쿠 폰</div><div></div>';


function makeProfile() {
    privacy.innerHTML = profileFrame_1;
    reserves.innerHTML = reservesFrame_2;
}





function insertPriData() {
    for (let i = 0; i < myData.length; i++) {
        if (myData[i].id === 1) {
            profileImg.src = myData[i].img
            identity.innerText = myData[i].hname
            for (let j = 0; j < privacy.children.length; j++) {
                switch (privacy.children[j].innerText) {
                    case '전 화':
                        privacy.children[j + 1].innerText = myData[i].hpn;
                        break;
                    case '이메일':
                        privacy.children[j + 1].innerText = myData[i].hem;
                        break;
                    case '주 소':
                        privacy.children[j + 1].innerText = myData[i].har;
                        break;
                }
                switch (reserves.children[j].innerText) {
                    case '총 주문 금액':
                        reserves.children[j + 1].innerText = myData[i].totalAmountPayment;
                        break;
                    case '적 립 금':
                        reserves.children[j + 1].innerText = myData[i].reserve;
                        break;
                    case '쿠 폰':
                        reserves.children[j + 1].innerText = myData[i].coupon.length;
                        break;
                }
            }
        }
    }
}


// if (privacy.children[j].innerText === '전 화') {
//     privacy.children[j + 1].innerText = myData[i].phone;
// } else if (privacy.children[j].innerText === '이메일') {
//     privacy.children[j + 1].innerText = myData[i].email;
// } else if (privacy.children[j].innerText === '주 소') {
//     privacy.children[j + 1].innerText = myData[i].address;
// }

// if (reserves.children[j].innerText === '총 주문 금액') {
//     reserves.children[j + 1].innerText = myData[i].totalCost;
// } else if (reserves.children[j].innerText === '적 립 금') {
//     reserves.children[j + 1].innerText = myData[i].reserves;
// } else if (reserves.children[j].innerText === '쿠 폰') {
//     reserves.children[j + 1].innerText = myData[i].coupon;
// }









//  ============ 최근 주문 내역 =============================
let table = document.querySelectorAll('.bottomTb');
let tableTb_1 = table[0].getElementsByTagName('td');
let tableTb_2 = table[1].getElementsByTagName('td');

// console.log(tableTb_1);
// console.log(tableTb_2);


function latestOrderData() {
    for (let i = 0; i < myData[0].lastestOrder.length; i++) {
        let makeBox = new Array(myData[0].lastestOrder.length);
        makeBox[i] = [];
        for (let customer of myData) {

            // console.log(customer.Order[i].orderDate);

            makeBox[i].push(`<tr>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].orderDate}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].productName}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].amountPayment}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].detail}</td>`);
            makeBox[i].push(`</td>`);
        }
        // console.log(table[0].innerHTML)
        table[0].innerHTML += makeBox[i].join("")

        // if(table[0])
    }
}

// ==========================================================

// =============최근 등록 게시글 ===================

function latestPostData() {
    for (let i = 0; i < myData[0].lastestPosted.length; i++) {
        let makeBox = new Array(myData[0].lastestPosted.length);
        makeBox[i] = [];
        for (let customer of myData) {
            // console.log(customer.lastestPosted[i].date === "");
            makeBox[i].push(`<tr>`);
            makeBox[i].push(`<td>${Object(customer.lastestPosted[i]).date}</td>`);
            makeBox[i].push(`<td>${Object(customer.lastestPosted[i]).subject}</td>`);
            makeBox[i].push(`<td>${Object(customer.lastestPosted[i]).board}</td>`);
            makeBox[i].push(`</td>`);
        }
        table[1].innerHTML += makeBox[i].join("")


    }
}




// =====================================================



//  ================== 관심 상품 정보 =============================
// oooooooooooooooooooooooooooooooooooooooooooooooooooooooo

let wantList = document.getElementById('bottom_want_item');

let makeOuter = document.createElement('div');

let nameList = ['wantImg', 'wantItem'];


let ar = new Array(2);
ar[0] = document.createElement('img');
ar[1] = document.createElement('div');
ar[2] = document.createElement('div');

function addWish() {

    let makeBox = new Array(myData[0].wishList.length);

    for (let i = 0; i < myData[0].wishList.length; i++) {
        makeBox[i] = document.createElement('div');
        wantList.appendChild(makeBox[i]);
        makeBox[i].setAttribute('class', 'wantContainer');
        // 큰박스 만들고 그 박스안에 img,div2개 넣으려고하는데
        // 3번 반복하면 앞에 만들어진 2개의 박스에는 img,div가 들어가지 않는다..
        // 문제가 뭐지?
        for (let j = 0; j < ar.length; j++) {
            makeBox[i].appendChild(ar[j]);
            if (j == 0) {
                ar[j].src = myData[0].wishList[j].img
                ar[j].setAttribute('class', 'wantImg');
            } else if (j == 1) {
                ar[j].innerText = `${myData[0].wishList[j].productName}`
                ar[j].setAttribute('class', 'wantItem');
            } else {
                ar[j].innerText = `${myData[0].wishList[j].price.toLocaleString()}`
                ar[j].setAttribute('class', 'wantCost');
            }
        }

    }
}
function add() {

    let makeBox = new Array(myData[0].wishList.length);

    for (let i = 0; i < myData[0].wishList.length; i++) {
        makeBox[i] = document.createElement('div');
        wantList.appendChild(makeBox[i]);
        makeBox[i].setAttribute('class', 'wantContainer');
        makeBox[i]

    }
}

// for (let i = 0; i < Object.keys(myData[0].wishList).length; i++) {
//     let makeOuter = document.createElement('div');
//     makeOuter.setAttribute('class', 'wantContainer');
//     for (let j = 0; i < ar.length; j++) {
//         makeOuter.appendChild(ar[j])
//         ar[j].setAttribute('class', nameList[j])

//         if (Object.keys(myData[0].wishList[0])[0] === 'img') {
//             ar[j].src = myData[0].wishList[i].img;
//             ar[j].setAttribute('class', nameList[j])
//         } else {
//             ar[j].setAttribute('class', nameList[j])
//             ar[j].innerText = `${myData[0].wishList[i].productName}
//                             ${myData[0].wishList[i].price.toLocaleString()}`;
//             // 백틱안에서 줄바꿈은 된다고 알고 있는데
//             // tab키도 되나 혹시?
//         }
//     }
// }



// oooooooooooooooooooooooooooooooooooooooooooooooooooooo


