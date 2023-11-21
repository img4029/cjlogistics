'use strict';

let login_btn = document.querySelectorAll(".login_btn"),

    findId_email = document.getElementById('findId_email'),
    findId_phoneNumber = document.getElementById('findId_phoneNumber'),

    idInput1 = document.getElementById('idInput1'),
    pwInput1 = document.getElementById('pwInput1'),

    findPw_email = document.getElementById('findPw_email'),
    findPw_phoneNumber = document.getElementById('findPw_phoneNumber'),

    idInput2 = document.getElementById('idInput2'),
    pwInput2 = document.getElementById('pwInput2');

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

idInput1.placeholder = 'NAME';
idInput1.onfocus = function (e) {
    e.target.placeholder = '';
}
idInput1.onblur = function (e) {
    e.target.placeholder = 'NAME';
}

idInput2.placeholder = 'NAME';
idInput2.onfocus = function (e) {
    e.target.placeholder = '';
}
idInput2.onblur = function (e) {
    e.target.placeholder = 'NAME';
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

