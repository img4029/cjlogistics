'use strict';

let login_btn = document.querySelectorAll(".login_btn"),
    findId_email = document.getElementById('findId_email'),
    findId_phoneNumber = document.getElementById('findId_phoneNumber'),
    idInput1 = document.getElementById('idInput1'),
    pwInput1 = document.getElementById('pwInput1'),
    findPw_email = document.getElementById('findPw_email'),
    findPw_phoneNumber = document.getElementById('findPw_phoneNumber'),
    idInput2 = document.getElementById('idInput2'),
    pwInput2 = document.getElementById('pwInput2'),
    main_container = document.querySelector(".main_container"),
    findId_btn = document.querySelector(".findId_btn"),
    tpPw_btn = document.querySelector(".tpPw_btn"),
    sub_container = document.querySelector(".sub_container"),
    getData = document.querySelector(".getData");
let clientData;
// Input 태그 클릭시 글씨 사라지고 다시 나타나기 바꾸기
function InputChange(Input, find) {
    if (find.checked == true) {
        Input.placeholder = 'E-MAIL';
        Input.onfocus = function (e) {
            e.target.placeholder = '';
        }
        Input.onblur = function (e) {
            e.target.placeholder = 'E-MAIL';
        }
    } else {
        Input.placeholder = 'PHONE NUMBER';
        Input.onfocus = function (e) {
            e.target.placeholder = '';
        }
        Input.onblur = function (e) {
            e.target.placeholder = 'PHONE NUMBER';
        }
    }
}
// Input 태그 클릭시 글씨 사라지고 다시 나타나기 기본
function InputDefault(Input, Input2, Input3, Input4) {
    Input.placeholder = 'NAME';
    Input.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input.onblur = function (e) {
        e.target.placeholder = 'NAME';
    }
    Input2.placeholder = 'ID';
    Input2.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input2.onblur = function (e) {
        e.target.placeholder = 'ID';
    }
    Input3.placeholder = 'E-MAIL';
    Input3.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input3.onblur = function (e) {
        e.target.placeholder = 'E-MAIL';
    }
    Input4.placeholder = 'E-MAIL';
    Input4.onfocus = function (e) {
        e.target.placeholder = '';
    }
    Input4.onblur = function (e) {
        e.target.placeholder = 'E-MAIL';
    }
}
//메인화면과 서브화면 전환
function mainContainerChange() {
    if (main_container.style.display == "block") {
        main_container.style.display = "none";
        sub_container.style.display = "block";
    } 
}
//아이디 찾고 가져오기
//데이터 가져오기
async function idGetClientData() {
// async function ClientData() {
    try {
        const response = await axios.get('http://localhost:3000/profile/');
        clientData = response.data;
        for (let i = 0; i < clientData.length; i++) {
            if (pwInput1.placeholder == "E-MAIL") {
                if ((clientData[i].hname == idInput1.value) && (clientData[i].hem == pwInput1.value)) {
                    getData.innerText = clientData[i].hid.slice(0, clientData[i].hid.length - 2)+'**';
                }
            } else {
                if ((clientData[i].hname == idInput1.value) && (clientData[i].hpn == pwInput1.value)) {
                    getData.innerText = clientData[i].hid.slice(0, clientData[i].hid.length - 2) + '**';
                }
            }
        }
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
//비밀번호 찾기
//데이터 가져오기
async function pwGetClientData() {
    try {
        const response = await axios.get('http://localhost:3000/profile/');
        clientData = response.data;
        for (let i = 0; i < clientData.length; i++) {
            if (pwInput2.placeholder == "E-MAIL") {
                if ((clientData[i].hid == idInput2.value) && (clientData[i].hem == pwInput2.value)) {
                    getData.innerText = clientData[i].hid.slice(0, clientData[i].hid.length - 2) + '**';
                }
            } else {
                if ((clientData[i].hid == idInput2.value) && (clientData[i].hpn == pwInput2.value)) {
                    getData.innerText = clientData[i].hid.slice(0, clientData[i].hid.length - 2) + '**';
                }
            }
        }
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
findId_email.addEventListener('click', () => {
    InputChange(pwInput1, findId_email)
})
findId_phoneNumber.addEventListener('click', () => {
    InputChange(pwInput1, findId_email)
})
findPw_email.addEventListener('click', () => {
    InputChange(pwInput2, findPw_email)
})
findPw_phoneNumber.addEventListener('click', () => {
    InputChange(pwInput2, findPw_email)
})

for (let i = 0; i < login_btn.length; i++) {
    login_btn[i].addEventListener('click', () => {
        location.href = "../member/member.html"; //현제 페이지 URL 정보를 변경
    });
}

InputDefault(idInput1, idInput2, pwInput1, pwInput2);
// InputDefault(idInput2, pwInput2);

// mainContainerChange();
findId_btn.addEventListener('click', () => {
    mainContainerChange();
    idGetClientData();
});
tpPw_btn.addEventListener('click', () => {
    mainContainerChange();
    pwGetClientData();
});