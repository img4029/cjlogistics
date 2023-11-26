'use strict';


// 위아래버튼 클릭시 페이지 내 해당 위치로 이동하는 이벤트

const sectionIds = ['#topbuttons_3', '#bottombuttons_3'];    /* ID 식별자 정의 */
const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id => document.querySelector(`[href="${id}"]`));    /* ID들을 사용하여 요소들을 참조 */

const observer = new IntersectionObserver(callback);     
sections.forEach(section => observer.observe(section)); 
 /* IntersectionObserver 함수는 비동기적으로 실행되기 때문에, scroll 같은 이벤트 기반의 요소 관찰에서 발생하는 렌더링 성능이나 이벤트 연속 호출이 가능 (콜백함수를 호출) */

function callback(entries) {
    const lastEntry = entries[entries.length - 1];
    const isLastEntryVisible = lastEntry.isIntersecting && lastEntry.intersectionRatio >= 0.65;
    const navIndex = isLastEntryVisible ? entries.length - 1 : entries.findIndex(entry => entry.isIntersecting);
    selectNavItem(navIndex);
}   /* ntersectionObserver의 콜백 함수로, 네비게이션아이템을 호출 => [href="${id}"]  */

navItems.forEach((item, index) => {
    item.addEventListener('click', event => {
        event.preventDefault();
        sections[index].scrollIntoView({ behavior: 'smooth' });
    });
});
/* (behavior: 'smooth')을 이용하여 해당 섹션으로 스크롤 이동 */








