'use strict';
let table = document.createElement('table'),
    tbody = document.createElement('tbody'),
    tdClass = ["store_type", "store_place", "store_num", "store_time", "store_icon"];

const popup_1 = ["./image/popup-icon.png",
    "대전광역시 유성구 엑스포로 1",
    "신세계 대전점 Art&Science 1층",
    "행사 기간 : 23.05.15(월) - 23.02.29(목)",
    "./image/camera_icon.png"];
const popup_2 = ["./image/popup-icon.png",
        "경기도 의정부시 의정부동 평화로 525",
        "신세계 의정부점",
        "행사 기간 : 23.11.13(월) - 23.11.23(목)",
        "./image/camera_icon.png"];
const popup_3 = ["./image/popup-icon.png",
        "서울 중구 소공로 63", 
        "신세계 본점", 
        "행사 기간 : 23.11.24(금) - 23.11.29(수)",
        "./image/camera_icon.png"];
const store_goyang = ["스타필드 고양점 1F",
        "경기도 고양시 덕양구 고양대로 1955",
        "T. 031-5173-1809",
        "OPEN. 10:00 ~ 22:00",
        "./image/camera_icon.png"];
const shinsegae = [" 신세계 백화점 │본점 신관 2F",
        "서울 중구 소공로 63",
        "T. 02-310-1635",
        "OPEN. 10:30 ~ 20:00",
        "./image/camera_icon.png"];




function tbodyname(array) {
    let tr = document.createElement('tr')
    document.querySelector("tbody").appendChild(tr);

    for (let i = 0; i < array.length; i++) {
        let td = new Array(array.length);
        let img = new Array(2);

        td[i] = document.createElement('td');
        img[0] = document.createElement('img');
        img[1] = document.createElement('img');
        // 맨 왼쪽 줄 오른쪽줄 반복되는 이미지
        td[i].className = `${tdClass[i]}`;
        // 가운데 자료들 인덱스 만들어줌


        if (i == 0) {
            tr.appendChild(td[i]);
            td[i].innerHTML = `POP_UP`;
            td[i].appendChild(img[0]);
            img[0].src = `${array[i]}`
            //맨 왼쪽줄
        } else if (i < array.length - 1) {
            tr.appendChild(td[i]);
            td[i].innerHTML = `${array[i]}`
            // 가운데 세 줄
        } else {
            tr.appendChild(td[i]);
            td[i].appendChild(img[1]);
            img[1].src = `${array[i]}`
        }
    }
}

document.querySelector(".store_list").appendChild(table);
table.appendChild(tbody);

tbodyname(popup_1);
tbodyname(popup_2);



// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================


// 'use strict';
// let tbody = document.querySelector("tbody");

// let num = ["./image/popup-icon.png", "대전광역시 유성구 엑스포로 1",
//     "신세계 대전점 Art&Science 1층", "행사 기간 : 23.05.15(월) - 23.12.31(일)", "./image/camera_icon.png"]
// let num1 = ["./image/popup-icon.png", "경기도 구리시 인창동 경춘로 261",
//     "롯데 구리점", "행사 기간 : 23.10.27(금) - 23.11.02(목)", "./image/camera_icon.png"]

// function tbodyname(tbody , n1,n2,n3,n4,n5) {
//     tbody.innerHTML += `<tr> 
// <td class="store_type">
// <span>POP_UP</span>
// <span><img src=${n1} alt="popup icon"></span>
// </td>
// <td class="store_place">
// <span>${n2}</span>
// </td>
// <td class="store_num">
// <span>${n3}</span>
// </td>
// <td class="store_time">
// <span>${n4})</span>
// </td>
// <td class="store_icon">
// <img src=${n5} alt="">
// </td>
// </tr>`;
// }
// tbodyname(tbody, num[0], num[1], num[2], num[3], num[4]);
// tbodyname(tbody, num1[0], num1[1], num1[2], num1[3], num1[4]);

// adjskdg
// ================================================

// var table = document.getElementsByClassName('store_list');

// ===============================



// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);


// ==========================================

// document.getElementsByClassName('store_list').appendChild(table);

// let store = [popup_1, popup_2, popup_3, store_goyang];

// let popup_1 = [
//     ['POP_UP'],
//     ['대전광역시 유성구 엑스포로 1'],
//     ['신세계 대전점 Art&Science 1층'],
//     ['행사 기간 : 23.05.15(월) - 23.02.29(목)']
// ];

// ===========================================

// let popup_1 = {
//     type: 'POP_UP',
//     location: '대전광역시 유성구 엑스포로 1',
//     number: '신세계 대전점 Art&Science 1층',
//     time: '행사 기간 : 23.05.15(월) - 23.02.29(목)'
// }
// let popup_2 = {
    // type: 'POP_UP',
    // location: '경기도 의정부시 의정부동 평화로 525',
    // number: '신세계 의정부점',
    // time: '행사 기간 : 23.11.13(월) - 23.11.23(목)'
// }
// let popup_3 = {
//     type: 'POP_UP',
//     location: '서울 중구 소공로 63',
//     number: '신세계 본점',
//     time: '행사 기간 : 23.11.24(금) - 23.11.29(수)'
// }
// let store_goyang = {
//     type: '스타필드 고양점 1F',
//     location: '경기도 고양시 덕양구 고양대로 1955',
//     number: 'T. 031-5173-1809',
//     time: 'OPEN. 10:00 ~ 22:00'
// }


// =========================================

// document.write('<table>');

// for (let i = 0; i <store.length; i++){
//     document.write('<tr>');
//     for (let j = 0; j <= 5; j++) {
//         document.write('<td>');
//         document.write("store[i][j]");
//         document.write("<td/>");
        
//     }

//     document.write('</tr>');
// }

// document.write('</table>');




// ==========================================

// for(var i = 0; i < 20; i++){
//     html += "<tr>";
//     for(var c = 1; c <= 5; c++){
//         html += "<td>" + c + "<td/>"
//     }
//     html += "<td/>"
// }
// document.write('</table>');

// table.innerHTML = html;


// 스토어 리스트==============================


// for (let i = 0; i <store.length; i++){
//     document.write('<tr>');
    
//     document.write('</tr>');
// }

// document.write('</table>');




// ==================
// ==================
// ==================
// ==================
// ==================
// ==================
// ==================
// ==================


// 지도

{/* <div id="map" style="width:500px;height:600px;"></div>
<script>
var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
    mapOption = { 
        center: new kakao.maps.LatLng(37.566, 126.9944), // 지도의 중심좌표
        level: 10 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
// 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
    {
        content: '<div>POP_UP 1</div>', 
        latlng: new kakao.maps.LatLng(127.3819045, 36.3751677)
    },
    {
        content: '<div>생태연못</div>', 
        latlng: new kakao.maps.LatLng(33.450936, 126.569477)
    },
    {
        content: '<div>텃밭</div>', 
        latlng: new kakao.maps.LatLng(33.450879, 126.569940)
    },
    {
        content: '<div>근린공원</div>',
        latlng: new kakao.maps.LatLng(33.451393, 126.570738)
    }
];

for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
    // 이벤트 리스너로는 클로저를 만들어 등록합니다 
    // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
    return function() {
        infowindow.open(map, marker);
    };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
    return function() {
        infowindow.close();
    };
}

/* 아래와 같이도 할 수 있습니다 */
/*
for (var i = 0; i < positions.length; i ++) {
    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng // 마커의 위치
    });

    // 마커에 표시할 인포윈도우를 생성합니다 
    var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content // 인포윈도우에 표시할 내용
    });

    // 마커에 이벤트를 등록하는 함수 만들고 즉시 호출하여 클로저를 만듭니다
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
    (function(marker, infowindow) {
        // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시합니다 
        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.open(map, marker);
        });

        // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫습니다
        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });
    })(marker, infowindow);
}
*/
</script> */}