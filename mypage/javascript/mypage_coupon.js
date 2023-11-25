'use strict'


{/* <span><a href=""></a></span> */ }

let outer = document.querySelector('.mypage_info_outer_3'),
    linkAll = outer.querySelectorAll('.linkAll');

// console.log(linkAll);

let shoppingCategory = ['쿠폰내역', '적립금내역', '오늘본상품', '보관함', '주소록관리', '선물함'],
    serviceCategory = ['내 게시물 보기', 'e-mail문의', '1:1게시판'],
    customerCategory = ['회원정보변경', '회원정보탈퇴신청'];

// 카테고리 배열
// Shopcategory.push('추가 카테고리');
// 새로운 카테고리 추가 시
console.log(serviceCategory[0])
function makeLink() {

    for (let i = 0; i < shoppingCategory.length; i++) {
        let shoppingTag = document.createElement('a')
        linkAll[0].appendChild(shoppingTag);
        shoppingTag.innerText += shoppingCategory[i];
    }

    for (let i = 0; i < serviceCategory.length; i++) {
        let serviceTag = document.createElement('a')
        linkAll[1].appendChild(serviceTag);
        serviceTag.innerText += serviceCategory[i];
    }

    for (let i = 0; i < customerCategory.length; i++) {
        let customerTag = document.createElement('a')
        linkAll[2].appendChild(customerTag);
        customerTag.innerText += customerCategory[i];
    }
}

makeLink();





