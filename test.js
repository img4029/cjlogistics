let storelist = [
    {
        type: "POP_UP",
        location: "서울특별시 영등포구 영중로 9",
        number: "신세계 타임스퀘어점 1F",
        time: "행사 기간 : 23.12.22(금) - 23.01.04(목)",
        lat: "37.51720869306258",
        lng: "126.90565595693148"
    },
    {
        type: "POP_UP",
        location: "서울특별시 서초구 신반포로 176",
        number: "신세계 강남점 4F",
        time: "행사 기간 : 23.12.15(목) - 23.12.28(목)",
        lat: "37.504645733314646",
        lng: "127.00464544401962"
    },
    {
        type: "POP_UP",
        location: "경기도 화성시 동탄역로 160",
        number: "롯데 동탄점 B1F",
        time: "행사 기간 : 23.12.08(금) - 23.12.13(수)",
        lat: "37.20069759419991",
        lng: "127.09769683081083"
    },
    {
        type: "POP_UP",
        location: "서울특별시 동대문구 왕산로 214",
        number: "롯데 청량리점 1F",
        time: "행사 기간 : 23.12.08(금) - 23.12.13(수)",
        lat: "37.58042560021699",
        lng: "127.0487345712157"
    },
    {
        type: "POP_UP",
        location: "충청남도 천안시 동남구 만남로 43",
        number: "신세계 아산점 1F",
        time: "행사 기간 : 23.12.01(금) - 23.12.07(목)",
        lat: "36.81959120842328",
        lng: "127.15583677769483"
    },
    {
        type: "POP_UP",
        location: "경기도 하남시 미사대로 750",
        number: "신세계 스타필드 하남 1F",
        time: "행사 기간 : 23.11.17(금) - 23.11.30(목)",
        lat: "37.54550098919824",
        lng: "127.22403069518288"
    },
    {
        type: "POP_UP",
        location: "대전광역시 유성구 엑스포로 1",
        number: "신세계 대전점 Art&Science 1층",
        time: "행사 기간 : 23.05.15(월) - 23.02.29(목)",
        lat: "36.37532754281779",
        lng: "127.38214308289662"
    },
    {
        type: "POP_UP",
        location: "서울 중구 소공로 63",
        number: "신세계 본점",
        time: "행사 기간 : 23.11.24(금) - 23.11.29(수)",
        lat: "37.560851005734555",
        lng: "126.98104775256265"
    },
    {
        type: "스타필드 고양점 1F",
        location: "경기도 고양시 덕양구 고양대로 1955",
        number: "T. 031-5173-1809",
        time: "OPEN. 10:00 ~ 22:00",
        lat: "37.64682027785693",
        lng: "126.89409592267026"
    },
    {
        type: "신세계 백화점 │본점 신관 2F",
        location: "서울 중구 소공로 63",
        number: "T. 02-310-1635",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.560873527017954",
        lng: "126.98102511054508"
    },
    {
        type: "신세계 백화점 │타임스퀘어점 1F",
        location: "서울특별시 영등포구 영중로 9",
        number: "T. 02-2639-4370",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.517089242466874",
        lng: "126.90557127078831"
    },
    {
        type: "신세계 백화점 │의정부점 3F",
        location: "경기도 의정부시 의정부동 평화로 525",
        number: "T. 031-8082-1525",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.73705773446688",
        lng: "127.0463496890704"
    },
    {
        type: "신세계 백화점 │경기점 1F",
        location: "경기도 용인시 수지구 죽전동 포은대로 536",
        number: "T. 031-695-2247",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.32508201011521",
        lng: "127.107978205053"
    },
    {
        type: "신세계 백화점 │스타필드 하남점 2F",
        location: "경기 하남시 미사대로 750 스타필드 하남",
        number: "T. 031-8072-1658",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.54539624285832",
        lng: "127.22343913149483"
    },
    {
        type: "신세계 백화점 │센텀시티점 1F",
        location: "부산광역시 해운대구 센텀남대로 35",
        number: "T. 051-745-2460",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "35.16888246794983",
        lng: "129.1293429911612"
    },
    {
        type: "갤러리아 백화점 │명품관 WEST B1F",
        location: "서울특별시 강남구 압구정동 압구정로 343",
        number: "T. 02-6905-3378",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.52848178318374",
        lng: "127.04022146900103"
    },
    {
        type: "갤러리아 백화점 │광교점 B1F",
        location: "경기도 수원시 영통구 하동 광교중앙로 124",
        number: "T. 031-5174-7025",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.285298328962405",
        lng: "127.05740713181375"
    },
    {
        type: "갤러리아 백화점 │센터시티점 B1F",
        location: "충청남도 천안시 서북구 공원로 227",
        number: "T. 041-412-9989",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "36.8003744142021",
        lng: "127.10504646435798"
    },
    {
        type: "갤러리아 백화점 │타임월드점 B2F",
        location: "대전광역시 서구 둔산동 대덕대로 211",
        number: "T. 042-720-6041",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "36.35181294931939",
        lng: "127.37812614608737"
    },
    {
        type: "롯데백화점 │ 노원점 2F",
        location: "서울특별시 노원구 동일로 1414",
        number: "T. 02-950-2209",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.65510954585599",
        lng: "127.06100821507594"
    },
    {
        type: "롯데백화점 │ 미아점 1F",
        location: "서울특별시 강북구 미아동 도봉로 62",
        number: "T. 02-944-2137",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.614516230515235",
        lng: "127.03044504550816"
    },
    {
        type: "롯데백화점 │ 관악점 1F",
        location: "서울특별시 관악구 봉천동 729-22",
        number: "T. 02-3289-8173",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.490449224264886",
        lng: "126.92505940295628"
    },
    {
        type: "롯데백화점 │ 잠실점 2F",
        location: "서울특별시 송파구 잠실동 올림픽로 240",
        number: "T. 02-2143-1734",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.511207351800905",
        lng: "127.0979191368291"
    },
    {
        type: "롯데백화점 │ 청량리점 1F",
        location: "서울특별시 동대문구 전농1동 왕산로 214",
        number: "T. 010-7254-2016",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.58041473459076",
        lng: "127.04776377869369"
    },
    {
        type: "롯데백화점 │ 건대스타시티점 1F",
        location: "서울특별시 광진구 능동로 92",
        number: "T. 02-2218-3132",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.53893897745698",
        lng: "127.07132309144207"
    },
    {
        type: "롯데백화점 │ 동탄점 3F",
        location: "경기도 화성시 동탄역로 160",
        number: "T. 031-8036-3783",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.20069758723265",
        lng: "127.09770527891575"
    },
    {
        type: "롯데백화점 │ 일산점 1F",
        location: "경기도 고양시 일산동구 장항동 중앙로 1283",
        number: "T. 031-909-3159",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.66043257127353",
        lng: "126.77203741312458"
    },
    {
        type: "롯데백화점 │ 중동점 1F",
        location: "경기도 부천시 길주로 300",
        number: "T. 032-320-7172",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.502517278080624",
        lng: "126.77519305438751"
    },
    {
        type: "롯데백화점 │ 평촌점 2F",
        location: "경기도 안양시 동안구 호계동 시민대로 180",
        number: "T. 031-8086-9221",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.390274289756576",
        lng: "126.95061243272583"
    },
    {
        type: "롯데백화점 │구리점 1F",
        location: "경기도 구리시 인창동 경춘로 261",
        number: "T. 031-550-7185",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.60269054740614",
        lng: "127.14368507548436"
    },
    {
        type: "롯데백화점 │인천점 2F",
        location: "인천광역시 미추홀구 연남로 35",
        number: "T. 032-242-2214",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.442059660047185",
        lng: "126.70190011667044"
    },
    {
        type: "롯데백화점 │안산점 1F",
        location: "경기도 안산시 단원구 고잔동 고잔1길 12",
        number: "T. 031-412-7786",
        time: "OPEN. 10:30 ~ 20:00",
        lat: "37.31801435546883",
        lng: "126.83438559292878"
    }
];

async function postClientData() {
    try {

        /* 
            await 를 이용한 axios 의 반환된 프라미스는 성공 또는 실패에 대한
            결과를 가지는 프라미스로 then 메서드에서와 같이 콜백 매개변수를
            통한 프라미스 결과를 별도로 받을 필요가 없음.
        */
        const response = await axios.post('http://localhost:3000/storelist', storelist);

        console.log('응답 데이터:', response.data);       // 서버에서 반환한 데이터
        console.log('상태 코드:', response.status);       // HTTP 상태 코드
        console.log('상태 텍스트:', response.statusText); // HTTP 상태 코드 설명
        console.log('응답 헤더:', response.headers);      // 응답 헤더 정보
    } catch (err) {
        console.log(err);
    }
}
for (let i = 0; i < storelist.length; i++) {
    console.log(storelist[i]);
    
}
postClientData();