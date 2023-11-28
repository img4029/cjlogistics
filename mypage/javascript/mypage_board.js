'use strict'


let loginData;
let allArticle;

async function getClientData() {
    try {

        const response = await axios.get('http://localhost:3000/loginComplete');

        loginData = response.data;
        allArticle = loginData[0].article;

        // ===================================================
        let outer = document.querySelector('.mypage_board');
        let articleBoard = outer.querySelector('.board_myarticle');
        let nationOuter = outer.querySelector('.board_nation');
        let needPage = Math.ceil(allArticle.length / 7); // 5
        let wantToPost = 7; //한 페이지에 나타내길 원하는 게시글 수
        // console.log(needPage)
        // ======================================================
        let inCategory = ["번호", "게시일", "제목", "내용"];
        let outCategory = ["번호", "게시일", "제목",];
        let full = [];

        console.log(full);




        for (let i = 0; i < needPage; i++) {
            let AddNation = document.createElement('div');
            nationOuter.appendChild(AddNation);
            nationOuter.setAttribute('class', 'nationBt');
            full.push([]);
            // console.log(full);
            if (i === 0) {
                for (let j = 0; j < wantToPost; j++) {
                    full[i].push(Object.values(allArticle[j]));
                }
            } else {
                for (let j = wantToPost * i; j < ((wantToPost * i)); j++) {
                    full[i].push(Object.values(allArticle[j]));
                }
            }
        }

        // console.log(full);



        // let a = {
        //     number: 8,
        //     date: 20221728,
        //     subject: "매장 위치는 ?",
        //     detail: "강남에 있는 매장 위치 알고 싶습니다."
        // };









    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}
getClientData();



// console.log(needPage);
// 한 페이지에 7개씩 나오게 하고 싶은데,
// 게시글의 총 갯수는 30개 이므로, 4개의 페이지가 나오고 2개가 남으니
// 5번째 페이지에서는 남은 2개를 표시해줘야 한다. (올림)
// function addNation() {
// }






// let maxArticle = (loginData[0].article.length / )

// for (let i = 0; i < loginData[0].article.length; i++) {
//     if (i > )
//         let makeDiv = document.createElement('div');
//     atricleBoard.appendChild(makeDiv);
// }
// 게시글 갯수만큼


// let page = document.createElement('div');
// nationouter.appendChild(page);
