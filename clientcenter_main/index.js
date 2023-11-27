'use strict';

// JSON 데이터가 'faqData' 변수에 저장되어 있다고 가정합니다.
const faqData = [
    // ... 여러분의 FAQ 데이터가 여기에 들어갑니다 ...
];
let settable;

async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/Faq');

        settable = response.data;

        add();
        console.log(settable.length);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();


function add() {
    let a = document.querySelector('#faq_table')
    for (let i = 0; i < settable.length;i++)
        a.innerHTML = `
        <table>
            <tr>
        <th>${settable[0].type}</th>
        <td>${settable[0].title}<td>
        <td>${settable[0].question}<td>
        <td>${settable[0].title}<td>
            </tr>
    
        </table>
        `;

}
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

const data = [
    {
        type: '결제/배송',
        title: '택배박스 안에서 향이 나는데 제품이 샌건가요?',
        question: '택배박스 안에서 향이 나는데 제품이 샌건가요?',
        faqAnswer: '배송 시 제품을 감싼 습자지에 올리브 릿지 향을 연출하여 보내드리고 있습니다.'
    },

    {
        type: '결제/배송',
        title: '무통장 계좌번호 알려주세요!',
        question: '무통장 계좌번호 알려주세요!',
        faqAnswer: '03350589301020 기업은행 예금주 : 주식회사디엠코스메틱스코리아'
    },

    {
        type: '교환/반품/환불',
        title: '배송 누락시 어떻게 해야하나요?',
        question: '배송 누락시 어떻게 해야하나요?',
        faqAnswer: '배송 온 물품을 사진 촬영하여 1:1 문의 부탁드립니다.'
    },

    {
        type: '교환/반품/환불',
        title: '교환/반품 신청은 어떻게 하나요?',
        question: '교환/반품 신청은 어떻게 하나요?',
        faqAnswer: '수령일 기준 7일 이내에 교환/반품에 대한 청약철회 의사를 밝혀주시면 처리가 가능합니다. - 교환/반품 절차 : 마이페이지 → 주문내역 → 교환/반품 신청 → 수거기사님 방문예정 - 구매하신 쇼핑몰에서 신청해주시거나, 고객센터(02-466-7941)으로 신청 부탁드립니다. - 구매하신 제품의 AS를 원하는 경우에도 고객센터(02-466-7941)으로 연락 부탁드립니다.'
    },

    {
        type: '기타',
        title: '고객센터의 상담 시간을 알고 싶어요.',
        question: '고객센터의 상담 시간을 알고 싶어요.',
        faqAnswer: '고객센터 전화번호 : 02-466-7941 - 상담 시간 : 평일 오전 10시 - 오후 4시 (점심시간 : 오전 11시 30분 ~ 오후 1시 / 주말, 공휴일 휴무) - 전화 연결이 어려운 경우 게시판에 남겨주시면 확인 후 정성껏 답변드리겠습니다. ※ 문의량이 많을 경우 상담 연결 및 답변이 지연될 수 있습니다.'
    },

    {
        type: '결제/배송',
        title: '배송은 언제 되나요?',
        question: '배송은 언제 되나요?',
        faqAnswer: '영업일 기준 오후 1시 이전 결제 완료 주문건 : 당일 출고됩니다. (일부 상품 제외) - 공휴일의 경우 다음 영업일에 출고됩니다. (출고된 경우 서울/수도권 지역은 대부분 다음날 수령, 지방은 1~3일 이내에 배송됩니다. 따라서 전체 배송 기간은 (업무일 기준) 3일~7일 정도 소요되며, 일부 택배사 사정에 따라 변동될 수 있습니다.) ※ 주문 상품이 재고 부족일 경우 부득이하게 배송 시간은 달라질 수 있는 점 양해 부탁드립니다.'
    },

    {
        type: '결제/배송',
        title: '배송 전 취소 하고 싶어요!',
        question: '배송 전 취소 하고 싶어요!',
        faqAnswer: '주문 당일 취소를 원하시는 고객님께서는 사이트에서 취소 요청을 해주신 뒤, 고객센터(02-466-7941)로 문의하여 취소 접수를 부탁드립니다. - 취소 접수를 하지 않은 건에 대해서는 상품이 출고되어 주문 취소가 불가합니다. 이 경우 부득이하게 반품으로 처리 될 수 있습니다.'
    },

    {
        type: '결제/배송',
        title: '비회원으로 주문이 가능한가요?',
        question: '비회원으로 주문이 가능한가요?',
        faqAnswer: '비회원으로도 주문이 가능합니다. 상품 구매 버튼 클릭후 주문자 정보와 배송 정보를 입력하시면 비회원으로도 주문이'
    },

    {
        type: '결제/배송',
        title: '배송비는 얼마인가요?',
        question: '배송비는 얼마인가요?',
        faqAnswer: '배송비 : 3,000원 (4만원 이상 구매 시 무료배송 / 롯데택배) 교환&반품비는 4만원 이상 구매 시 6,000원, 4만원 미만 구매시 3,000원 입니다.'
    },

    {
        type: '회원가입/정보',
        title: '회원 탈퇴는 어떻게 하나요?',
        question: '회원 탈퇴는 어떻게 하나요?',
        faqAnswer: '[마이페이지>회원정보>회원탈퇴]를 통해 탈퇴하실 수 있습니다.'
    },

    {
        type: '회원가입/정보',
        title: '회원탈퇴 후 재가입을 할 수 있나요?',
        question: '회원탈퇴 후 재가입을 할 수 있나요?',
        faqAnswer: '회원탈퇴 후 14일 이후에 재 가입이 가능 합니다.'
    },

    {
        type: '기타',
        title: '생일 축하 쿠폰은 어떻게 받을 수 있나요?',
        question: '생일 축하 쿠폰은 어떻게 받을 수 있나요?',
        faqAnswer: '회원 정보에 입력하신 생일 기준으로 7일 전 [축하 쿠폰 15% OFF] 자동 발급됩니다.'
    },

    {
        type: '마일리지 적립',
        title: '마일리지 적립 제도는 어떻게 되나요?',
        question: '마일리지 적립 제도는 어떻게 되나요?',
        faqAnswer: '마일리지 적립은 구매 금액의 1% 적립이 됩니다.'
    },

    {
        type: '마일리지 적립',
        title: '마일리지 적립금은 어떻게 사용하나요?',
        question: '마일리지 적립금은 어떻게 사용하나요?',
        faqAnswer: '마일리지 적립금 100점은 현금 100원과 같습니다. 사용 시 1,000원 이상 되어야 사용하실 수 있으며, 5,000원 이 넘는 금액의 적립금은 사용하실 수가 없습니다. 구매 시 구매 금액 합계가 40,000원 이상인 경우 결제 시 사용 가능 합니다.'
    }

];


for (let i = 0; i < data.length; i++) {
    createTableRow(data.length - i, data[i].type, data[i].title, data[i].question, data[i].faqAnswer);
}

const itemsPerPage = 30;
let currentPage = 1;

function displayRows(startIndex, endIndex) {
    const rows = document.querySelectorAll('#faq_table tbody tr');

    rows.forEach((row, index) => {
        if (index >= startIndex && index < endIndex) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
    });

}

function updatePagination() {
    const totalRows = document.querySelectorAll('#faq_table tbody tr:nth-child(3n+1)').length;
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    let numbering_control = document.getElementById("client_paging").querySelectorAll('a:nth-child(n+2)');

    numbering_control.forEach((numbering_control, index) => {
        if (index < totalPages) {
            numbering_control.style.display = 'inline-block';
            numbering_control.textContent = index + 1;

            numbering_control.addEventListener('click', function () {
                currentPage = index + 1;
                const startIndex = (currentPage - 1) * itemsPerPage;
                const endIndex = startIndex + itemsPerPage;
                displayRows(startIndex, endIndex);
            });
        } else {
            numbering_control.style.display = 'none';
        }
    });

    // Initial display
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayRows(startIndex, endIndex);


}

// Call updatePagination after creating table and adding rows
updatePagination();
