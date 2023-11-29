'use strict';


let ihn;
async function getClientData() {
    try {

        let response1 = await axios.get('http://localhost:3000/ProductList');

        ihn = response1.data;

        // =====================================================================================

        frame(ihn);
    
        console.log(ihn)
        console.log(ihn[0].perfume)


    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();


function frame(ihn) {
    let outer = document.querySelector('.oilpage_3'); // 부모속성 위치
    let category = ["img", "name", "detail", "cost"]; // 카테고리 갯수 이용
    for (let i = 0; i < ihn[0].perfume.length; i++) { // 상품갯수만큼  ul
        let makeUl = document.createElement('ul'); // ul 넣는 행위 변수에 넣기
        makeUl.setAttribute('class', 'pagelist_3'); // 클래스 지정하기
        outer.appendChild(makeUl); // 부모속성에 ul 넣기
        for (let j = 0; j < category.length; j++) {
            if (Object.keys(ihn[0].perfume[i])[j] === 'img') {
                // 속성이 img 라면~ 조건 걸어주기
                let makeLi = document.createElement('li');
                makeUl.appendChild(makeLi);
                let makeimg = document.createElement('img');
                makeLi.appendChild(makeimg);

                makeimg.src = ihn[0].perfume[i].img
            } else if (Object.keys(ihn[0].perfume[i])[j] === 'productName') {
                // 속성이 상품이름 이 라면~ 조건 걸어주기
                let makeLi = document.createElement('li');
                document.createElement('li');
                makeUl.appendChild(makeLi);

                makeLi.innerText = ihn[0].perfume[i].productName;
            } else if (Object.keys(ihn[0].perfume[i])[j] === 'character') {
                let makeLi = document.createElement('li');
                document.createElement('li');
                makeUl.appendChild(makeLi);

                makeLi.innerText = ihn[0].perfume[i].character;
            } else {
                let makeLi = document.createElement('li');
                document.createElement('li');
                makeUl.appendChild(makeLi);

                makeLi.innerText = `${ihn[0].perfume[i].price.toLocaleString()} 원`;
                // innerText = 안에 글씨넣어주기
            }
        }
        makeUl.addEventListener('click',(e)=>{
            station(ihn[0].perfume[i])
            console.log(e.target);
            location.href = './DetailedPage.html';
/* 
        highprice.addEventListener('click', () => Sort(productData, 'a-b'));
        rowprice.addEventListener('click', () => Sort(productData, 'b-a')); */
        })
    }
}

async function station(ihn) {
    try {
        console.log(ihn);
        let response1 = await axios.post('http://localhost:3000/station',ihn);

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

// 위아래버튼 클릭시 페이지 내 해당 위치로 이동하는 이벤트

const sectionIds = ['#topbuttons_3', '#bottombuttons_3'];    /* ID 식별자 정의 */
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));    /* ID들을 사용하여 요소들을 참조 */

const observer = new IntersectionObserver(callback);
sections.forEach(section => observer.observe(section));
/* IntersectionObserver 함수는 비동기적으로 실행되기 때문에, scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출이 가능 (콜백함수를 호출) */

function callback(entries) {
    const lastEntry = entries[entries.length - 1];
    const isLastEntryVisible = lastEntry.isIntersecting && lastEntry.intersectionRatio >= 0.75;
    const navIndex = isLastEntryVisible ? entries.length - 1 : entries.findIndex(entry => entry.isIntersecting);
   /*  selectNavItem(navIndex); */
}   /* ntersectionObserver의 콜백 함수로, 네비게이션아이템을 호출 => [href="${id}"]  */

navItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});
/* (behavior: 'smooth')을 이용하여 해당 섹션으로 스크롤 이동 */







