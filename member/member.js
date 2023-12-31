'use strict';

let memberBtn = document.querySelector('.member_btn'),
    findIdPwBtn = document.querySelector('.findIdPw_btn'),
    idInput = document.querySelector('#idInput'),
    pwInput = document.querySelector('#pwInput'),
    login_btn = document.querySelector('.login_btn'),
    clientData1,
    count=0;
// Input 태그 클릭시 글씨 사라지고 다시 나타나기 기본
function InputDefault(Input, Input2) {
    Input.placeholder = 'MEMBER ID';
    Input.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input.onblur = function (e) {
        e.target.placeholder = 'MEMBER ID';
    }

    Input2.placeholder = 'PASSWORD';
    Input2.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input2.onblur = function (e) {
        e.target.placeholder = 'PASSWORD';
    }
}

//DB의 정보와 입력한 정보를 비교 (아이디 비밀번호로 로그인)
async function ClientData() {
    try {
        // let count = 0;
        const response = await axios.get('http://localhost:3000/profile/');
        clientData1 = response.data;
        for (let i = 0; i < clientData1.length; i++) {
            if ((clientData1[i].hid == idInput.value) && (clientData1[i].hpw == pwInput.value)) {
                const responsepost = await axios.put('http://localhost:3000/loginComplete/1', clientData1[i]);
                location.href = "../index.html";
                count++;
            }
        }
        if (count == 0) alert('ID 또는 비밀번호가 틀립니다 ');
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

memberBtn.addEventListener('click', () => {
    location.href = "../idinfo/idinfo.html"; //현제 페이지 URL 정보를 변경
});
findIdPwBtn.addEventListener('click', () => {
    location.href = "../lostpass/lostpass.html"; //현제 페이지 URL 정보를 변경
});
login_btn.addEventListener('click', () => {
    if (idInput.value == '') {
        alert('회원 ID를 입력하세요.');
    } else if (pwInput.value == '') {
        alert('회원 비밀번호를 입력하세요.');
    } else {
        ClientData();
    }
});

InputDefault(idInput, pwInput);

// loginComplete = "test";
// console.log(loginComplete);