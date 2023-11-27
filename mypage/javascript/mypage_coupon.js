'use strict'


let myData;
let myData2;

async function getClientData1() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete');

        myData = response.data;

        // console.log(typeof (Object.values(myData[0].coupon[0])[4]));
        // console.log(typeof (Object.values(myData[0].coupon[0])[4]) === "number");

        
        change();
        console.log(myData[0].coupon);
        
        sortDownCoupon();
        console.log(myData[0].coupon);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData1();

async function getClientData2() {
    try {

        const response = await axios.get('http://localhost:3000/canDownload');

        myData2 = response.data;
        // changeDate(String(Object.values(myData2[0])[3]));
        // console.log(Object.values(myData2[0])[3]);

        // downFrame();
        change();
        sortHaveCoupon();
        

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData2();



// ===================================================
let couponList = document.querySelector('.mycoupon_list');


// ===========================================================
function haveFrame() {
    let couponList = document.querySelector('.mycoupon_list');
    let category = ['쿠폰 번호', '쿠폰 유형', '쿠폰 이름', '쿠폰 안내', '유효 기간'];
    let outer = document.createElement('div');

    couponList.innerHTML = "";
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < 5; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        if (category[i] === "쿠폰 안내") {
            ar[i].setAttribute('class', 'headDetail couponInfo');
            ar[i].innerText = category[i];
        } else {
            ar[i].setAttribute('class', 'headDetail');
            ar[i].innerText = category[i];
        }
    }
}



function downFrame() {
    let couponList = document.querySelector('.mycoupon_list');
    let category = ['쿠폰 유형', '쿠폰 이름', '쿠폰 안내', '유효 기간', '쿠폰 받기'];
    let outer = document.createElement('div');

    couponList.innerHTML = "";
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < 5; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        if (category[i] === "쿠폰 안내") {
            ar[i].setAttribute('class', 'headDetail couponInfo');
            ar[i].innerText = category[i];
        } else {
            ar[i].setAttribute('class', 'headDetail');
            ar[i].innerText = category[i];
        }
    }
}
// ===========================================================





// ===========================================================
function addHaveCoupon() {
    let link = document.querySelectorAll('.nation');
    let count_coupon = document.querySelector('.count_coupon');

    link[0].innerText = `보유쿠폰(${(myData[0].coupon).length})`

    count_coupon.innerHTML = `<strong>${myData[0].hname}</strong> 님이 보유하신 쿠폰은 <strong>${(myData[0].coupon).length}</strong>장 입니다.`

    for (let i = 0; i < myData[0].coupon.length; i++) {
        let arr_1 = new Array(myData[0].coupon.length);
        arr_1[i] = document.createElement('div');
        couponList.appendChild(arr_1[i])
        arr_1[i].setAttribute('class', 'cartCount');
        for (let j = 0; j < Object.values(myData[0].coupon[i]).length; j++) {
            let arr_2 = new Array(Object.values(myData[0].coupon[i]).length);
            arr_2[j] = document.createElement('div');
            arr_1[i].appendChild(arr_2[j]);
            if ((Object.keys(myData[0].coupon[i])[j]) === "expirationPeriod") {
                arr_2[j].innerText = changeDate(String(Object.values(myData[0].coupon[i])[j]));
            } else {
                arr_2[j].innerText = Object.values(myData[0].coupon[i])[j]
            }
            if (Object.keys(myData[0].coupon[i])[j] === "discountAmount") {
                arr_2[j].setAttribute('class', 'cartDetail couponInfo');
            } else {
                arr_2[j].setAttribute('class', 'cartDetail');
            }
        }
    }
}


function addDownCoupon() {
    let link = document.querySelectorAll('.nation');
    let count_coupon = document.querySelector('.count_coupon');
    link[1].innerText = `다운로드 쿠폰(${myData2.length})`
    count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`

    for (let i = 0; i < myData2.length; i++) {
        let arr_1 = new Array(myData2.length);
        arr_1[i] = document.createElement('div');
        couponList.appendChild(arr_1[i])
        arr_1[i].setAttribute('class', 'cartCount');
        for (let j = 0; j < Object.values(myData2[i]).length; j++) {
            let arr_2 = new Array(Object.values(myData2[i]).length);
            arr_2[j] = document.createElement('div');
            arr_1[i].appendChild(arr_2[j]);
            if (Object.keys(myData2[i])[j] === "expirationPeriod") {
                arr_2[j].innerText = changeDate(String(Object.values(myData2[i])[j]));
            } else {
                arr_2[j].innerText = Object.values(myData2[i])[j]
            }
            if (Object.keys(myData2[i])[j] === "discountAmount") {
                arr_2[j].setAttribute('class', 'cartDetail couponInfo');
            } else if (Object.keys(myData2[i])[j] === "downloadBt") {
                arr_2[j].setAttribute('class', 'cartDetail');
                arr_2[j].innerHTML = `<button class="downBt">받기</button>`
            } else {
                arr_2[j].setAttribute('class', 'cartDetail');
            }
        }
    }
}

// ===========================================================




// function pushCoupon() {
//     let pushBt = document.querySelectorAll('.downBt');
//     pushBt.addEventListener('click', ({

//     }))
// }



// =================================
// 쿠폰 발급일이 숫자 20231201 인 형태일 때,
// 년-월-일로 나눠주기 위해
function changeDate(date) {

    var year = date.substr(2, 2);
    var month = date.substr(4, 2);
    var day = date.substr(6, 2);

    let result = year + "-" + month + "-" + day
    return result
}
// ===============================


// =====================================================
function makeHaveCoupon() {
    haveFrame();  // 틀 만들기
    addHaveCoupon(); // myData 데이터 받아오기
}
function makeDownCoupon() {
    downFrame();
    addDownCoupon();
}

function change() {
    let havecp = document.querySelector('.haveCp'),
        downloadCp = document.querySelector('.downloadCp');

    havecp.addEventListener('click', makeHaveCoupon)

    downloadCp.addEventListener('click', makeDownCoupon);
}
// ========================================================

function selectOption() {
    let option = document.querySelectorAll('.option')
    option[0].addEventListener('click',);
    option[1].addEventListener('click',);
}

function sortHaveCoupon() {

    let sortedHd = myData2.sort(letSort("expirationPeriod"));
    return sortedHd;
}


function sortDownCoupon() {

    let sortedDd = (myData[0].coupon).sort(letSort("expirationPeriod"));
    return sortedDd;
}

// function sortDownCoupon() {

// }


function letSort(key) {
    return function (a, b) {
        if (a[key] > b[key]) {
            return 1;
        } else if (a[key] < b[key]) {
            return -1;
        }

        return 0;
    }
}

let data = [
    {
        "name": "가루1",
        "age": 21,
        "money": 67000
    },
    {
        "name": "가루2",
        "age": 59,
        "money": 21000
    },
    {
        "name": "가루3",
        "age": 7,
        "money": 38000
    }
];
// console.log(data);
// console.log(myData2);

// data.sort(arrOrder("money"));
