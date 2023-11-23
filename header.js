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
    };
function change() {
    let menuList = document.querySelector('.menu_list'),
        menuIcon1 = document.querySelector('.menu_icon1'),
        menuIcon2 = document.querySelector('.menu_icon2'),
        menuIcon3 = document.querySelector('.menu_icon3'),
        menu_icon_box = document.querySelector('.menu_icon_box');
    console.log(menu_icon_box.id);
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
        console.log(clientData);
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
        console.log(ShoppingBasketData);
        shopping_basket.innerText = ShoppingBasketData.length;
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
};

function loginCheck() {
    console.log(clientData);
    console.log(clientData.hname);
    if (clientData.hname != '') {
        console.log(clientData.hname);
        testing[0].addEventListener('click', () => {
            const response = axios.put('http://localhost:3000/loginComplete/1', loginComplete);
        });
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
        shopping_basket.innerText = 0;
    }
};

getClientData();

jyh.innerText += ":";
lhn.innerText += ":";
ksb.innerText += ":";
kso.innerText += ":";
jgj.innerText += ":";
img.innerText += ": 메뉴창, 로그인, 회원가입, 아이디 비밀번호 찾기, 서버 연동, footer";