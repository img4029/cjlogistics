'use strict';

let complete_name1 = document.querySelector('.complete_name1'),
    complete_name2 = document.querySelector('.complete_name2');

let clientData1, myname;

async function getClientData() {
    try {
        /* 
            json 객체의 id 고유식별자를 이용한 URL 매핑이 가능하며,
            이와같은 경로 지정을 통해 json 데이터를 식별.
        */
        const response = await axios.get('http://localhost:3000/profile/');

        clientData1 = response.data;

        myname = clientData1[clientData1.length - 1].hname;
        complete_name1.innerText = myname + "님의";
        complete_name2.innerText = myname + "님의";

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

getClientData();
