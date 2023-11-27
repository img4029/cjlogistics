'use strict'


let myData;
let myData2;

async function getClientData1() {
    try {

        let response1 = await axios.get('http://localhost:3000/loginComplete');
        let response2 = await axios.get('http://localhost:3000/canDownload');

        myData = response1.data;
        myData2 = response2.data;
        // =====================================================================================

        haveFrame()
        addHaveCoupon()
        change();
        // selectOption();


        // console.log(myData[0].coupon);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData1();





// ===================================================



// ===========================================================
// 쿠폰 목록 헤드 부분 틀
let couponList = document.querySelector('.mycoupon_list');
let link = document.querySelectorAll('.nation');
let count_coupon = document.querySelector('.count_coupon');

function haveFrame() {
    let outer = document.createElement('div');
    let category = ['쿠폰 번호', '쿠폰 유형', '쿠폰 이름', '할인율', '유효 기간'];

    couponList.innerHTML = "";
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < 5; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        if (category[i] === "할인율") {
            ar[i].setAttribute('class', 'headDetail couponInfo');
            ar[i].innerText = category[i];
        } else {
            ar[i].setAttribute('class', 'headDetail');
            ar[i].innerText = category[i];
        }
    }
}


// 쿠폰 목록 헤드 부분 틀
// 보유쿠폰과 카테고리가 달라서 
function downFrame() {
    let category = ['쿠폰 번호', '쿠폰 이름', '할인율', '유효 기간', '쿠폰 받기'];
    let outer = document.createElement('div');

    couponList.innerHTML = "";
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < category.length; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        if (category[i] === "할인율") {
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
    // let link = document.querySelectorAll('.nation');
    // let count_coupon = document.querySelector('.count_coupon');

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
                arr_2[j].innerText = `${changeDate(String(Object.values(myData[0].coupon[i])[j]))}
                발급날로 부터 1년`
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
    // let link = document.querySelectorAll('.nation');
    // let count_coupon = document.querySelector('.count_coupon');
    // let couponList = document.querySelector('.mycoupon_list');
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
                arr_2[j].innerText = `${changeDate(String(Object.values(myData2[i])[j]))}
                발급날로 부터 1년`
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


function sendCouponInfo() {
    let downBtn = document.querySelectorAll('.downBt');

    downBtn.addEventListener('click', ({
        // confirm("정말 다운로드 받으시겠습니까?");
    }));
}


// function sendCouponInfo(couponInfo) {

//     let serverURL = 'http://localhost:3000';


//     fetch(serverURL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(couponInfo),
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log('쿠폰 정보 전송 성공:', data);
//             // 필요에 따라 응답을 처리할 수 있습니다.
//         })
//         .catch(error => {
//             console.error('쿠폰 정보 전송 오류:', error);
//             // 오류를 적절히 처리할 수 있습니다.
//         });
// }


// ===========================================================





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
    haveFrame();  // 기존틀 지우고 새로 프레임을 만들고,
    addHaveCoupon(); // 내가 보유한 쿠폰 데이터를 입력받는다.
}
function makeDownCoupon() {
    downFrame(); // 기존틀 지우고 새로 프레임을 만들고
    addDownCoupon(); // 내가 보유한 쿠폰 데이터를 입력받는다.
}

function change() {
    let havecp = document.querySelector('.haveCp'),
        downloadCp = document.querySelector('.downloadCp');

    havecp.addEventListener('click', makeHaveCoupon);
    // 보유쿠폰 영역을 클릭하면, 내가 보유한 쿠폰 리스트가 출력
    downloadCp.addEventListener('click', makeDownCoupon);
    // 다운로드 가능쿠폰 영역을 클릭하면 다운로드 가능한 쿠폰 리스트 출력
}
// ========================================================






// ================================================================================

