'use strict';

let complete_name1 = document.querySelector('.complete_name1'),
    complete_name2 = document.querySelector('.complete_name2');

let clientData1, myname;

// 회원가입후에 생성된 DB(profile 프로퍼티의 가장 마지막 객체)에서 이름을 출력
async function getClientData() {
    try {
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
