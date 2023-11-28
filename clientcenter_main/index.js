'use strict';

/*==================== 기본적 테이블 요소 ====================*/

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('faq_table').appendChild(table);

/*==================== thead 분류 ====================*/
function createTableHeader(columns) {
    let thead_tr = document.createElement('tr');
    columns.forEach(function (column) {
        let thead_th = document.createElement('th');
        thead_th.textContent = column;
        thead_tr.appendChild(thead_th);
    });
    thead.appendChild(thead_tr);
}

/*==================== tbody 분류 ====================*/
function createTableRow(rowNumber, type, title, question, faqAnswer) {
    let tbody_tr = document.createElement('tr');

    /*===== 각각 번호, 분류, 제목 =====*/
    let numberCell = document.createElement('td');
    numberCell.textContent = rowNumber;
    tbody_tr.appendChild(numberCell);

    let typeCell = document.createElement('td');
    typeCell.textContent = type;
    tbody_tr.appendChild(typeCell);

    let titleCell = document.createElement('td');
    titleCell.textContent = title;
    tbody_tr.appendChild(titleCell);

    tbody.appendChild(tbody_tr);

    /*===== 클릭이벤트 =====*/
    tbody_tr.addEventListener('click', function () {
        FAQ_display(tbody_tr.nextElementSibling);
    });

    /*===== 바로 다음에 Q,A행 2줄 =====*/
    QArow('Q', question);
    QArow('A', faqAnswer);
}

/*==================== Q,A행  ====================*/
function QArow(type, content) {
    let QA_tr = document.createElement('tr');
    QA_tr.classList.add('QAcell');

    let QAheader = document.createElement('td');
    QAheader.textContent = type;
    QA_tr.appendChild(QAheader);

    let QAcontent = document.createElement('td');
    QAcontent.textContent = content;
    QAcontent.colSpan = 2;
    QA_tr.appendChild(QAcontent);

    tbody.appendChild(QA_tr);
    QA_tr.style.display = 'none';
}

/*==================== 클릭이벤트(Q,A 디스플레이) ====================*/

function FAQ_display(faqRow) {
    let Q_next_A;
    if (faqRow && faqRow.classList && faqRow.classList.contains('QAcell')) {
        if (faqRow.style.display === 'table-row') {
            faqRow.style.display = 'none';

            Q_next_A = faqRow.nextElementSibling;
            if (Q_next_A.classList.contains('QAcell')) {
                Q_next_A.style.display = 'none';
            }
            return;
        }
    }

    document.querySelectorAll('.QAcell').forEach(function (QA_flat) {
        if (QA_flat.classList && QA_flat.classList.contains('QAcell')) {
            QA_flat.style.display = 'none';
        }
    });

    while (faqRow && faqRow.classList && faqRow.classList.contains('QAcell')) {
        if (faqRow.style.display == 'table-row') {
            faqRow.style.display = 'none';
            let Q_next_A = faqRow.nextElementSibling;

            if (Q_next_A.classList.contains('QAcell')) {
                Q_next_A.style.display = 'none';
            }
        } else {
            faqRow.style.display = 'table-row';
            let Q_next_A = faqRow.nextElementSibling;

            if (Q_next_A.classList.contains('QAcell')) {
                Q_next_A.style.display = 'table-row';
            }
        }
        faqRow = Q_next_A;
    }
}

/*==================== 여기서부터는 쭉 테이블에 들어갈 내용 ====================*/

createTableHeader(['번호', '분류', '제목']);

/*=====json 데이터 연결=====*/
let settable;

async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/Faq');
        settable = response.data;
        jsontable1();

    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
/*=====연결한 json 데이터로 테이블 구현=====*/
getClientData();

function jsontable() {
    document.querySelector('#faq_table')
    for (let i = 0; i < settable.length; i++);

    document.addEventListener('DOMContentLoaded', function () {

        const tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = '';

        tableContainer.appendChild(table);

    });
}

function jsontable1() {
    for (let i = 0; i < settable.length; i++) {
        createTableRow(settable.length - i, settable[i].type, settable[i].title, settable[i].question, settable[i].faqAnswer);
    }
}