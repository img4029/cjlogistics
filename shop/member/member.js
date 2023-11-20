'use strict';
let memberBtn = document.querySelector('.member_btn'),
    findIdPwBtn = document.querySelector('.findIdPw_btn');

memberBtn.addEventListener('click', () => {
    location.href = "../idinfo/idinfo.html"; //현제 페이지 URL 정보를 변경
});
findIdPwBtn.addEventListener('click', () => {
    location.href = "../lostpass/lostpass.html"; //현제 페이지 URL 정보를 변경
});
