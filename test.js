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
        testing[0].href = "./test.html";
        testing[0].innerText = "로그아웃"
        testing[1].href = "";
        testing[1].innerText = "회원정보"
        testing[2].href = "";
        testing[3].href = "";
        testing_logo.href = "";
        getShoppingBasketData(clientData.hid);
    } else {
        testing[0].href = "./shop/member/member.html";
        testing[0].innerText = "로그인"
        testing[1].href = "./shop/idinfo/idinfo.html";
        testing[1].innerText = "회원가입"
        testing[2].href = "./shop/member/member.html";
        testing[3].href = "./shop/member/member.html";
        testing_logo.href = "./shop/member/member.html";
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