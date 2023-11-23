'use strict'

// let store = [store1, store2];

let storelist = [
    { type : "POP_UP", 
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
]

const store_list = document.querySelector(".store_list");

const storeee = 
`<div class="storeee" id="storeee">
<p class="type"></p>
<p class="location"></p>
<p class="number"></p>
<p class="time"></p>

</div>`


for (let i = 0; i < storelist.length; i++){
    store_list.insertAdjacentHTML("beforeend", storeee);

    const type = document.querySelectorAll(".type");
    const location = document.querySelectorAll(".location");
    const number = document.querySelectorAll(".number");
    const time = document.querySelectorAll(".time");

    type[i].insertAdjacentHTML("beforeend", `${storelist[i].type}`);
    location[i].insertAdjacentHTML("beforeend", `${storelist[i].location}`);
    number[i].insertAdjacentHTML("beforeend", `${storelist[i].number}`);
    time[i].insertAdjacentHTML("beforeend", `${storelist[i].time}`);
    
    

}
