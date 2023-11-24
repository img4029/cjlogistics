'use strict';

const clientData = {
    name: 'psy',
    clinetNumber: 2,
    address: '수원시 팔당구',
};

async function postClientData() {
    try {

        /* 
            await 를 이용한 axios 의 반환된 프라미스는 성공 또는 실패에 대한
            결과를 가지는 프라미스로 then 메서드에서와 같이 콜백 매개변수를
            통한 프라미스 결과를 별도로 받을 필요가 없음.
        */
        const response = await axios.post('http://localhost:3000/Ordergmrcjs45', clientData);

        console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
        console.log('상태 코드:', response.status);       // HTTP 상태 코드
        console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
        console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
    } catch (err) {
        console.log(err);
    }
}