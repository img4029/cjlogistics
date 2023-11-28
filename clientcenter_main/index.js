'use strict';

/*==================== 기본적 테이블 요소 ====================*/

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);
document.getElementById('faq_table').appendChild(table);

/*==================== thead 분류 ====================*/

function createTableHeader(num, type, title) {
    let thead_tr = document.createElement('tr');

    let numberCell = document.createElement('th');
    numberCell.textContent = num;
    thead_tr.appendChild(numberCell);

    let typeCell = document.createElement('th');
    typeCell.textContent = type;
    thead_tr.appendChild(typeCell);

    let titleCell = document.createElement('th');
    titleCell.textContent = title;
    thead_tr.appendChild(titleCell);

    thead.appendChild(thead_tr);
}

/*==================== tbody 분류 ====================*/
function createTableRow(rowNumber, type, title, question, faqAnswer) {
    let tbody_tr = document.createElement('tr');

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
        if (faqRow.style.display == 'table-row') {
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

/*==================== json 내용 ====================*/



/*===== json로 테이블 구현 =====*/
let settable;

async function getClientData() {

    const response = await axios.get('http://localhost:3000/Faq');
    settable = response.data;
    document.querySelector('#faq_table')
    createTableHeader(settable[0].num, settable[0].type, settable[0].title);
    for (let i = 1; i < settable.length; i++) {
        createTableRow(settable.length - i, settable[i].type, settable[i].title, settable[i].question, settable[i].faqAnswer);
    }
}
getClientData();

