'use strict';

let orderSub_gridbox = document.querySelector('.orderSub_gridbox'),
    order_name = document.querySelector('.order_name'),
    clientData1, clientData2;

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/ProductList');
        clientData1 = response.data;
        console.log(clientData1);

        for (let i = 0; i < clientData1.length; i++) {
            console.log(clientData1[i]);
            createDivfc(clientData1[i]);
        }
        
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};
async function deleteClientData() {
    try {
        for (let i = 0; i < clientData1.length; i++) {
            console.log("asdf");
            const response = await axios.delete(`http://localhost:3000/ProductList/${i+1}`);
        }
        
        
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};
function createDivfc(clientData1) {
    console.log(clientData1);
    const createDiv = new Array(5);
    for (let i = 0 ; i < createDiv.length; i++) {
        createDiv[i] = document.createElement('div');
        orderSub_gridbox.appendChild(createDiv[i]);
        switch (i) {
            case 0:
                const createImg = document.createElement('img');
                createDiv[i].appendChild(createImg);
                createImg.src = clientData1.img;
                createImg.style.width = '70%'
                break;
            case 1:
                const createText1 = document.createElement('p');
                const createText2 = document.createElement('p');
                createDiv[i].appendChild(createText1);
                createDiv[i].appendChild(createText2);
                createText1.innerText = clientData1.productName;
                createText2.innerText = clientData1.options;
                createText1.style.lineHeight = '25px'
                createText2.style.fontSize = '12px'
                createText2.style.lineHeight = '25px'
                createText2.style.color = 'gray'
                createDiv[i].style.flexDirection = 'column';
                createDiv[i].style.alignItems= 'start';
                break;
            case 2:
                const createText3 = document.createElement('p');
                const createText4 = document.createElement('p');
                createDiv[i].appendChild(createText3);
                createDiv[i].appendChild(createText4);
                createText3.innerText = '상품 금액:';
                createText4.innerText = clientData1.amountPayment + ' 원';
                createDiv[i].style.justifyContent = 'space-between'
                createDiv[i].style.padding = '0 10px'
                break;
            case 3:
                createDiv[i].innerText = "입금전 취소 시스템";
                createDiv[i].style.fontSize = '14px'
                createDiv[i].style.color = 'blue'
                createDiv[i].style.fontWeight = 'bold'
                createDiv[i].style.cursor = "pointer"
                break;
            case 4:
                const createButton1 = document.createElement('button');
                const createButton2 = document.createElement('button');
                createDiv[i].appendChild(createButton1);
                createDiv[i].appendChild(createButton2);
                createDiv[i].style.flexDirection = 'column';
                createDiv[i].style.gap = "2px"
                createButton1.innerText = "평점 후기 작성"
                createButton2.innerText = "상품 후기 작성"
                createButton1.style.cursor = "pointer"
                createButton2.style.cursor = "pointer"
                break;
        }
    }
}

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    deleteClientData();
});

getClientData();