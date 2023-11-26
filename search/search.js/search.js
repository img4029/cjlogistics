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
let productItem = document.querySelector('.item_container');

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

// 2. 페이지 네이션
// const contents = document.querySelector(".item_container");
// const buttons = document.querySelector(".pageButtons");

// const numOfContent = 36;
// const showButton = 4;
// const maxContent = 9;
// const maxPage = Math.ceil(numOfContent / maxContent);
// let page = 1;

// const makeContent = (id) => {
//     const NewProducts = [...products];
//     // i 가 정의되어 있지 않아서 id로 수정
//     let product_list = `<div class="products_list">
//         <img src="${NewProducts[id - 1].img}" class="itemImg"> <!-- id로 수정 -->
//         <a href="#" class="itemName">${NewProducts[id - 1].product}</a> <!-- id로 수정 -->
//         <a class="itemChar">${NewProducts[id - 1].character}</a> <!-- id로 수정 -->
//         <a class="itemPrice">${NewProducts[id - 1].price}</a> <!-- id로 수정 -->
//     </div>`;
//     productItem.insertAdjacentHTML("beforeend", product_list);
// };

// const makeButton = (id) => {
//     const button = document.createElement("button");
//     button.classList.add("button");
//     button.dataset.num = id;
//     button.innerText = id;
//     button.addEventListener("click", (e) => {
//         Array.prototype.forEach.call(buttons.children, (button) => {
//             if (button.dataset.num) button.classList.remove("active");
//         });
//         e.target.classList.add("active");
//         renderContent(parseInt(e.target.dataset.num));
//     });
//     return button;
// };

// const renderContent = (page) => {
//     // productItem을 정의해야 합니다.
//     const productItem = document.querySelector(".productItem"); // Assuming ".productItem" is the container for your content

//     // 목록 리스트 초기화
//     while (productItem.hasChildNodes()) {
//         productItem.removeChild(productItem.lastChild);
//     }
//     // 글의 최대 개수를 넘지 않는 선에서, 화면에 최대 10개의 글 생성
//     for (let id = (page - 1) * maxContent + 1; id <= page * maxContent && id <= numOfContent; id++) {
//         makeContent(id); // 수정된 부분: renderContent 내에서 makeContent 직접 호출
//     }
// };

// const renderButton = (page) => {
//     // 버튼 리스트 초기화
//     while (buttons.hasChildNodes()) {
//         buttons.removeChild(buttons.lastChild);
//     }
//     // 화면에 최대 5개의 페이지 버튼 생성
//     for (let id = page; id < page + showButton && id <= maxPage; id++) {
//         buttons.appendChild(makeButton(id));
//     }
//     // 첫 버튼 활성화(class="active")
//     buttons.children[0].classList.add("active");

//     // productItem이 정의되어 있지 않아서 수정
//     const productItem = document.querySelector(".productItem");
//     productItem.prepend(prev);
//     productItem.append(next);

//     // 이전, 다음 페이지 버튼이 필요한지 체크
//     if (page - showButton < 1) productItem.removeChild(prev); // 수정된 부분: buttons가 아니라 productItem
//     if (page + showButton > maxPage) productItem.removeChild(next); // 수정된 부분: buttons가 아니라 productItem
// };

// const render = (page) => {
//     renderContent(page);
//     renderButton(page);
// };
// render(page);

// const goPrevPage = () => {
//     page -= showButton;
//     render(page);
// };

// const goNextPage = () => {
//     page += showButton;
//     render(page);
// };

// const prev = document.createElement("button");
// prev.classList.add("button", "prev");
// prev.innerHTML = '<ion-icon name="chevron-back-outline"></ion-icon>';
// prev.addEventListener("click", goPrevPage);

// const next = document.createElement("button");
// next.classList.add("button", "next");
// next.innerHTML = '<ion-icon name="chevron-forward-outline"></ion-icon>';
// next.addEventListener("click", goNextPage);


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



//  4. 검색 필터

// const searchInput = document.querySelector('.searchBox1');
// const searchButton = document.querySelector('.searchButton');

// searchButton.addEventListener('click', () => {
//     const keyword = searchInput.value.toLowerCase();

//     // 목록 리스트 초기화
//     while (productItem.hasChildNodes()) {
//         productItem.removeChild(productItem.firstChild);
//     }

//     // 검색어에 맞는 제품만 표시
//     const filteredProducts = products.filter(product => {
//         return product.product.toLowerCase().includes(keyword);
//     });

//     // 검색 결과 표시
//     filteredProducts.forEach(product => {
//         let product_list = `<div class="products_list">
//             <img src="${product.img}" class="itemImg">
//             <a href="#" class="itemName">${product.product}</a>
//             <a class="itemChar">${product.character}</a>
//             <a class="itemPrice">${product.price}</a>
//         </div>`;
//         productItem.insertAdjacentHTML("beforeend", product_list);
//     });
// });
