'use strict'

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
const productItem = document.querySelector('.item_container');

// for문, 배열 활용 products 객체 참조
for (let i = 0; i < products.length; i++) {
    let changeImg = products[i].img;
    // console.log(products[i]);
    let product_list =              // 이미지 변경
        `<div class="products_list">
        <img src ="${changeImg}" class="itemImg"></img>
        <a href="#" class="itemName"></a>
        <a class="itemChar"></a>
        <a class="itemPrice"></a>
        </div>
        `;

    productItem.insertAdjacentHTML("beforeend", product_list);
    const item_Img = document.querySelectorAll(".itemImg");
    const item_Name = document.querySelectorAll(".itemName");
    const item_Char = document.querySelectorAll(".itemChar");
    const item_Price = document.querySelectorAll(".itemPrice");

    item_Img[i].insertAdjacentHTML("beforeend", `${products[i].img}`);
    item_Name[i].insertAdjacentHTML("beforeend", `${products[i].product}`);
    item_Char[i].insertAdjacentHTML("beforeend", `${products[i].character}`);
    item_Price[i].insertAdjacentHTML("beforeend", `${products[i].price}`);

}

// 2. 키워드 검색 후 제품 색인

// 3. 제품 가격별 정렬(오름차순, 내림차순)

function itemHighSort() {
    while (productItem.hasChildNodes()) {
        productItem.removeChild(productItem.firstChild);
    }
    const NewProducts = [...products];
    NewProducts.sort(function (a, b) {
        return a.price - b.price;
    });

    for (i = 0; i < NewProducts.length; i++) {

        productItem.insertAdjacentHTML("beforeend", product_list);
        item_Img = document.querySelectorAll(".itemImg");
        const item_Name = document.querySelectorAll(".itemName");
        const item_Char = document.querySelectorAll(".itemChar");
        const item_Price = document.querySelectorAll(".itemPrice");

        item_Img[i].insertAdjacentHTML("beforeend", `${products[i].img}`);
        item_Name[i].insertAdjacentHTML("beforeend", `${products[i].product}`);
        item_Char[i].insertAdjacentHTML("beforeend", `${products[i].character}`);
        item_Price[i].insertAdjacentHTML("beforeend", `${products[i].price}`);

    }
}

let itemSort = document.querySelectorAll('.itemSort')
// 4. 제품 가격대 검색받아 제품 색인
