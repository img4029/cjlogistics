'use strict'

// 1. 자바스크립트 제품 더미 불러오기
// 제품 데이터별 객체 생성 : 내부 객체는 이전 파일에

// JSON DB : async axios 로 데이터 가져온 후 productData로 받아주기
let productData;
async function getClientData1() {
    try {
        const response = await axios.get('http://localhost:3000/ProductList/1');

        productData = response.data;
        console.log(productData);
        // N개의 제품 안내 문구
        let searchInfo = document.querySelector(".searchInfo");

        // ... 사용하여 배열의 구조를 전체 분할하여 하나의 배열로 만들어 perfumeData 변수에 담기
        let allData =
            [...productData.perfume,
            ...productData.diffuser,
            ...productData.candle,
            ...productData.homeCare];

        // 함수 참조를 통해 전체 데이터 브라우저에 출력
        getItem(allData);

        // N개의 제품 안내 문구의 길이 및 문자열 리터럴 활용
        searchInfo.innerText = `${allData.length} 개의 상품이 있습니다`

        // 콘솔로 배열 확인
        console.log(allData);

        // 검색..ㅠ.ㅠ
        // ======================================================
        // 내림차순 오름차순 함수 호출 및 perfumeData 매개변수 참조
        highPriceBtn.addEventListener('click', () => {
            itemLowSort(allData);
        });
        lowPriceBtn.addEventListener('click', () => {
            itemHighSort(allData)
        });

        //  이거므ㅓ이;ㅁ 불러오질 못하고계속ㄱ오류나
        searchButton.addEventListener('click', () => {
            return searchKey();
        });

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }

};
getClientData1();

// html 구현
// -1 html 클래스 당겨오기

let productItem = document.querySelector('.item_container');
// 객체의 참조를 받아서 배열로 된 데이터를 html 형태로 구현
function getItem(products) {
    for (let i = 0; i < products.length; i++) {
        let changeImg = products[i].img;
        let product_list = `<div class="products_list">
            <img src="${changeImg}" class="itemImg">
            <a href="#" class="itemName">${products[i].productName}</a>
            <a class="itemChar">${products[i].character}</a>
            <a class="itemPrice">${products[i].price.toLocaleString() + '원'
            }</a>
        </div>`;

        // for문, 배열 활용 products 객체 참조
        productItem.insertAdjacentHTML("beforeend", product_list);
    }
};

// -2 js 활용 브라우저 내 레이아웃 구성 / 이미지 순서 변경을 위한 변수 추가 선언(let)

// 2. 페이지 네이션
// const productItem = document.querySelector(".item_container");
// const buttons = document.querySelector(".pageButtons");

// const numOfContent = 30;
// const maxbutton = 5;
// const pageContent = 9;
// const maxPage = Math.ceil(numOfContent / pageContent);
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
//     productItem.insertAdjacentHTML("beforeend", products_list);
// };

// const makeButton = (buttonNumber) => {
//     const button = document.createElement("button");
//     button.classList.add("button");
//     button.dataset.num = buttonNumber;
//     button.innerText = buttonNumber;
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

function itemHighSort(productData) {
    console.log(productData);
    while (productItem.hasChildNodes()) {
        productItem.removeChild(productItem.firstChild);
    }
    const NewProducts = [...productData];
    console.log(NewProducts);
    NewProducts.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });

    for (let i = 0; i < NewProducts.length; i++) {
        let product_list = `<div class="products_list">
            <img src="${NewProducts[i].img}" class="itemImg">
            <a href="#" class="itemName">${NewProducts[i].productName}</a>
            <a class="itemChar">${NewProducts[i].character}</a>
            <a class="itemPrice">${NewProducts[i].price.toLocaleString() + '원'
            }</a>
        </div>`;
        productItem.insertAdjacentHTML("beforeend", product_list);
    }
}

// -2 내림차순(높은가격부터~)
function itemLowSort(productData) {
    console.log(productData);
    while (productItem.hasChildNodes()) {
        productItem.removeChild(productItem.firstChild);
    }
    const NewProducts = [...productData];
    NewProducts.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });

    for (let i = 0; i < NewProducts.length; i++) {
        let product_list = `<div class="products_list">
            <img src="${NewProducts[i].img}" class="itemImg">
            <a href="#" class="itemName">${NewProducts[i].productName}</a>
            <a class="itemChar">${NewProducts[i].character}</a>
            <a class="itemPrice">${NewProducts[i].price.toLocaleString() + '원'
            }</a>
        </div>`;
        productItem.insertAdjacentHTML("beforeend", product_list);
    }
}



//  4. 검색 필터
// 검색하는 키워드의 값을 담아줄 변수

// 위에서 전체 배열에 대한 데이터를 매개변수로 받음

// html 인풋박스 값, 서치 버튼 요소 소환
let searchKeyword = document.querySelector('#searchBox1');
const searchButton = document.querySelector('.searchButton');

function searchKey(allData) {

    console.log(allData);

    // 새로받을 데이터
    let selectData = [];
    // 클릭 시 입력받은 키워드 값
    searchButton.addEventListener('click', () => {
        const keyword = searchKeyword.value
    });

    console.log(keyword);

    for (let i = 0; i < allData.length; i++) {
        if (allData[i].productName.includes(keyword)) {
            selectData = [...selectData, allData[i]];
        }
    }
    // 키워드 입력시 데이터 찍히는지 확인
    console.log(selectData);

    // 검색 결과 표시..인데안먹어
    function selectDatafunc(selectData) {
        for (let i = 0; i < selectData.length; i++) {
            let changeImg = selectData.img[i]
            let product_list = `<div class="products_list">
            <img src="${changeImg}" class="itemImg">
            <a href="#" class="itemName">${selectData[i].productName}</a>
            <a class="itemChar">${selectData[i].character}</a>
            <a class="itemPrice">${selectData[i].price.toLocaleString() + '원'
                }</a>
        </div>`;

            productItem.insertAdjacentHTML("beforeend", product_list);
            console.log(selectDatafunc(selectData));
        }
    };
}



