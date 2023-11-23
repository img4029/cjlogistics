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
tablecell(2, '마일리지 적립', '마일리지 적립 제도는 어떻게 되나요?');
faqcell('Q', '마일리지 적립 제도는 어떻게 되나요?');
faqcell('A', '마일리지 적립은 구매 금액의 1% 적립이 됩니다.');

tablecell(1, '마일리지 적립', '마일리지 적립금은 어떻게 사용하나요?');
faqcell('Q', '마일리지 적립금은 어떻게 사용하나요?');
faqcell('A', '마일리지 적립금 100점은 현금 100원과 같습니다. 사용 시 1,000원 이상 되어야 사용하실 수 있으며, 5,000원 이 넘는 금액의 적립금은 사용하실 수가 없습니다. 구매 시 구매 금액 합계가 40,000원 이상인 경우 결제 시 사용 가능 합니다.');

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


