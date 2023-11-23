'use strict';

let order_gridbox = document.querySelector('.order_gridbox'),
    order_name = document.querySelector('.order_name'),
    clientData1, clientData2;



async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/loginComplete/1');
        const response2 = await axios.get('http://localhost:3000/Orderimg4029');

        clientData1 = response.data;
        clientData2 = response2.data;
        console.log(clientData.hname);
        order_name.innerText = '['+clientData.hname+']';
        order_name.className = "jsSpan";
        console.log(clientData2.length);

        if (clientData2.length == 0) {
            const createDivEmptied = document.createElement('div')
            order_gridbox.appendChild(createDivEmptied);
            order_gridbox.children[6].style.gridArea = '2/1/3/7';
            order_gridbox.children[6].style.fontSize = '12px';
            order_gridbox.children[6].style.color = 'gray';
            order_gridbox.children[6].innerText = '주문내역이 없습니다.';
        }
        for (let i = 0; i < clientData2.length; i++) {
            createDivfc(clientData2[i]);
        }
        
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

function createDivfc(clientData2) {
    const createDiv = new Array(6);
    console.log(clientData2);
    for (let i = 0; i < createDiv.length; i++) {
        createDiv[i] = document.createElement('div')
        order_gridbox.appendChild(createDiv[i]);
        switch (i) {
            case 0:
                createDiv[i].innerText = clientData2.id;
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
                createDiv[i].innerText = "버튼 추가 예정";
                break;
            case 5:
                createDiv[i].innerText = "버튼 추가 예정";
                break;
        }
    }
}

getClientData();