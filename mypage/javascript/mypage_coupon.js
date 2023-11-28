'use strict'




// ===========================================================
// 쿠폰 목록 헤드 부분 틀
let couponList = document.querySelector('.mycoupon_list');
let link = document.querySelectorAll('.nation');
let count_coupon = document.querySelector('.count_coupon');

function haveFrame() {
    let outer = document.createElement('div');
    let category = ['쿠폰 번호', '쿠폰 유형', '할인율', '쿠폰 이름', '유효 기간'];
    link[1].innerText = `다운로드 쿠폰(${myData2.length})`
    count_coupon.innerHTML = `다운로드 가능한 쿠폰은 <strong>${myData2.length}</strong> 장 입니다.`
    
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
// 보유중인 쿠폰과 다운로드 가능 쿠폰이 카테고리가 달라서
// 틀을 다르게 만들었다.
function downFrame() {
    let category = ['쿠폰 번호', '쿠폰 이름', '할인율', '유효 기간', '쿠폰 받기'];
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



// db에 저장되어 있는 다운로드 가능한 쿠폰 목록이다.
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
            let Bt = document.createElement('button');
            
            if (Object.keys(myData2[i])[j] === "expirationPeriod") {
                arr_2[j].innerText = `${changeDate(String(Object.values(myData2[i])[j]))}
                발급날로 부터 1년`
            } else if (Object.keys(myData2[i])[j] === "downloadBt") {
                
                Bt.innerText = Object.values(myData2[i])[j]
            } else {
                arr_2[j].innerText = Object.values(myData2[i])[j]
            }
            
            
            if (Object.keys(myData2[i])[j] === "discountAmount") {
                arr_2[j].setAttribute('class', 'cartDetail couponInfo');
            } else if (Object.keys(myData2[i])[j] === "downloadBt") {
                arr_2[j].setAttribute('class', 'cartDetail');
                arr_2[j].appendChild(Bt);
                Bt.className = "downBt";
                Bt.addEventListener('click', () => {
                    ppatch(myData2[i]);
                });
            } else {
                arr_2[j].setAttribute('class', 'cartDetail');
            }
            
        }
    }
}






// ===========================================================




// =========================================
// 쿠폰 발급일이 숫자 20231201 인 형태일 때,
// 년-월-일로 나눠주기 위해
// substr 추가설명
function changeDate(date) {
    
    let year = date.substr(2, 2);
    let month = date.substr(4, 2);
    let day = date.substr(6, 2);
    
    let result = year + "-" + month + "-" + day
    return result
}
// =======================================



// =====================================================


function makeHaveCoupon() {
    haveFrame();  // 기존틀 지우고 새로 프레임을 만들고,
    addHaveCoupon(); // 내가 보유한 쿠폰 데이터를 입력받는다.
}
function makeDownCoupon(myData2) {
    downFrame(); // 기존틀 지우고 새로 프레임을 만들고
    addDownCoupon(myData2); // 다운로드 가능한 쿠폰
    // 쿠폰을 다운받을 때 서버로 정보를 전송하기 위해 매개변수
}

// ========================================================
function change(myData2) {
    let havecp = document.querySelector('.haveCp'),
    downloadCp = document.querySelector('.downloadCp');
    
    havecp.addEventListener('click', makeHaveCoupon);
    // 보유쿠폰 영역을 클릭하면, 내가 보유한 쿠폰 리스트가 출력
    
    downloadCp.addEventListener('click', () => makeDownCoupon(myData2));
    // 다운로드 가능쿠폰 영역을 클릭하면 다운로드 가능한 쿠폰 리스트 출력
}
// // ========================================================



// =====================================================

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

        // ===========================================================

        haveFrame()
        addHaveCoupon()
        change(myData2);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData1();
// ===================================================