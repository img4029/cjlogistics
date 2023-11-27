'use strict';

let myData;


async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete');

        myData = response.data;

        addList();
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();



function addList() {
    let outer = document.querySelector('.address_outer');
    let category = ['<input type="checkbox" name="addCheck" id="addCheck">', '배송지', '주소', '연락처', '주문 메세지', '관리'];

    for (let as of category) {
        let arr = [];
        arr.push(as)
        console.log(arr);
    }

}