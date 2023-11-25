'use strict';

let order_gridbox = document.querySelector('.order_gridbox'),
    order_box = document.querySelector('.order_box'),
    order_name = document.querySelector('.order_name'),
    clientData1, clientData2;

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/loginComplete/1');
        clientData1 = response.data;
        console.log(clientData1.hname);
        // const response2 = await axios.get(`http://localhost:3000/Order${clientData1.hid}`);
        // clientData2 = clientData1.Order;

        order_name.innerText = '[' + clientData1.hname + ']';
        order_name.className = "jsSpan";
        console.log(clientData1.Order.length);

        if (clientData1.Order.length == 0) {
            const createDivEmptied = document.createElement('div')
            order_gridbox.appendChild(createDivEmptied);
            order_gridbox.children[6].style.gridArea = '2/1/3/7';
            order_gridbox.children[6].style.fontSize = '12px';
            order_gridbox.children[6].style.color = 'gray';
            order_gridbox.children[6].innerText = '주문내역이 없습니다.';
        }
        for (let i = 0; i < clientData1.Order.length; i++) {
            createDivfc(clientData1.Order[i], i + 1);
        }

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

function createDivfc(clientData2, count) {
    const createDiv = new Array(6);
    console.log(clientData2);
    for (let i = 0, j = 0; i < createDiv.length; i++) {
        createDiv[i] = document.createElement('div');
        order_gridbox.appendChild(createDiv[i]);
        switch (i) {
            case 0:
                createDiv[i].innerText = count;
                break;
            case 1:
                createDiv[i].innerText = clientData2.orderDate;
                break;
            case 2:
                createDiv[i].innerText = clientData2.productName;
                break;
            case 3:
                createDiv[i].innerText = clientData2.amountPayment;
                break;
            case 4:
                const createButton = document.createElement('button');
                createDiv[i].appendChild(createButton);
                createButton.className = "createButton";
                createButton.innerText = "VIEW";
                createButton.style.cursor = "pointer";
                createButton.addEventListener('click', () => {
                    // putClientData(clientData2.ProductList);
                    changeDiv(clientData2.ProductList);
                });
                break;
            default:
                const createButton2 = document.createElement('button');
                createDiv[i].appendChild(createButton2);
                createButton2.className = "createButton";
                createButton2.innerText = "미구현";
                break;
        }
    }
}
function changeDiv(ProductList) {
    console.log(ProductList);
    order_box.innerHTML = `
                <h3>주문 정보</h3>
                <div class="orderSub_box">
                    <div>
                        <span>주문일자</span>
                        <span>2023.11.16</span>
                    </div>
                    <div></div>
                    <div>
                        <span>주문번호</span>
                        <span>20231106110121-8178227352</span>
                    </div>
                </div>
                <h3>상품 정보</h3>
                <div class="orderSub_gridbox">
                    <div>배송번호</div>
                </div>`
    for (let i = 0; i < ProductList.length; i++) {
        createDivfc2(ProductList[i]);
    }
}
function createDivfc2(ProductList) {
    let create1, create2;
    const createDiv = new Array(5),
        orderSub_gridbox = document.querySelector('.orderSub_gridbox');

    console.log(ProductList);
    for (let i = 0; i < createDiv.length; i++) {
        createDiv[i] = document.createElement('div');
        orderSub_gridbox.appendChild(createDiv[i]);
        switch (i) {
            case 0:
                create1 = document.createElement('img');
                createDiv[i].appendChild(create1);
                create1.src = ProductList.img;
                create1.style.width = '70%'
                break;
            case 1:
                create1 = document.createElement('p');
                create2 = document.createElement('p');
                createDiv[i].appendChild(create1);
                createDiv[i].appendChild(create2);
                if (ProductList.Gifts === '(사은품)') create1.innerText = ProductList.Gifts;
                create1.innerText += ProductList.productName;
                create2.innerText = ProductList.options;
                create1.style.lineHeight = '25px'
                create2.style.fontSize = '12px'
                create2.style.lineHeight = '25px'
                create2.style.color = 'gray'
                createDiv[i].style.flexDirection = 'column';
                createDiv[i].style.alignItems = 'start';
                break;
            case 2:
                if (ProductList.Gifts === '(사은품)') {
                    createDiv[i].gridColumn = 'span 2'
                } else {
                    create1 = document.createElement('p');
                    create2 = document.createElement('p');
                    createDiv[i].appendChild(create1);
                    createDiv[i].appendChild(create2);
                    create1.innerText = '상품 금액:';
                    create2.innerText = ProductList.amountPayment + ' 원';
                    createDiv[i].style.justifyContent = 'space-between'
                    createDiv[i].style.padding = '0 10px'
                }
                break;
            case 3:
                createDiv[i].innerText = "취소 시스템(미구현)";
                createDiv[i].style.fontSize = '14px'
                createDiv[i].style.color = 'blue'
                createDiv[i].style.fontWeight = 'bold'
                createDiv[i].style.cursor = "pointer"
                break;
            case 4:
                create1 = document.createElement('button');
                create2 = document.createElement('button');
                createDiv[i].appendChild(create1);
                createDiv[i].appendChild(create2);
                createDiv[i].style.flexDirection = 'column';
                createDiv[i].style.gap = "2px"
                create1.innerText = "평점 후기 작성"
                create2.innerText = "상품 후기 작성"
                create1.style.cursor = "pointer"
                create2.style.cursor = "pointer"
                break;
        }
    }
}
getClientData();