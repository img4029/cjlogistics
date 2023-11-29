'use strict'

// 자바스크립트 제품 더미 불러오기
// 제품 데이터별 객체 생성 : 내부 객체는 이전 파일에

// JSON DB : async axios 로 데이터 가져온 후 productData로 받아주기
let productData;
let searchInfo;
let allData;
let currentPage = 1;
async function getClientData1() {
    try {
        const response = await axios.get('http://localhost:3000/ProductList/1');

        productData = response.data;
        console.log(productData);
        // N개의 제품 안내 문구
        searchInfo = document.querySelector(".searchInfo");

        // ... 사용하여 배열의 구조를 전체 분할하여 하나의 배열로 만들어 perfumeData 변수에 담기
        allData =
            [...productData.perfume,
            ...productData.diffuser,
            ...productData.candle,
            ...productData.homeCare];

        // 함수 참조를 통해 전체 데이터 브라우저에 출력
        // getItem(allData);


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
            itemHighSort(allData);
        });

        pageNation(allData, currentPage);

        searchKey(allData);


    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }

};
getClientData1();

// html 구현

// 1. html 클래스 당겨오기
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

// 2. 제품 가격별 정렬(오름차순, 내림차순) : 제품 모두 삭제 후 정렬 순서대로 신규 삽입
// -1 오름차순(낮은)
const highPriceBtn = document.querySelector('.highPrice');
const lowPriceBtn = document.querySelector('.lowPrice');

function itemHighSort(productData) {
    console.log(productData);

    productItem.innerHTML = '';
    // while (productItem.hasChildNodes()) {
    //     productItem.removeChild(productItem.firstChild);
    // }
    const NewProducts = [...productData];
    console.log(NewProducts);
    NewProducts.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });
    pageNation(NewProducts, currentPage);
    // for (let i = 0; i < NewProducts.length; i++) {
    //     let product_list = `<div class="products_list">
    //         <img src="${NewProducts[i].img}" class="itemImg">
    //         <a href="#" class="itemName">${NewProducts[i].productName}</a>
    //         <a class="itemChar">${NewProducts[i].character}</a>
    //         <a class="itemPrice">${NewProducts[i].price.toLocaleString() + '원'
    //         }</a>
    //     </div>`;
    //     productItem.insertAdjacentHTML("beforeend", product_list);
    // }
    // return NewProducts;
}

// -2 내림차순(높은가격부터~)
function itemLowSort(productData) {
    console.log(productData);

    productItem.innerHTML = '';
    // while (productItem.hasChildNodes()) {
    //     productItem.removeChild(productItem.firstChild);
    // }
    const NewProducts = [...productData];
    NewProducts.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });
    pageNation(NewProducts, currentPage);
    // for (let i = 0; i < NewProducts.length; i++) {
    //     let product_list = `<div class="products_list">
    //         <img src="${NewProducts[i].img}" class="itemImg">
    //         <a href="#" class="itemName">${NewProducts[i].productName}</a>
    //         <a class="itemChar">${NewProducts[i].character}</a>
    //         <a class="itemPrice">${NewProducts[i].price.toLocaleString() + '원'
    //         }</a>
    //     </div>`;
    //     productItem.insertAdjacentHTML("beforeend", product_list);
    // }
    // return NewProducts;
}



//  3. 검색 필터
// 검색하는 키워드의 값을 담아줄 변수

// 위에서 전체 배열에 대한 데이터를 매개변수로 받음

// html 인풋박스 값, 서치 버튼 요소 소환
// 키워드를 찾아서 데이터를 배열 형태로 모음
let searchKeyword = document.querySelector('#searchBox1');
let searchButton = document.querySelector('.searchButton');
let searchText = document.querySelector('.searchText1');

function searchKey(allData) {
    console.log(allData);
    // 새로받을 데이터

    // 클릭 시 입력받은 키워드 배열 선언
    searchButton.addEventListener('click', () => {
        let selectData = [];
        const keyword = searchKeyword.value  // 입력받을 키워드 변수 선언


        for (let i = 0; i < allData.length; i++) {
            if (allData[i].productName.includes(keyword)) {
                selectData = [...selectData, allData[i]];

                searchText.innerText = `${keyword}`
                searchInfo.innerText = `${selectData.length} 개의 상품이 있습니다`
            }
        }
        console.log(selectData);
        selectDatafunc(selectData);

    });
}

function selectDatafunc(selectData) {
    console.log(selectData);

    productItem.innerHTML = '';
    // while (productItem.hasChildNodes()) {
    //     productItem.removeChild(productItem.firstChild);
    // }

    for (let i = 0; i < selectData.length; i++) {
        let changeImg = selectData[i].img
        let product_list = `<div class="products_list">
        <img src="${changeImg}" class="itemImg">
        <a href="#" class="itemName">${selectData[i].productName}</a>
        <a class="itemChar">${selectData[i].character}</a>
        <a class="itemPrice">${selectData[i].price.toLocaleString() + '원'
            }</a>
    </div>`;


        productItem.insertAdjacentHTML("beforeend", product_list);
    }
};



// console.log(selectDatafunc());
//  이거므ㅓ이;ㅁ 불러오질 못하고계속ㄱ오류나

// 2. 페이지 네이션
// 컨텐츠는 기존 컨텐츠 끌어다 쓰면되고, 버튼은 동적으로 만들어야됨
productItem = document.querySelector(".item_container");

// count 변수를 초기에 실행 후 페이지 네이션 함수 실행 후
// if문에서 ==0으로 동일하지 않아 
let count = 0;

function pageNation(allData, currentPage) {


    const pageContent = 9;
    const showbutton = 5;
    const totalContent = allData.length;
    console.log(allData);
    const totalPage = Math.ceil(totalContent / pageContent);
    // for문 안에서 초기화 시 페이지가 계속 이동하니까 유의할것...
    productItem.innerHTML = '';

    for (let i = pageContent * (currentPage - 1); i < (pageContent * (currentPage - 1)) + pageContent; i++) {

        let changeImg = allData[i].img;

        let product_list = `<div class="products_list">
        <img src="${changeImg}" class="itemImg">
        <a href="#" class="itemName">${allData[i].productName}</a>
        <a class="itemChar">${allData[i].character}</a>
        <a class="itemPrice">${allData[i].price.toLocaleString() + '원'}</a>
        </div>`;

        productItem.insertAdjacentHTML("beforeend", product_list);
    };

    let buttons = document.querySelector(".pageButtons");

    if (count == 0) {
        for (let j = 1; j <= totalPage + 1; j++) {
            let button_list = `<div class="button_list">${j}</div>`
            buttons.insertAdjacentHTML("beforeend", button_list);
            count++;
        }
    }
    let button_list = document.querySelectorAll(".button_list");

    for (let k = 0; k < button_list.length; k++) {
        button_list[k].addEventListener('click', (e) => {
            console.log("aaa");
            currentPage = e.target.innerText;

            pageNation(allData, currentPage)
        })
    }

};