
/*==================== 검색창 구현 ====================*/

function search() {
    let keyword = document.querySelector('#search_box').value;

    let search_row = document.querySelectorAll('#faq_table tbody tr');
    let check_tr = 0;

    for (let i = search_row.length - 1; i >= 0; i--) {
        let row = search_row[i];

        if (row.classList.contains('faqcell') && row.style.display === 'none') {
            continue;
        }

        let categoryCell =row.children[1].innerHTML
        let titleCell = row.children[2].innerHTML;

        if (((categoryCell.includes(keyword)|| titleCell.includes(keyword)))) {
            check_tr++;
            row.style.display = 'table-row';
            row.children[0].textContent = check_tr;
        } else {
            row.style.display = 'none';
        }
        
        if (keyword.length < 2) {
            alert('검색어는 2자 이상 입력해주세요.');
            break;  // 검색어가 2자 미만일시 alert, 검색 취소
        }
    }
}

// 검색할 때 enter 키 활성화 (굳이 클릭할 필요x)
let enterpress = document.getElementById("search_box");

enterpress.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("search_button").click();
    }
});





/*==================== 페이지 이동 구현 ====================*/
