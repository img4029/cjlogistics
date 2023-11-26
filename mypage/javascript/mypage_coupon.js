'use strict'


let profileData = [
    {
        img: "./image/bg1.jpg",
        name: '김수빈 [임의 생성 이메일]',
        phone: '010-5764-3321',
        email: 'gjnsdx123@naver.com',
        address: '경기도~~~~~~~~~~~~~~',
        totalCost: '1,000,000 원',
        reserves: ',345 원',
        coupon: '3 개',
        id: 1,
    },
    {
        img: "./image/bg2.jpg",
        name: '이해나 [임의 생성 이메일]',
        phone: '010-2345-2176',
        email: 'fhddf2@naver.com',
        address: '서울특별시~~~~~~~~~~~~~~',
        totalCost: '2,000,000 원',
        reserves: '3,345 원',
        coupon: '3 개',
        id: 2,
    }];

// 1.   내가 만든 더미데이터에서 주소는 address 라고 했고,
//      형이 만든 db.json 파일에 보면 주소를 
//      "har": "경기 이천시 부발읍 대산로 759" 라고 하고

//      총 사용금액을 나는 totalCost 라고 썼고,
//      
//      이 부분이 문제 되는가?
// 2.   



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





