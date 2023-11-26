let testing = document.querySelectorAll('.testing'),
    testing_logo = document.querySelector('.testing_logo'),
    shopping_basket = document.querySelector('.shopping_basket'),
    clientData,
    ShoppingBasketData,
    jyh = document.querySelector('.jyh'),
    lhn = document.querySelector('.lhn'),
    ksb = document.querySelector('.ksb'),
    kso = document.querySelector('.kso'),
    jgj = document.querySelector('.jgj'),
    img = document.querySelector('.img'),
    herfChange,
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
        Order: ""
    };
var path = window.location.pathname;

function change() {
    let menuList = document.querySelector('.menu_list'),
        menuIcon1 = document.querySelector('.menu_icon1'),
        menuIcon2 = document.querySelector('.menu_icon2'),
        menuIcon3 = document.querySelector('.menu_icon3'),
        menu_icon_box = document.querySelector('.menu_icon_box');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    console.log(menu_icon_box.id);
=======
>>>>>>> JGJ
=======
>>>>>>> JYH
=======
>>>>>>> KSB
=======
>>>>>>> KSO
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
    } else {
        menuList.style.animation = "slideout 0.7s";

        menuIcon1.style.animation = "animate-line-4 1s";

        menuIcon2.style.animation = "animate-line-5 1s";

        menuIcon3.style.animation = "animate-line-6 1s";

        menu_icon_box.id = "menuBtn1";
    }
}
async function getClientData() {
    try {
        const response = await axios.get('http://localhost:3000/loginComplete/1');

        clientData = response.data;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> KSB
=======
>>>>>>> KSO
        loginCheck();
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};
async function getShoppingBasketData(id) {
    try {
        const response = await axios.get(`http://localhost:3000/ShoppingBasket${id}`);

        ShoppingBasketData = response.data;
        shopping_basket.innerText = ShoppingBasketData.length;
=======
        loginCheck(clientData);
>>>>>>> JYH
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

<<<<<<< HEAD
function loginCheck() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
function loginCheck(clientData) {
>>>>>>> JYH
=======
>>>>>>> KSB
=======
>>>>>>> KSO
    if (clientData.hname != '') {
        console.log(clientData.hname);
        testing[0].addEventListener('click', () => {
            const response = axios.put('http://localhost:3000/loginComplete/1', loginComplete);
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> KSB
=======
>>>>>>> KSO
        testing[0].href = "../main/index.html";
        testing[0].innerText = "로그아웃"
        testing[1].href = "";
        testing[1].innerText = "회원정보"
        testing[2].href = "";
        testing[3].href = "../order/order.html";
        testing_logo.href = "";
        getShoppingBasketData(clientData.hid);
    } else {
        testing[0].href = "../member/member.html";
        testing[0].innerText = "로그인"
        testing[1].href = "../idinfo/idinfo.html";
        testing[1].innerText = "회원가입"
        testing[2].href = "../member/member.html";
        testing[3].href = "../member/member.html";
        testing_logo.href = "../member/member.html";
<<<<<<< HEAD
<<<<<<< HEAD
=======
        testing[0].href = `${herfChange}main/index.html`;
        testing[0].innerText = `로그아웃`
        testing[1].href = ``;
        testing[1].innerText = `회원정보`
        testing[2].href = ``;
        testing[3].href = `${herfChange}order/order.html`;
        testing_logo.href = ``;
        shopping_basket.innerText = clientData.ShoppingBasket.length;
        console.log();
    } else {
        testing[0].href = `${herfChange}member/member.html`;
        testing[0].innerText = `로그인`
        testing[1].href = `${herfChange}idinfo/idinfo.html`;
        testing[1].innerText = `회원가입`
        testing[2].href = `${herfChange}member/member.html`;
        testing[3].href = `${herfChange}member/member.html`;
        testing_logo.href = `${herfChange}member/member.html`;
>>>>>>> JYH
=======
>>>>>>> KSB
=======
>>>>>>> KSO
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

if (path === '/index.html') {
    console.log('나는 메인이다');
    herfChange = './';
} else {
    herfChange = '../';
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