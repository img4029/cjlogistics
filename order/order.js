'use strict';

let order_gridbox = document.querySelector('.order_gridbox'),
    order_name = document.querySelector('.order_name'),
    createDiv = new Array(6),
    clientData, clientData2;

order_gridbox.children[6].style.gridArea = '2/1/3/7';
order_gridbox.children[6].style.fontSize = '12px';
order_gridbox.children[6].style.color = 'gray';

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/loginComplete/1');
        const response2 = await axios.get('http://localhost:3000/Orderimg4029');

        clientData = response.data;
        clientData2 = response2.data;
        console.log(clientData.hname);
        order_name.innerText = clientData.hname;
        console.log(clientData);
        for (let i = 0; i < clientData2.length; i++) {
            createDivfc(clientData2[0]);
        }
        
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

function createDivfc() {
    for (let i = 0; i < createDiv.length; i++) {
        console.log("asfasf");
        createDiv[i] = document.createElement('div')
        order_gridbox.appendChild(createDiv[i]);
    }
}

getClientData();