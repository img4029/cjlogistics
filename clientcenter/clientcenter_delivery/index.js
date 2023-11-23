'use strict';

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('faq_table').appendChild(table);

let row_clicker;

function tablecell(column1, column2, column3) {
    let row = document.createElement('tr');

    let heading1 = document.createElement('td');
    heading1.innerHTML = column1;

    let heading2 = document.createElement('td');
    heading2.innerHTML = column2;

    let heading3 = document.createElement('td');
    heading3.innerHTML = column3;

    heading1.classList.add('clicker');
    heading2.classList.add('clicker');
    heading3.classList.add('clicker');

    row.appendChild(heading1);
    row.appendChild(heading2);
    row.appendChild(heading3);

    tbody.appendChild(row);

    row.addEventListener('click', function() {
        if (row_clicker) {
            row_clicker.style.display = 'table-row';

            // 현재 행의 다음 행과 다음 다음 행 모두 감추기
            let next_Row = row_clicker.nextElementSibling;
            while (next_Row && next_Row.classList.contains('faq-cell')) {
                next_Row.style.display = 'none';
                next_Row = next_Row.nextElementSibling;
            }
        }

        // 현재 클릭한 행의 다음 행에 있는 faqcell을 보여주기
        row_clicker = row.nextElementSibling;
        while (row_clicker && row_clicker.classList.contains('faq-cell')) {
            row_clicker.style.display = row_clicker.style.display === 'table-row' ? 'none' : 'table-row';
            row_clicker = row_clicker.nextElementSibling;

        }
    });
}

function faqcell(column4, column5) {
    let row = document.createElement('tr');
    row.classList.add('faq-cell');

    let faction1 = document.createElement('td');
    faction1.innerHTML = column4;

    let faction2 = document.createElement('td');
    faction2.innerHTML = column5;
    faction2.colSpan = 2;

    row.appendChild(faction1);
    row.appendChild(faction2);

    tbody.appendChild(row);
    row.style.display = 'none';
    return row;
}

tablecell('번호', '분류', '제목');
tablecell(6, '결제/배송', '택배박스 안에서 향이 나는데 제품이 샌건가요?');
faqcell('Q', '택배박스 안에서 향이 나는데 제품이 샌건가요?');
faqcell('A', '배송 시 제품을 감싼 습자지에 올리브 릿지 향을 연출하여 보내드리고 있습니다.');

tablecell(5, '결제/배송', '무통장 계좌번호 알려주세요!');
faqcell('Q', '무통장 계좌번호 알려주세요!');
faqcell('A', '03350589301020 기업은행 예금주 : 주식회사디엠코스메틱스코리아');

tablecell(4, '결제/배송', '배송은 언제 되나요?');
faqcell('Q', '배송은 언제 되나요?');
faqcell('A', ' 영업일 기준 오후 1시 이전 결제 완료 주문건 : 당일 출고됩니다. (일부 상품 제외) - 공휴일의 경우 다음 영업일에 출고됩니다. (출고된 경우 서울/수도권 지역은 대부분 다음날 수령, 지방은 1~3일 이내에 배송됩니다. 따라서 전체 배송 기간은 (업무일 기준) 3일~7일 정도 소요되며, 일부 택배사 사정에 따라 변동될 수 있습니다.) ※ 주문 상품이 재고 부족일 경우 부득이하게 배송 시간은 달라질 수 있는 점 양해 부탁드립니다.');

tablecell(3, '결제/배송', '배송 전 취소 하고 싶어요!');
faqcell('Q', '배송 전 취소 하고 싶어요!');
faqcell('A', '주문 당일 취소를 원하시는 고객님께서는 사이트에서 취소 요청을 해주신 뒤, 고객센터(02-466-7941)로 문의하여 취소 접수를 부탁드립니다. - 취소 접수를 하지 않은 건에 대해서는 상품이 출고되어 주문 취소가 불가합니다. 이 경우 부득이하게 반품으로 처리 될 수 있습니다.');

tablecell(2, '결제/배송', '비회원으로 주문이 가능한가요?');
faqcell('Q', '비회원으로 주문이 가능한가요?');
faqcell('A', '비회원으로 주문이 가능한가요?');

tablecell(1, '결제/배송', '	배송비는 얼마인가요?');
faqcell('Q', '	배송비는 얼마인가요?');
faqcell('A', '배송비 : 3,000원 (4만원 이상 구매 시 무료배송 / 롯데택배) 교환&반품비는 4만원 이상 구매 시 6,000원, 4만원 미만 구매시 3,000원 입니다.');

function search() {
    let category = document.querySelector('#category').value.toLowerCase();
    let keyword = document.querySelector('#search_box').value.toLowerCase();

    // tbody 요소에 접근하여 자식 요소들을 가져옵니다.
    let search_row = document.querySelectorAll('#faq_table tbody tr');

    // 모든 행을 순회하면서 필터링합니다.
    for (let row of search_row) {
        // 행이 faq-cell 클래스를 가지고 있으면서 style.display가 'none'이면 넘어갑니다.
        if (row.classList.contains('faq-cell') && row.style.display === 'none') {
            continue;
        }

        let categoryCell = row.children[1].innerHTML.toLowerCase().trim(); // 카테고리 열
        let titleCell = row.children[2].innerHTML.toLowerCase().trim(); // 제목 열

        // 선택한 카테고리가 "전체검색"이거나 현재 행의 카테고리와 일치하는 경우
        // 그리고 키워드가 제목에 완전히 포함되어 있는 경우에만 해당 행을 보여줍니다.
        if ((category === '' || categoryCell.includes(category)) &&
            (titleCell.includes(keyword))) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    }
}


