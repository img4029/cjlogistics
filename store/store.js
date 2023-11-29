'use strict';

// db 연결
let storelist;
async function getClientData1() {
    try {
        const response = await axios.get('http://localhost:3000/storelist');

        storelist = response.data;
        // console.log(storelist);
        // 초기 페이지 - 리스트와 마커 생성.
        makelines(storelist);
        clickEvents(storelist);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

// html에서 자리잡은 store_list 구조 설정
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

// ==================================================

// 전역변수 선언부터. 순서 중요.
let Markers = [];
// 마커들을 저장할 배열
let mapContainer = document.getElementById('map');
// 지도를 표시
let mapOption = { 
        center: new kakao.maps.LatLng(37.5611062, 126.9811552), 
        // 지도의 중심좌표 __서울
        level: 10 
        // 지도의 확대 레벨
    };

let map = new kakao.maps.Map(mapContainer, mapOption); 
// 지도 생성

let imageSrc = "./image/main_logo_black.png";
// 마커 이미지 파일
let imageSize = new kakao.maps.Size(50, 50);
// 마커 이미지 크기
let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
// 마커@!@!!!
let openInfowindow = null;
// 창 닫는거 기본값.
let selectedCity = "";
// 선택된 도시.


// ==================================================


// 함수 select 생성.
// select : option 선택 value에 따른 리스트와 마커들.
function select () {
    const option = document.getElementsByTagName('option');
    let arr= [];

    for (let j = 0; j < option.length; j++) {
        if (option[j].selected) {
            if (openInfowindow) {
                openInfowindow.close();
            }
            // 지역 선택시 원래 있던 infowindow 닫기.
            selectedCity = option[j].value;
            // 선택 도시 저장.
            store_list.innerHTML = '';
            // 선택되었을 때, 일단 목록 비우기.
            for (let i = 0; i < storelist.length; i++){
                if ( storelist[i].location.includes(`${option[j].value}`)) {
                    // 만약에 위치에 option_j의 value값이 들어있다면, 
                    // (value값 한글로 설정함.)
                    arr.push(storelist[i]);
                    // 배열 만들기. 
                }
            }
            makelines(arr);
            clickEvents(arr);
            // 배열 출력.
        }
    }
};

// 함수 makelines 생성.
// 리스트 만드는 함수.
function makelines (storelist) {
    store_list.innerHTML = '';

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
}
// 화면을 만들고 기능을 넣어준다는 개념으로. 
// 화면을 엎고 다시 만들면 후에 만들어진 화면에는 기능이 넣어지지 않음.
// 그래서 그 기능들을 함수로 만들어서 다시 호출해서 적용시켜주는 개념. 


// 함수 clickEvents 생성.
// 지도에 마커 생성하고 리스트 클릭시 왼쪽 dot 검게 변하기. (호버 시엔 gray_css)
function clickEvents(storelist) {
    removeMarkers();
    // 새로 클릭하면서 기존 마커들 제거.

    for (let i = 0; i < storelist.length; i++) {
        //마커를 초기화.
        (function (index) {
            // 클로저 이용.
            let marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                // position: new kakao.maps.LatLng(storelist[i].lat, storelist[i].lng), 
                position: new kakao.maps.LatLng(storelist[index].lat, storelist[index].lng), 
                // 마커의 위치 (db에서 위도 경도 연결)
                image : markerImage, 
                // 마커 이미지 
            });

            Markers.push(marker);
        
            let infowindow = new kakao.maps.InfoWindow({
                content: 
                    `<div class ="mapInnerBox">
                        <p>${storelist[i].type}</p>
                        <p>${storelist[i].location}</p>
                        <p>${storelist[i].number}</p>
                        <p>${storelist[i].time}</p>
                    </div>`,
                removable : true
                // 인포윈도우에 표시할 내용
            });
    
            
            kakao.maps.event.addListener(marker, 'click', function() {
                if (openInfowindow) {
                    openInfowindow.close();
                }    
                // 원래 열려있던 위도우 닫고
                // 마커 위에 인포윈도우를 표시
                infowindow.open(map, marker);   
                openInfowindow = infowindow;
            });
            
            const storeAll = document.querySelectorAll(".storeee");
            // 한줄한줄 구조
            const dot = storeAll[i].querySelector(".dot");
    
            storeAll[i].addEventListener('click', () => {
                if (openInfowindow) {
                    openInfowindow.close();
                }    
                infowindow.open(map, marker);   
                openInfowindow = infowindow;
    
                // ===== dot 클릭 검정 및 null 설정 =====
                
                for (let n = 0; n < storelist.length; n++) {
                    const dotBlack = storeAll[n].querySelector(".dot");
                    dotBlack.style.backgroundColor = null;
                }
                dot.style.backgroundColor = 'black';
            });
        })(i);
        //클로저
    }
}

// 함수 removeMarkers 생성.
// 로드시 지도에서 기존 마커 제거할 함수
function removeMarkers() {
    if(Markers){
        // if문 안에 명사 하나만 있다는건 true값이라는 뜻.
        for(let i = 0; i < Markers.length; i++){
            if (Markers[i]){
                Markers[i].setMap(null);
            }
        }
        Markers = [];
    }
}

// 검색창 
// 변수부터 선언

let searchStoreName = document.querySelector(".storename");
let searchButton = document.querySelector(".search_button");

searchButton.addEventListener('click', function() {
    let searchWords = searchStoreName.value;
    searchStore(searchWords);
});

// 함수 searchStore 
// 검색한 키워드가 들어간 매장 찾는 함수.
function searchStore(name) {
    let filteredStore = storelist.filter(store => {
        return store.type.includes(name);
        // filter 이용해서. 검색어가 
    });

    if (filteredStore.length > 0) {
        makelines(filteredStore);
        // 검색해서 filter된 매장 정보 표시
        clickEvents(filteredStore);
        // 검색 매장 위치 마커 표시
    } else {
        alert("검색된 매장이 없습니다.");
        // 없으면 없다고 알려줄거임. 그 검색어 없어!!!
    }
}

getClientData1();

