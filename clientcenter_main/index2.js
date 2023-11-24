
// 검색창 기능

function search() {
    let category = document.querySelector('#category').value.toLowerCase();
    let keyword = document.querySelector('#search_box').value.toLowerCase();

    let search_row = document.querySelectorAll('#faq_table tbody tr');


    for (let row of search_row) {

        if (row.classList.contains('faqcell') && row.style.display === 'none') {
            continue;
        }

        let categoryCell = row.children[1].innerHTML.toLowerCase().trim(); 
        let titleCell = row.children[2].innerHTML.toLowerCase().trim(); 

        if ((category === '' || categoryCell.includes(category)) &&
            (titleCell.includes(keyword))) {
            row.style.display = 'table-row';
        } else {
            row.style.display = 'none';
        }
        if(keyword.length < 2) {
            alert('검색어는 2자이상 입력해주세요.');
            break;  //검색어가 2자 미만일시 alert, 검색 취소
    }
    }
}


//검색할때 enter 키 활성화 (굳이 클릭할 필요x)

let enterpress = document.getElementById("search_box");

    enterpress.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        document.getElementById("search_button").click();
      }
    });

    function changehtml() {
        let hugefactor = document.getElementsByClassName("client_container");
        hugefactor.remove();
    }