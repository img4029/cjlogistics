'use strict';

let birthDateY = document.querySelector(".birthDateY"),
    birthDateM = document.querySelector(".birthDateM"),
    birthDateD = document.querySelector(".birthDateD"),
    Agreement = document.querySelectorAll(".Agreement"),
    AgreementSub = document.querySelectorAll(".Agreement_sub"),
    Marketing = document.querySelectorAll(".Marketing"),
    registrationComplete = document.querySelector(".registrationComplete"),
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
    hsp: '' //휴대폰
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
function execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function (data) {
            document.getElementById('har').value = data.address;
            document.getElementById('zip').value = data.zonecode;
        }
    }).open();
    document.getElementById('dar').focus();
}
//우편번호랑 주소 불러오는 함수2
function execDaumPostcode1() {
    new daum.Postcode({
        oncomplete: function (data) {
            document.getElementById('cdar').value = data.address;
            document.getElementById('car').value = data.zonecode;
        }
    }).open();
    document.getElementById('cdar').focus();
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
// 아이디 중복체크
function idDoubleCheckfc() {
    let count = idinfoGridValue[1].value.split('');
    for (let n = 0; n < count.length; n++) {
        if ((count[n] == " ") || (count[n] == "&") || (count[n] == "?") || (count[n] == "%") || (count[n] === "#")) {
            alert("『&』,『?』,『%』『#』 또는 공백 문자를 사용하실 수 없습니다.");
            break;
        }
        if (n == count.length - 1) {
            alert(`${idinfoGridValue[1].value} 사용할수 있는 아이디입니다.`);
            idinfoGridValue[1].readOnly = true;
            idinfoGridValue[1].style.backgroundColor = "rgba(128, 128, 128, 0.2)"
            idCount = 1;
        }
    }
}
console.log(idinfoGridValue[11].value);
// 이메일 중복체크
function emailDoubleCheckfc() {
    let count = idinfoGridValue[12].value.split('');
    for (let n = 0, i, j; n < count.length; n++) {
        if (count[n] == "@") i = n;
        if (count[n] == ".") j = n;
        if (i && j) {
            if ((j > i) && (i != 0) && (j != (count.length - 1))) {
                alert(`${idinfoGridValue[12].value} 사용할수 있는 이메일입니다.`);
                idinfoGridValue[12].readOnly = true;
                idinfoGridValue[12].style.backgroundColor = "rgba(128, 128, 128, 0.2)"
                emailCount = 1;
                break;
            }
        }
    }
    if (emailCount == 0) {
        alert("올바른 이메일이 아닙니다.");
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
                    break outer;
                } else if (AgreementSub[1].checked !== true) {
                    alert(`개인정보 수집 및 이용에 동의하셔야 됩니다.`);
                    break outer;
                }
                break;
            case 1:
                let myName = idinfoGridValue[0].value.trim();
                if (myName == "") {
                    alert(`이름을 입력해주세요`);
                    break outer;
                }
                profile.hname = myName;
                break;
            case 2:
                if (idCount == 0) {
                    alert(`아이디 중복확인을 해주세요`);
                    break outer;
                }
                profile.hid = idinfoGridValue[1].value;
                break;
            case 3:
                // console.log(idinfoGridValue[2].value);
                let count = idinfoGridValue[2].value.split('');
                for (let n = 0; n < count.length; n++) {
                    if (count.length < 8) {
                        alert(`비밀번호는 영문 대소문자/숫자/특수문자를 혼용하여 8~16자를 입력해주십시오.`);
                        break outer;
                    } else if ((count[n] == " ") || (count[n] == `"`) || (count[n] == `'`)) {
                        alert(`비밀번호에 '(작은따옴표), "(큰따옴표), 공백은 입력 하실 수 없습니다.`);
                        break outer;
                    }
                }
                break;
            case 4:
                if (idinfoGridValue[3].value != idinfoGridValue[2].value) {
                    alert("비밀번호가 서로 일치하지 않습니다");
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
                    break outer;
                }
                profile.sx = sx;
                break;
            case 7:
                let zipCode = idinfoGridValue[7].value;
                if (zipCode == "") {
                    alert(`우편번호 검색을 통해 주소와 우편번호를 입력해주세요.`);
                    break outer;
                }
                profile.zip = zipCode;
                profile.har = idinfoGridValue[8].value;
                break;
            case 8:
                let dar = idinfoGridValue[9].value.trim();
                if (dar == "") {
                    alert(`상세주소를 입력해주세요.`);
                    break outer;
                }
                profile.dar = dar;
                break;
            case 9:
                let hpn = idinfoGridValue[11].value.trim();
                if (hpn == "") {
                    alert(`연락처를 입력해주세요.`);
                    break outer;
                }
                profile.hpn = hpn;
                break;
            case 10:
                if (emailCount == 0) {
                    alert(`이메일 중복확인을 해주세요`);
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
mainExecution(Agreement, mainCheckBox);
mainExecution(Marketing, mainCheckBox);
subExecution(Agreement, subCheckBoxAll);
subExecution(Marketing, subCheckBoxAll);

// registrationComplete.childNodes[1].addEventListener('click', informationCheck);