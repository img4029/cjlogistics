
/*==================== 검색창 구현 ====================*/

function search() {
    let keyword = document.querySelector('#search_box').value;

    let search_row = document.querySelectorAll('#faq_table tbody tr');
    let check_tr = 0;

    for (let i = search_row.length - 1; i >= 0; i--) {
        let row = search_row[i];

        if (row.classList.contains('faqcell') && row.style.display == 'none') {
            continue;
        }

        let titleCell = row.children[2].innerHTML;

        if (((titleCell.includes(keyword)))) {
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
let pressEnter = document.getElementById("search_box");

pressEnter.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        document.getElementById("search_button").click();
    }
});

/*==================== 페이지 이동 구현 ====================*/

function search_clicker(keyword) {
    let search_row = document.querySelectorAll('#faq_table tbody tr');
    let check_tr = 0;

    for (let i = search_row.length - 1; i >= 0; i--) {
        let row = search_row[i];

        if (row.classList.contains('faqcell') && row.style.display == 'none') {
            continue;
        }

        let categoryCell = row.children[1].innerHTML;

        if (categoryCell.includes(keyword)) {
            check_tr++;
            row.style.display = 'table-row';
            row.children[0].textContent = check_tr;
        } else {
            row.style.display = 'none';
        }
    }
}

document.querySelectorAll('.faq_category_5 a li').forEach(function (li) {
    li.addEventListener('click', function () {

        let search_keyword = li.dataset.word; //li에 지정해준 word

        document.querySelectorAll('.faq_category_5 li').forEach(function (li_font) {
            li_font.style.fontWeight = 'normal';
        });

        li.style.fontWeight = 'bold';
        search_clicker(search_keyword);

        
        let page_number = document.getElementById("client_paging");
        if (search_keyword.length < 10) {

            let numbering_control = page_number.querySelectorAll('a:nth-child(odd)');
            numbering_control.forEach(function (numbering_control) {
                
                numbering_control.style.display = 'none';
            });
            window.scrollTo({
                top: 0
            });
            let rest_num = page_number.querySelectorAll('a:nth-child(even)');
            rest_num.forEach(function (rest_num) {
                rest_num.style.color = 'black';
        });
    }
    });
});