'use strict'

// JSON DB : async axios 로 데이터 가져온 후 productData로 받아주기
let productData;
let searchInfo;
let allData;
let currentPage = 1;
async function getClientData1() {
    try {
        const response = await axios.get('http://localhost:3000/ProductList/1');

        // JSON DB 제품을 담아주는 변수
        productData = response.data;
        // 제품 수량 안내 문구
        searchInfo = document.querySelector(".searchInfo");

        // 카테고리별 제품을 배열로 담아주는 변수
        allData =
            [...productData.perfume,
            ...productData.diffuser,
            ...productData.candle,
            ...productData.homeCare];

        // N개의 제품 안내 문구의 길이 및 문자열 리터럴 활용
        searchInfo.innerText = `${allData.length} 개의 상품이 있습니다`

        // 내림차순 오름차순 함수 호출
        highPriceBtn.addEventListener('click', () => {
            itemLowSort(allData);
        });
        lowPriceBtn.addEventListener('click', () => {
            itemHighSort(allData);
        });

        // 페이지 네이션 함수 호출
        pageNation(allData, currentPage);
        // 검색 함수 호출
        searchKey(allData);


    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};
getClientData1();

// 선택한 제품 상세페이지 정보를 서버에 저장
async function station(product) {
    try {
        console.log(product);
        let response1 = await axios.post('http://localhost:3000/station', product);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

// 1. 정렬 : HTML에 지정한 Class 요소에 대한 참조
let productItem = document.querySelector('.item_container');
const highPriceBtn = document.querySelector('.highPrice');
const lowPriceBtn = document.querySelector('.lowPrice');

// 1) 오름차순 : sort 메서드 활용
function itemHighSort(productData) {

    productItem.innerHTML = '';
    const NewProducts = [...productData];

    NewProducts.sort(function (a, b) {
        return parseFloat(a.price) - parseFloat(b.price);
    });

    pageNation(NewProducts, currentPage);
}

// 2) 내림차순 : sort 메서드 활용
function itemLowSort(productData) {

    productItem.innerHTML = '';

    const NewProducts = [...productData];

    NewProducts.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
    });

    pageNation(NewProducts, currentPage);
}



//  2. 검색 필터 : HTML에 지정한 Class 요소에 대한 참조
let searchKeyword = document.querySelector('#searchBox1');
let searchButton = document.querySelector('.searchButton');
let searchText = document.querySelector('.searchText1');

// 1) 키워드 색인
function searchKey(allData) {

    searchButton.addEventListener('click', () => {
        let selectData = [];
        const keyword = searchKeyword.value

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

// 2) 색인된 키워드 정렬
function selectDatafunc(selectData) {

    productItem.innerHTML = '';

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

// 3. 페이지 네이션

// HTML에 지정한 Class 요소에 대한 참조
productItem = document.querySelector(".item_container");

// 최상위에서 count 변수를 초기화 후 페이지 네이션 함수 실행 : 함수 안에서 초기화 시 페이지 버튼 무한 생성 유의할 것
let count = 0;

function pageNation(allData, currentPage) {

    const pageContent = 9;
    const totalContent = allData.length;
    const totalPage = Math.ceil(totalContent / pageContent);

    productItem.innerHTML = '';

    // 1) 페이지 내 9개의 컨텐츠 노출
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

    // 2) 컨텐츠 클릭 후 상세페이지로 이동 구현
    let products_list = document.querySelectorAll(".products_list");
    for (let i = 0; i < products_list.length; i++) {

        products_list[i].addEventListener('click', (e) => {
            station(allData[i])
            location.href = '../LHN/DetailedPage.html';
        })
    }

    // 3) 페이지 네이션 버튼 요소 생성
    let buttons = document.querySelector(".pageButtons");
    if (count == 0) {

        for (let j = 1; j <= totalPage; j++) {
            let button_list = `<div class="button_list">${j}</div>`
            buttons.insertAdjacentHTML("beforeend", button_list);
            count++;
        }
    }

    // 4) 버튼 클릭 후 페이지 이동 구현
    let button_list = document.querySelectorAll(".button_list");
    for (let k = 0; k < button_list.length; k++) {

        button_list[k].addEventListener('click', (e) => {
            currentPage = e.target.innerText;
            pageNation(allData, currentPage)
        })
    }

};