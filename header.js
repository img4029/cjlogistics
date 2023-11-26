let testing = document.querySelectorAll('.testing'),
    testing_logo = document.querySelector('.testing_logo'),
    shopping_basket = document.querySelector('.shopping_basket'),
    menu_list_main = document.querySelectorAll('.menu_list_main>ul>li>a'),
    menu_list_sub = document.querySelectorAll('.menu_list_sub>ul>li>a'),
    clientData,
    ShoppingBasketData,
    jyh = document.querySelector('.jyh'),
    lhn = document.querySelector('.lhn'),
    ksb = document.querySelector('.ksb'),
    kso = document.querySelector('.kso'),
    jgj = document.querySelector('.jgj'),
    img = document.querySelector('.img'),
    header_acide = document.querySelector('.header_acide');
    loginComplete =
    {
        hname: "",
        hid: "",
        hpw: "",
        birthDate: "",
        sx: "",
        zip: "",
        har: "",
        dar: "",
        darCb: "",
        hpn: "",
        hem: "",
        cpn: "",
        car: "",
        cdar: "",
        hsp: "",
        img: "",
        totalAmountPayment: "", //총 결제금액
        reserve: "", //적립금
        coupon: "", //쿠폰 
        ShoppingBasket: "",
        Order: "",
        lastestOrder: "", //최근 주문정보
        lastestPosted: "", //최근 등록 게시글
        wishList: "" //관심 상품 정보
    };
var path = window.location.pathname,
    herfChange;
let createBack = document.createElement('div');
header_acide.appendChild(createBack);
createBack.className = "create_back";
createBack.addEventListener('click', change);

function change() {
    let menuList = document.querySelector('.menu_list'),
        menuIcon1 = document.querySelector('.menu_icon1'),
        menuIcon2 = document.querySelector('.menu_icon2'),
        menuIcon3 = document.querySelector('.menu_icon3'),
        menu_icon_box = document.querySelector('.menu_icon_box');
    // createBack.style.transition = "background 1s ease-out";
    if (menu_icon_box.id == "menuBtn1") {

        menuList.style.animation = "slidein 0.7s";
        menuList.style.animationFillMode = "forwards";

        menuIcon1.style.animation = "animate-line-1 1s";
        menuIcon1.style.animationFillMode = "forwards";

        menuIcon2.style.animation = "animate-line-2 1s";
        menuIcon2.style.animationFillMode = "forwards";

        menuIcon3.style.animation = "animate-line-3 1s";
        menuIcon3.style.animationFillMode = "forwards";

        menu_icon_box.id = "menuBtn2";

        createBack.style.animation = "create_back_in 1s"
        createBack.style.display = "block"
    } else {
        menuList.style.animation = "slideout 0.7s";

        menuIcon1.style.animation = "animate-line-4 1s";

        menuIcon2.style.animation = "animate-line-5 1s";

        menuIcon3.style.animation = "animate-line-6 1s";

        menu_icon_box.id = "menuBtn1";

        createBack.style.animation = "create_back_out 1s"
        setTimeout(() => { createBack.style.display = "none" }, 990);
        
    }
}
async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/loginComplete/1');

        clientData = response.data;
        loginCheck(clientData);
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

if (path === '/index.html') {
    console.log('나는 메인이다');
    herfChange = './';
} else {
    herfChange = '../';
}
const
    mainLink = [
        "", "", "", "", "", ""
    ],
    loginLink = [ //로그인 후
        `${herfChange}main/index.html`,
        `${herfChange}mypage/mypage_Edit.html`,
        `${herfChange}mypage/mypage.html`,
        `${herfChange}clientcenter_main/index.html`,
        `${herfChange}order/order.html`,
        `${herfChange}jgj_daniel/store.html`,
        `${herfChange}event/event.html`,
        `${herfChange}brandstory/brandstory.html`
    ],
    logioutLink = [ //로그인 전
        `${herfChange}member/member.html`,
        `${herfChange}idinfo/idinfo.html`,
        `${herfChange}member/member.html`,
        `${herfChange}clientcenter_main/index.html`,
        `${herfChange}member/member.html`,
        `${herfChange}jgj_daniel/store.html`,
        `${herfChange}event/event.html`,
        `${herfChange}brandstory/brandstory.html`
    ];


function loginCheck(clientData) {
    // console.log(menu_list_main);
    // console.log(menu_list_sub);
    // console.log(loginLink);
    // console.log(logioutLink);
    for (let i = 0; i < menu_list_main.length; i++) {
        menu_list_main[i].href = mainLink[i]
    }
    
    if (clientData.hname != '') {
        testing[0].addEventListener('click', () => {
            const response = axios.put('http://localhost:3000/loginComplete/1', loginComplete);
        });
        for (let i = 0; i < menu_list_sub.length; i++) {
            menu_list_sub[i].href = loginLink[i]
        }

        testing[0].innerText = `로그아웃`
        testing[1].innerText = `회원정보`
        testing_logo.href = ``;
        shopping_basket.innerText = clientData.ShoppingBasket.length;
    } else {
        for (let i = 0; i < menu_list_sub.length; i++) {
            menu_list_sub[i].href = logioutLink[i]
        }

        testing[0].innerText = `로그인`
        testing[1].innerText = `회원가입`
        testing_logo.href = `${herfChange}member/member.html`;
        shopping_basket.innerText = 0;
    }
};
function addFont() {
    const head = document.querySelector('head');
    head.innerHTML += `
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Noto+Sans+KR&family=Nunito+Sans:opsz@6..12&display=swap" rel="stylesheet">
    `;
}


console.log(path);

getClientData();
addFont();
jyh.innerText += ":";
lhn.innerText += ":";
ksb.innerText += ":";
kso.innerText += ":";
jgj.innerText += ":";
img.innerText += ": 메뉴창, 로그인, 회원가입, 아이디 비밀번호 찾기, 서버 연동, footer";