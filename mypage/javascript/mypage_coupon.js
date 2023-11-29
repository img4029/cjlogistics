
'use strict'




let couponList = document.querySelector('.mycoupon_list');
//데이터를 받아서 입력할 영역
let link = document.querySelectorAll('.nation');
//보유쿠폰란, 다운로드 가능쿠폰란
let count_coupon = document.querySelector('.count_coupon');
// 보유중인 쿠폰의 개수, 다운로드 가능 쿠폰의 개수


// ===========================================================

function haveFrame() {
    let outer = document.createElement('div');
    let category = ['쿠폰 번호', '쿠폰 유형', '할인율', '유효 기간', '쿠폰 이름'];
    // 쿠폰 상세정보가 늘어나면 직접넣기 보다 추가해서 데이터를 입력할 수 있게 배열화
    link[1].innerText = `다운로드 쿠폰(${myData2.length})`
    count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`

    couponList.innerHTML = "";
    // 보유 쿠폰 -> 다운로드 쿠폰 -> 보유 쿠폰 이동 시 기존에 입력된 데이터 지우기
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < category.length; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        ar[i].setAttribute('class', 'headDetail');
        ar[i].innerText = category[i];
    }
}

function downFrame() {
    let category = ['쿠폰 번호', '쿠폰 유형', '할인율', '유효 기간', '쿠폰 이름'];
    let outer = document.createElement('div');
    link[1].innerText = `다운로드 쿠폰(${myData2.length})`
    count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`

    couponList.innerHTML = "";
    couponList.appendChild(outer);
    outer.setAttribute('class', 'headC');

    for (let i = 0; i < category.length; i++) {
        let ar = new Array(category.length);
        ar[i] = document.createElement('div');
        outer.appendChild(ar[i]);
        ar[i].setAttribute('class', 'headDetail');
        ar[i].innerText = category[i];
    }
}
let a = 1;
console.log(a);
// ====================================================================


// ===================================================================
// 로그인된 사람의 정보 => 보유중인 쿠폰 목록

function addHaveCoupon() {

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
            arr_2[j].setAttribute('class', 'cartDetail');
            if (Object.keys(myData[0].coupon[i])[j] === "expirationPeriod") {
                arr_2[j].innerText = `${changeDate(String(Object.values(myData[0].coupon[i])[j]))}
                발급일로 부터 1년`;
                // 20231201 을 년-월-일 형태로 변환해주기 위한 코드
            } else {
                arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
            }
        }
    }
}



function addDownCoupon(myData2) {

    for (let i = 0; i < myData2.length; i++) {
        let arr_1 = new Array(myData2.length);
        arr_1[i] = document.createElement('div');
        couponList.appendChild(arr_1[i])
        arr_1[i].setAttribute('class', 'cartCount');

        for (let j = 0; j < Object.values(myData2[i]).length; j++) {
            let arr_2 = new Array(Object.values(myData2[i]).length);
            arr_2[j] = document.createElement('div');
            arr_1[i].appendChild(arr_2[j]);
            arr_2[j].setAttribute('class', 'cartDetail');
            let Bt = document.createElement('button');

            if (Object.keys(myData2[i])[j] === "expirationPeriod") {
                arr_2[j].innerText = `${changeDate(String(Object.values(myData2[i])[j]))}
                발급일로 부터 1년`
            } else if (Object.keys(myData2[i])[j] === "couponType") {
                Bt.innerText = Object.values(myData2[i])[j]
                arr_2[j].setAttribute('class', 'cartDetail');
                arr_2[j].appendChild(Bt);
                Bt.className = "downBt";
                Bt.addEventListener('click', () => {
                    ppatch(myData2[i]);
                });
            } else {
                arr_2[j].innerText = Object.values(myData2[i])[j];
            }
        }
    }
}

// ===========================================================

function changeDate(date) {

    let year = date.substr(2, 2);
    let month = date.substr(4, 2);
    let day = date.substr(6, 2);

    let result = year + "-" + month + "-" + day
    return result
}
// 20231201 형태의 숫자를 년-월-일로 나눠주기 위한 함수
// =======================================

// =====================================================

function makeHaveCoupon() {
    haveFrame();
    addHaveCoupon();
}
// 보유쿠폰, 다운로드 가능 쿠폰 란을 누르면 
// 기존에 생성되어 있는 innerHTML 을 지우고
// 클릭한 항목이 나오도록
function makeDownCoupon(myData2) {
    downFrame();
    addDownCoupon(myData2);
}
// 보유쿠폰, 다운로드 가능 쿠폰 란을 누르면 
// 기존에 생성되어 있는 innerHTML 을 지우고
// 클릭한 항목이 나오도록

// ========================================================

function change(myData2) {
    let havecp = document.querySelector('.haveCp'),
        downloadCp = document.querySelector('.downloadCp');

    havecp.addEventListener('click', makeHaveCoupon);
    // 보유쿠폰 영역을 클릭하면, 내가 보유한 쿠폰 리스트가 출력

    downloadCp.addEventListener('click', () => makeDownCoupon(myData2));
    // 다운로드 가능쿠폰 영역을 클릭하면 다운로드 가능한 쿠폰 리스트 출력
}

// ============================================================

async function ppatch(myData2, count) {
    try {

        let patchData = {
            coupon: ''
        };

        patchData.coupon = [...myData[0].coupon, myData2];
        console.log(patchData);
        const patchResponse = await axios.patch(`http://localhost:3000/loginComplete/1`, patchData);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

// =============================================================

let myData;
let myData2;

async function getClientData1() {
    try {

        let response1 = await axios.get('http://localhost:3000/loginComplete');
        let response2 = await axios.get('http://localhost:3000/canDownload');

        myData = response1.data;
        myData2 = response2.data;

        haveFrame()
        addHaveCoupon()
        change(myData2);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData1();

// 'use strict'




// let couponList = document.querySelector('.mycoupon_list');
// let link = document.querySelectorAll('.nation');
// let count_coupon = document.querySelector('.count_coupon');


// // ===========================================================

// function haveFrame() {
//     let outer = document.createElement('div');
//     let category = ['쿠폰 번호', '쿠폰 유형', '할인율', '쿠폰 이름', '유효 기간'];
//     link[1].innerText = `다운로드 쿠폰(${myData2.length})`
//     count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`

//     couponList.innerHTML = "";
//     couponList.appendChild(outer);
//     outer.setAttribute('class', 'headC');

//     for (let i = 0; i < 5; i++) {
//         let ar = new Array(category.length);
//         ar[i] = document.createElement('div');
//         outer.appendChild(ar[i]);
//         if (category[i] === "할인율") {
//             ar[i].setAttribute('class', 'headDetail couponInfo');
//             ar[i].innerText = category[i];
//         } else {
//             ar[i].setAttribute('class', 'headDetail');
//             ar[i].innerText = category[i];
//         }
//     }
// }



// function downFrame() {
//     let category = ['쿠폰 번호', '쿠폰 유형', '할인율', '쿠폰 이름', '유효 기간'];
//     let outer = document.createElement('div');
//     link[1].innerText = `다운로드 쿠폰(${myData2.length})`
//     count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`

//     couponList.innerHTML = "";
//     couponList.appendChild(outer);
//     outer.setAttribute('class', 'headC');

//     for (let i = 0; i < category.length; i++) {
//         let ar = new Array(category.length);
//         ar[i] = document.createElement('div');
//         outer.appendChild(ar[i]);
//         if (category[i] === "할인율") {
//             ar[i].setAttribute('class', 'headDetail couponInfo');
//             ar[i].innerText = category[i];
//         } else {
//             ar[i].setAttribute('class', 'headDetail');
//             ar[i].innerText = category[i];
//         }
//     }
// }

// // ===========================================================





// // ===========================================================
// // 로그인된 사람의 정보 => 보유중인 쿠폰 목록

// function addHaveCoupon() {

//     link[0].innerText = `보유쿠폰(${(myData[0].coupon).length})`
//     count_coupon.innerHTML = `<strong>${myData[0].hname}</strong> 님이 보유하신 쿠폰은 <strong>${(myData[0].coupon).length}</strong>장 입니다.`

//     for (let i = 0; i < myData[0].coupon.length; i++) {
//         let arr_1 = new Array(myData[0].coupon.length);
//         arr_1[i] = document.createElement('div');
//         couponList.appendChild(arr_1[i])
//         arr_1[i].setAttribute('class', 'cartCount');

//         for (let j = 0; j < Object.values(myData[0].coupon[i]).length; j++) {
//             let arr_2 = new Array(Object.values(myData[0].coupon[i]).length);
//             arr_2[j] = document.createElement('div');
//             arr_1[i].appendChild(arr_2[j]);
//             arr_2[j].setAttribute('class', 'cartDetail');

//             // if(myData[0].coupon[i]) = "다운 "

//             // switch (Object.keys(myData[0].coupon[i])[j]) {
//             //     case "couponNumber":
//             //         arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//             //         break;
//             //     case "couponType":
//             //         arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//             //         break;
//             //     case "expirationPeriod":
//             //         arr_2[j].innerText = `${changeDate(String(Object.values(myData[0].coupon[i])[j]))}
//             //         발급일로 부터 1년`
//             //         break;
//             //     case "couponName":
//             //         arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//             //         break;
//             //     case "discountAmount":
//             //         arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//             //         break;

//             // }
//             switch (Object.keys(myData[0].coupon[i])[j]) {
//                 case "couponNumber":
//                     arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//                     break;
//                 case "expirationPeriod":
//                     arr_2[j].innerText = `${changeDate(String(Object.values(myData[0].coupon[i])[j]))}
//                     발급일로 부터 1년`
//                     break;
//                 case "discountAmount":
//                     arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//                     break;
//                 case "couponName":
//                     arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//                     break;
//                 case "couponType":
//                     arr_2[j].innerText = myData[0].coupon[i].couponType;
//                     // arr_2[j].innerText = Object.values(myData[0].coupon[i])[j];
//                     break;
//             }
//         }
//     }
// }


// function addDownCoupon(myData2) {

//     for (let i = 0; i < myData2.length; i++) {
//         let arr_1 = new Array(myData2.length);
//         arr_1[i] = document.createElement('div');
//         couponList.appendChild(arr_1[i])
//         arr_1[i].setAttribute('class', 'cartCount');

//         for (let j = 0; j < Object.values(myData2[i]).length; j++) {
//             let arr_2 = new Array(Object.values(myData2[i]).length);
//             arr_2[j] = document.createElement('div');
//             arr_1[i].appendChild(arr_2[j]);
//             let Bt = document.createElement('button');

//             if (Object.keys(myData2[i])[j] === "expirationPeriod") {
//                 arr_2[j].innerText = `${changeDate(String(Object.values(myData2[i])[j]))}
//                 발급일로 부터 1년`
//             } else if (Object.keys(myData2[i])[j] === "couponType") {
//                 Bt.innerText = Object.values(myData2[i])[j]
//             } else {
//                 arr_2[j].innerText = Object.values(myData2[i])[j]
//             }


//             if (Object.keys(myData2[i])[j] === "discountAmount") {
//                 arr_2[j].setAttribute('class', 'cartDetail couponInfo');
//             } else if (Object.keys(myData2[i])[j] === "couponType") {
//                 arr_2[j].setAttribute('class', 'cartDetail');
//                 arr_2[j].appendChild(Bt);
//                 Bt.className = "downBt";
//                 Bt.addEventListener('click', () => {
//                     ppatch(myData2[i]);
//                 });
//             } else {
//                 arr_2[j].setAttribute('class', 'cartDetail');
//             }

//         }
//     }
// }


// // ===========================================================



// function changeDate(date) {

//     let year = date.substr(2, 2);
//     let month = date.substr(4, 2);
//     let day = date.substr(6, 2);

//     let result = year + "-" + month + "-" + day
//     return result
// }
// // =======================================



// // =====================================================

// function makeHaveCoupon() {
//     haveFrame();
//     addHaveCoupon();
// }
// function makeDownCoupon(myData2) {
//     downFrame();
//     addDownCoupon(myData2);

// }

// // ========================================================

// function change(myData2) {
//     let havecp = document.querySelector('.haveCp'),
//         downloadCp = document.querySelector('.downloadCp');

//     havecp.addEventListener('click', makeHaveCoupon);
//     // 보유쿠폰 영역을 클릭하면, 내가 보유한 쿠폰 리스트가 출력

//     downloadCp.addEventListener('click', () => makeDownCoupon(myData2));
//     // 다운로드 가능쿠폰 영역을 클릭하면 다운로드 가능한 쿠폰 리스트 출력
// }


// // ============================================================

// async function ppatch(myData2, count) {
//     try {

//         let patchData = {
//             coupon: ''
//         };

//         patchData.coupon = [...myData[0].coupon, myData2];
//         console.log(patchData);
//         const patchResponse = await axios.patch(`http://localhost:3000/loginComplete/1`, patchData);
//     } catch (err) {
//         console.log('데이터를 가져오는 중 오류 발생');
//         console.log(err.message);
//     }
// }


// let myData;
// let myData2;

// async function getClientData1() {
//     try {

//         let response1 = await axios.get('http://localhost:3000/loginComplete');
//         let response2 = await axios.get('http://localhost:3000/canDownload');

//         myData = response1.data;
//         myData2 = response2.data;

//         haveFrame()
//         addHaveCoupon()
//         change(myData2);
//         console.log((myData2[0].downloadBt))
//     } catch (err) {
//         console.log('데이터를 가져오는 중 오류 발생');
//         console.log(err.message);
//     }
// }
// getClientData1();
