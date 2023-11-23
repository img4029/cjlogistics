'use strict'

// let store = [store1, store2];

let storelist = [
    {type : "POP_UP", 
    location: "대전광역시 유성구 엑스포로 1", 
    number: "신세계 대전점 Art&Science 1층", 
    time: "행사 기간 : 23.05.15(월) - 23.02.29(목)"},
    {type: "POP_UP",
    location: "경기도 의정부시 의정부동 평화로 525",
    number: "신세계 의정부점",
    time: "행사 기간 : 23.11.13(월) - 23.11.23(목)"},
    {type: "POP_UP",
    location: "서울 중구 소공로 63",
    number: "신세계 본점",
    time: "행사 기간 : 23.11.24(금) - 23.11.29(수)"},
    {type: "스타필드 고양점 1F",
    location: "경기도 고양시 덕양구 고양대로 1955",
    number: "T. 031-5173-1809",
    time: "OPEN. 10:00 ~ 22:00"},
    {type: "신세계 백화점 │본점 신관 2F",
    location: "서울 중구 소공로 63",
    number: "T. 02-310-1635",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "신세계 백화점 │타임스퀘어점 1F",
    location: "서울특별시 영등포구 영중로 9",
    number: "T. 02-2639-4370",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "신세계 백화점 │의정부점 3F",
    location: "경기도 의정부시 의정부동 평화로 525",
    number: "T. 031-8082-1525",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "신세계 백화점 │경기점 1F",
    location: "경기도 용인시 수지구 죽전동 포은대로 536",
    number: "T. 031-695-2247",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "신세계 백화점 │스타필드 하남점 2F",
    location: "경기 하남시 미사대로 750 스타필드 하남",
    number: "T. 031-8072-1658",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "신세계 백화점 │센텀시티점 1F",
    location: "부산광역시 해운대구 센텀남대로 35",
    number: "T. 051-745-2460",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "갤러리아 백화점 │명품관 WEST B1F",
    location: "서울특별시 강남구 압구정동 압구정로 343",
    number: "T. 02-6905-3378",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "갤러리아 백화점 │광교점 B1F",
    location: "경기도 수원시 영통구 하동 광교중앙로 124",
    number: "T. 031-5174-7025",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "갤러리아 백화점 │센터시티점 B1F",
    location: "충청남도 천안시 서북구 공원로 227",
    number: "T. 041-412-9989",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "갤러리아 백화점 │타임월드점 B2F",
    location: "대전광역시 서구 둔산동 대덕대로 211",
    number: "T. 042-720-6041",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 노원점 2F",
    location: "서울특별시 노원구 동일로 1414",
    number: "T. 02-950-2209",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 미아점 1F",
    location: "서울특별시 강북구 미아동 도봉로 62",
    number: "T. 02-944-2137",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 관악점 1F",
    location: "서울특별시 관악구 봉천동 729-22",
    number: "T. 02-3289-8173",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 잠실점 2F",
    location: "서울특별시 송파구 잠실동 올림픽로 240",
    number: "T. 02-2143-1734",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 청량리점 1F",
    location: "서울특별시 동대문구 전농1동 왕산로 214",
    number: "T. 010-7254-2016",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 건대스타시티점 1F",
    location: "서울특별시 광진구 능동로 92",
    number: "T. 02-2218-3132",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 동탄점 3F",
    location: "경기도 화성시 동탄역로 160",
    number: "T. 031-8036-3783",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 일산점 1F",
    location: "경기도 고양시 일산동구 장항동 중앙로 1283",
    number: "T. 031-909-3159",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 중동점 1F",
    location: "경기도 부천시 길주로 300",
    number: "T. 032-320-7172",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │ 평촌점 2F",
    location: "경기도 안양시 동안구 호계동 시민대로 180",
    number: "T. 031-8086-9221",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │구리점 1F",
    location: "경기도 구리시 인창동 경춘로 261",
    number: "T. 031-550-7185",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │인천점 2F",
    location: "인천광역시 미추홀구 연남로 35",
    number: "T. 032-242-2214",
    time: "OPEN. 10:30 ~ 20:00"},
    {type: "롯데백화점 │안산점 1F",
    location: "경기도 안산시 단원구 고잔동 고잔1길 12",
    number: "T. 031-412-7786",
    time: "OPEN. 10:30 ~ 20:00"},

    // {type: "",
    // location: "",
    // number: "T. ",
    // time: ""},

    // 자료 추가**************
]

const store_list = document.querySelector(".store_list");
const storeee = 
`<div class="storeee" id="storeee">
<p class="dot"></p>
<p class="type"><img class="popup_icon"></p>
<p class="location"></p>
<p class="number"></p>
<p class="time"></p>
<p class="camera"></p>
</div>`


for (let i = 0; i < storelist.length; i++){
    store_list.insertAdjacentHTML("beforeend", storeee);

    const type = document.querySelectorAll(".type");
    const location = document.querySelectorAll(".location");
    const number = document.querySelectorAll(".number");
    const time = document.querySelectorAll(".time");
    const popup_icon = store_list.querySelectorAll(".popup_icon");

    type[i].insertAdjacentHTML("afterbegin", `${storelist[i].type}`);
    location[i].insertAdjacentHTML("beforeend", `${storelist[i].location}`);
    number[i].insertAdjacentHTML("beforeend", `${storelist[i].number}`);
    time[i].insertAdjacentHTML("beforeend", `${storelist[i].time}`);
    
    if (storelist[i].type == "POP_UP") {
        popup_icon[i].src=`./image/popup-icon.png`;
    }
}


// ============================
// ============================
// 지도


