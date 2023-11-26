'use strict'

// 왜이럼커밋도햇는데개빡치네
// 1. 자바스크립트 제품 더미 불러오기

// 제품 데이터별 객체 생성
let products = [
    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000612.jpg?1700530955",
        product: "돔 캔들 유칼립투스 라벤더",
        character: "유칼립투스 ∙ 라벤더 ∙  우디 ∙ 포근함",
        price: "67,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000602.jpg?1700530972",
        product: "오일퍼퓸 20ml + 코냑캔들",
        character: "회원전용상품",
        price: "166,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000612.jpg?1700530955",
        product: "오일퍼퓸20ml +디켄터 리드 디퓨저",
        character: "회원전용상품",
        price: "200,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000012.jpg?1695620401",
        product: "오일 퍼퓸 밤쉘",
        character: "작약 ∙ 플로럴 ∙ 시그니처 ∙ 달콤함",
        price: "54,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000022.jpg?1695620629",
        product: "오일 퍼퓸 불가리안 로즈",
        character: "장미 ∙ 플로럴 ∙ 매혹적 ∙ 중후함",
        price: "54,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000032.jpg?1695621025",
        product: "오일 퍼퓸 블루 세이지 블라썸",
        character: "블루세이지 ∙ 허브 ∙ 우디 ∙ 시원함",
        price: "54,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000052.jpg?1695624547",
        product: "오일 퍼퓸 씨 모스",
        character: "오셔닉 ∙ 시원함 ∙ 청량함 ∙ 중후함",
        price: "54,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0030000000012.jpg?1671424911",
        product: "디퓨저 밤쉘",
        character: "작약 ∙ 플로럴 ∙ 시그니처 ∙ 달콤함",
        price: "108,000원"
    },

    {
        img: "	https://danielstruth.com/shopimages/dmcosmetic/0030000000022.jpg?1671424911",
        product: "디퓨저 매그놀리아 힐",
        character: "오셔닉 ∙ 시원함 ∙ 청량함 ∙ 중후함",
        price: "54,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0010000000142.jpg?1695624640",
        product: "오일 퍼퓸 4종 세트",
        character: "Pure Oil Perfume SET",
        price: "172,000원"
    },

    {
        img: "https://danielstruth.com/shopimages/dmcosmetic/0040000000062.jpg?1695732243",
        product: "코냑 캔들 밤쉘",
        character: "작약 ∙ 플로럴 ∙ 시그니처 ∙ 달콤함",
        price: "74,000원"
    },
];

// html 구현
// -1 html 클래스 당겨오기
const productItem = document.querySelector('.item_container');

// -2 js 활용 브라우저 내 레이아웃 구성 / 이미지 순서 변경을 위한 변수 추가 선언(let)
for (let i = 0; i < products.length; i++) {
    let changeImg = products[i].img;
    let product_list = `<div class="products_list">
        <img src="${changeImg}" class="itemImg">
        <a href="#" class="itemName">${products[i].product}</a>
        <a class="itemChar">${products[i].character}</a>
        <a class="itemPrice">${products[i].price}</a>
    </div>`;

    // for문, 배열 활용 products 객체 참조
    productItem.insertAdjacentHTML("beforeend", product_list);
}

// 2. 키워드 검색 후 제품 색인

// 3. 제품 가격별 정렬(오름차순, 내림차순) : 제품 모두 삭제 후 정렬 순서대로 신규 삽입
// -1 오름차순(낮은)
const highPriceBtn = document.querySelector('.highPrice');
const lowPriceBtn = document.querySelector('.lowPrice');

function itemHighSort() {
    while (productItem.hasChildNodes()) {
        productItem.removeChild(productItem.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
        return parseFloat(a.price.replace(',', '')) - parseFloat(b.price.replace(',', ''));
    });

    for (let i = 0; i < NewProducts.length; i++) {
        let product_list = `<div class="products_list">
            <img src="${NewProducts[i].img}" class="itemImg">
            <a href="#" class="itemName">${NewProducts[i].product}</a>
            <a class="itemChar">${NewProducts[i].character}</a>
            <a class="itemPrice">${NewProducts[i].price}</a>
        </div>`;
        productItem.insertAdjacentHTML("beforeend", product_list);
    }
}

// -2 내림차순(높은가격부터~)
function itemLowSort() {
    while (productItem.hasChildNodes()) {
        productItem.removeChild(productItem.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
        return parseFloat(b.price.replace(',', '')) - parseFloat(a.price.replace(',', ''));
    });

    for (let i = 0; i < NewProducts.length; i++) {
        let product_list = `<div class="products_list">
            <img src="${NewProducts[i].img}" class="itemImg">
            <a href="#" class="itemName">${NewProducts[i].product}</a>
            <a class="itemChar">${NewProducts[i].character}</a>
            <a class="itemPrice">${NewProducts[i].price}</a>
        </div>`;
        productItem.insertAdjacentHTML("beforeend", product_list);
    }
}

highPriceBtn.addEventListener('click', itemLowSort);
lowPriceBtn.addEventListener('click', itemHighSort);



// 4. 제품 가격대 검색받아 제품 색인
