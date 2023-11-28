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
        // addWish2();
        // aaaa();

        // console.log(Object.keys(myData[0].wishList[0])[0]);
        // console.log(Object.entries(m0yData[0].lastestPosted));


        // console.log(myData[0].wishList[0].img);
        // console.log(myData[0].wishList);

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
                        reserves.children[j + 1].innerText = `${(myData[i].totalAmountPayment).toLocaleString()}`;
                        break;
                    case '적 립 금':
                        reserves.children[j + 1].innerText = `${myData[i].reserve.toLocaleString()}`;
                        break;
                    case '쿠 폰':
                        reserves.children[j + 1].innerText = myData[i].coupon.length;
                        break;
                }
            }
        }
    }
}



//  ============ 최근 주문 내역 =============================

let table = document.querySelectorAll('.bottomTb');
let tableTb_1 = table[0].getElementsByTagName('td');
let tableTb_2 = table[1].getElementsByTagName('td');

function latestOrderData() {
    for (let i = 0; i < myData[0].lastestOrder.length; i++) {
        let makeBox = new Array(myData[0].lastestOrder.length);
        makeBox[i] = [];
        for (let customer of myData) {
            makeBox[i].push(`<tr>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].orderDate}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].productName}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].amountPayment.toLocaleString()}</td>`);
            makeBox[i].push(`<td>${customer.lastestOrder[i].detail}</td>`);
            makeBox[i].push(`</td>`);
        }
        table[0].innerHTML += makeBox[i].join("")

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


let wantList = document.getElementById('bottom_want_item');

let makeOuter = document.createElement('div');

let nameList = ['wantImg', 'wantItem'];


function addWish() {
    let makeBox = new Array(myData[0].wishList.length);

    for (let i = 0; i < myData[0].wishList.length; i++) {

        let ar = new Array(2);
        ar[0] = document.createElement('button');
        ar[1] = document.createElement('div');
        ar[2] = document.createElement('div');

        makeBox[i] = document.createElement('div');
        wantList.appendChild(makeBox[i]);
        makeBox[i].setAttribute('class', 'wantContainer');

        for (let j = 0; j < ar.length; j++) {
            makeBox[i].appendChild(ar[j]);
            if (j == 0) {
                ar[j].style.background = `url(${myData[0].wishList[i].img}) center/cover`
                ar[j].addEventListener('click', () => {
                    window.location.href = `${myData[0].wishList[i].link}`
                })
                // ar[j].addEventListener('click', movePage)
                // 위에처럼 익명함수형태로 전달하지않고,
                // 만들어둔 함수로 이동하고 싶다면 어떻게 해야하나?
                // 바로 아래 만들어둔 movePage 함수를 사용하고 싶다.

                ar[j].setAttribute('class', 'wantImg');
            } else if (j == 1) {
                ar[j].innerText = `${myData[0].wishList[i].productName} `
                ar[j].setAttribute('class', 'wantItem');
            } else {
                ar[j].innerText = `${myData[0].wishList[i].price.toLocaleString()} `
                ar[j].setAttribute('class', 'wantCost');
            }
        }
    }
}


function movePage() {
    window.location.href = `${myData[0].wishList[i].link}`
}

function addWish2() {
    let makeBox = new Array(myData[0].wishList.length);

    for (let i = 0; i < myData[0].wishList.length; i++) {

        let ar = new Array(2);
        ar[0] = document.createElement('a');
        ar[1] = document.createElement('div');
        ar[2] = document.createElement('div');

        makeBox[i] = document.createElement('div');
        wantList.appendChild(makeBox[i]);
        makeBox[i].setAttribute('class', 'wantContainer');

        for (let j = 0; j < ar.length; j++) {
            makeBox[i].appendChild(ar[j]);
            if (j == 0) {
                ar[j].setAttribute('class', 'wantImg');
                ar[j].style.background = `url(${myData[0].wishList[i].img} center/cover`
            } else if (j == 1) {
                ar[j].innerText = `${myData[0].wishList[i].productName} `
                ar[j].setAttribute('class', 'wantItem');
            } else {
                ar[j].innerText = `${myData[0].wishList[i].price.toLocaleString()} `
                ar[j].setAttribute('class', 'wantCost');
            }
        }
        // ar[0].style.background = `url(${myData[0].wishList[i].img}) center/cover`

    }
}


