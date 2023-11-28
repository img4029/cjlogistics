'use strict';
const idinfo_form = document.getElementById("idinfo_form");

let birthDateY = document.querySelector(".birthDateY"),
    birthDateM = document.querySelector(".birthDateM"),
    birthDateD = document.querySelector(".birthDateD"),
    Agreement = document.querySelectorAll(".Agreement"),
    AgreementSub = document.querySelectorAll(".Agreement_sub"),
    Marketing = document.querySelectorAll(".Marketing"),
    idinfo_grid = document.querySelector(".idinfo_grid"),
    idinfoGridValue = idinfo_grid.getElementsByTagName('input'),
    sxBox = document.querySelector(".sx_box"),
    sxBoxInput = sxBox.getElementsByTagName('input'),
    idCount = 0,
    emailCount = 0;

let profile = {
    hname: '', // 이름
    hid: '', // 아이디
    hpw: '', // 비밀번호
    birthDate: '', // 생년월일
    sx: '', // 성별
    zip: '', //우편번호
    har: '', //집주소
    dar: '', //상세주소
    darCb: '', //기본배송지지정
    hpn: '', //연락처
    hem: '', //이메일
    cpn: '', //회사전화
    car: '', //회사 우편번호
    cdar: '', //회사 주소
    hsp: '', //휴대폰
    img: "https://image.makeshop.co.kr/makeshop/d3/basic_simple/mypage/bg_mypage_user.gif", //프로필이미지
    totalAmountPayment: "", //총 결제금액
    reserve: "", //적립금
    coupon: [
        {
            "couponNumber": "H57HESOZ",
            "couponType": "장바구니쿠폰",
            "couponName": "신규가입 쿠폰",
            "discountAmount": "10",
            "expirationPeriod": "2023.11.21 ~ 2023.12.21"
        }
    ], //쿠폰 
    ShoppingBasket: [], //장바구니
    Order: [], //주문내역
    lastestOrder: [], //최근 주문정보
    lastestPosted: [], //최근 등록 게시글
    wishList: [] //관심 상품 정보
}

for (let i = 1920; i < 2024; i++) {
    birthDateY.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 13; i++) {
    birthDateM.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 32; i++) {
    birthDateD.innerHTML += `<option value="${i}">${i}</option>`
}
// ==========================================
//우편번호랑 주소 불러오는 함수
function execDaumPostcode(id1,id2,id3) {
    new daum.Postcode({
        oncomplete: function (data) {
            document.getElementById(id1).value = data.address;
            document.getElementById(id2).value = data.zonecode;
        }
    }).open();
    document.getElementById(id3).focus();
}
//메인 CheckBox가 체크되면 서브가 모두 체크됨
function mainCheckBox(main) {
    if (main[0].checked) {
        for (let i = 1; i < main.length; i++) {
            main[i].checked = true;
        }
    }
    else if (main[0].checked != true) {
        for (let i = 1; i < main.length; i++) {
            main[i].checked = false;
        }
    }
};
//서브 CheckBox가 모두 체크되면 메인이 체크됨
function subCheckBoxAll(main) {
    for (let i = 1, count = 1; i < main.length; i++) {
        if (main[i].checked === true) count++;

        if (count == main.length) main[0].checked = true;
        else main[0].checked = false;
        console.log(count);
    }
};

//mainCheckBox 를 호출하기 위한 함수
function mainExecution(main, mainCheckBox) {
    main[0].addEventListener('click', () => {
        mainCheckBox(main);
    });
};
//subCheckBoxAll 를 호출하기 위한 함수
function subExecution(main, subCheckBoxAll) {
    for (let i = 0; i < main.length; i++) {
        main[i].addEventListener('click', () => {
            subCheckBoxAll(main);
        });
    }
};
//생년월일 체크하기위한 함수
function birthDateCheck(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].selected == true) if (array[i].value == "선택") return 1;
    }
    return 0;
}
//생년월일을 가져오는 함수
function birthDateOutput(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].selected == true) return array[i].value;
    }  
}
// 아이디 이메일 서버에서 중복체크
async function idEmailCheck(n1 , n2) {
    try {
        const response = await axios.get('http://localhost:3000/profile', profile);
        
        for (let i = 0; i < response.data.length; i++) {
            switch (n2) {
                case 1:
                    console.log(response.data[i].hid);
                    console.log(idinfoGridValue[n1].value);
                    if (response.data[i].hid == idinfoGridValue[n1].value) {
                        alert("중복된 아이디입니다.");  
                        return false;
                    }
                    break;
                case 2:
                    if (response.data[i].hem == idinfoGridValue[n1].value) {
                        alert("중복된 이메일입니다.");
                        return false;
                    }
                    break;
            }
        }
        console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
        console.log('상태 코드:', response.status);       // HTTP 상태 코드
        console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
        console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
        return true;
    } catch (err) {
        console.log(err);
    }
}
// 아이디 중복체크 호출 및 잘못된 문자 검열
async function idDoubleCheckfc() {
    if (await idEmailCheck(1, 1)) {
        const regPass = /^(?=.*[a-zA-Z])(?=.*[0-9]).{5,16}$/;  
        if (!regPass.test(idinfoGridValue[1].value)) {
            alert("영어와 숫자로 아이디를 입력해주세요");
            idinfoGridValue[1].focus();
            return;
        }
        alert(`${idinfoGridValue[1].value} 사용할수 있는 아이디입니다.`);
        idinfoGridValue[1].disabled = true;
        idinfoGridValue[2].focus();
        idCount = 1;
    }
}
console.log(idinfoGridValue[11].value);
// 이메일 중복체크 호출 및 잘못된 문자 검열
async function emailDoubleCheckfc() {
    let count = idinfoGridValue[12].value.split('');
    if (await idEmailCheck(12, 2)) { 
        for (let n = 0, i, j; n < count.length; n++) {
            if (count[n] == "@") i = n;
            if (count[n] == ".") j = n;
            if (i && j) {
                if ((j > i) && (i != 0) && (j != (count.length - 1))) {
                    alert(`${idinfoGridValue[12].value} 사용할수 있는 이메일입니다.`);
                    idinfoGridValue[12].disabled = true;
                    emailCount = 1;
                    break;
                }
            }
        }
        if (emailCount == 0) {
            alert("올바른 이메일이 아닙니다.");
            idinfoGridValue[12].focus();
        }
    }
}
// 서버와 연동하여 데이터 전달
async function postClientData() {
    try {
        const response = await axios.post('http://localhost:3000/profile', profile);

        console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
        console.log('상태 코드:', response.status);       // HTTP 상태 코드
        console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
        console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
    } catch (err) {
        console.log(err);
    }
}
//가입버튼 누르면 반응 하는 함수
function informationCheck() {
    outer:
    for (let i = 0, j = 0; i < 13; i++) {
        switch (i) {
            case 0:
                if (AgreementSub[0].checked !== true) {
                    alert(`약관을 읽어보시고 동의하셔야 됩니다.`);
                    AgreementSub[0].focus();
                    break outer;
                } else if (AgreementSub[1].checked !== true) {
                    alert(`개인정보 수집 및 이용에 동의하셔야 됩니다.`);
                    AgreementSub[1].focus();
                    break outer;
                }
                break;
            case 1:
                let myName = idinfoGridValue[0].value.trim();
                if (myName == "") {
                    alert(`이름을 입력해주세요`);
                    idinfoGridValue[0].focus();
                    break outer;
                }
                profile.hname = myName;
                break;
            case 2:
                if (idCount == 0) {
                    alert(`아이디 중복확인을 해주세요`);
                    idinfoGridValue[1].focus();
                    break outer;
                }
                profile.hid = idinfoGridValue[1].value;
                break;
            case 3:
                let regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
                let regPass2 = /[ "']/;
                if (!regPass.test(idinfoGridValue[2].value)) {
                    alert("영문, 숫자, 특수기호 조합으로 8~16자리 입력해주세요")
                    idinfoGridValue[2].focus();
                    break outer;
                }
                if (regPass2.test(idinfoGridValue[2].value)) {
                    alert(`비밀번호에 '(작은따옴표), "(큰따옴표), 공백은 입력 하실 수 없습니다.`);
                    idinfoGridValue[2].focus();
                    break outer;
                }
                break;
            case 4:
                if (idinfoGridValue[3].value != idinfoGridValue[2].value) {
                    alert("비밀번호가 서로 일치하지 않습니다");
                    idinfoGridValue[3].focus();
                    break outer;
                }
                profile.hpw = idinfoGridValue[2].value;
                break;
            case 5:
                let bdcount = 0;
                birthDateY = document.querySelector(".birthDateY"),
                birthDateM = document.querySelector(".birthDateM"),
                birthDateD = document.querySelector(".birthDateD");
                bdcount += birthDateCheck(birthDateY.children);
                bdcount += birthDateCheck(birthDateM.children);
                bdcount += birthDateCheck(birthDateD.children);
                if (bdcount != 0) {
                    alert('생년월일을 다시 입력해주세요.');
                    birthDateY.focus();
                    break outer;
                }
                profile.birthDate = birthDateOutput(birthDateY.children);
                profile.birthDate += '.'+birthDateOutput(birthDateM.children);
                profile.birthDate += '.' +birthDateOutput(birthDateD.children);
                break;
            case 6:
                let sx;
                for (let i = 0; i < sxBoxInput.length; i++) {
                    if (sxBoxInput[i].checked) sx = sxBoxInput[i].value;
                }
                if (sx == "sxnone") {
                    alert('성별을 선택해주세요.');
                    sxBoxInput[0].focus();
                    break outer;
                }
                profile.sx = sx;
                break;
            case 7:
                let zipCode = idinfoGridValue[7].value;
                if (zipCode == "") {
                    alert(`우편번호 검색을 통해 주소와 우편번호를 입력해주세요.`);
                    idinfoGridValue[7].focus();
                    break outer;
                }
                profile.zip = zipCode;
                profile.har = idinfoGridValue[8].value;
                break;
            case 8:
                let dar = idinfoGridValue[9].value.trim();
                if (dar == "") {
                    alert(`상세주소를 입력해주세요.`);
                    idinfoGridValue[9].focus();
                    break outer;
                }
                profile.dar = dar;
                break;
            case 9:
                let hpn = idinfoGridValue[11].value.trim();
                if (hpn == "") {
                    alert(`연락처를 입력해주세요.`);
                    idinfoGridValue[11].focus();
                    break outer;
                }
                profile.hpn = hpn;
                break;
            case 10:
                if (emailCount == 0) {
                    alert(`이메일 중복확인을 해주세요`);
                    idinfoGridValue[12].focus();
                    break outer;
                }
                profile.hem = idinfoGridValue[12].value;
                break;
            case 11:
                profile.cpn = idinfoGridValue[13].value;
                profile.car = idinfoGridValue[14].value;
                profile.cdar = idinfoGridValue[15].value;
                profile.hsp = idinfoGridValue[16].value;
                profile.darCb = idinfoGridValue[10].checked;
                break;
            case 12:
                postClientData();
                location.href = "../complete/complete.html"
                alert("등록되었습니다.\n회원 가입시 쿠폰이 발급되었습니다.\n(신규가입쿠폰)");
                break;
        }
    }

}
function onSubmit(event) {
    event.preventDefault();
};
idinfo_form.addEventListener("submit", onSubmit);

mainExecution(Agreement, mainCheckBox);
mainExecution(Marketing, mainCheckBox);
subExecution(Agreement, subCheckBoxAll);
subExecution(Marketing, subCheckBoxAll);