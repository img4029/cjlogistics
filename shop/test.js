let testing = document.querySelectorAll('.testing');
let clientData,
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
    }

async function getClientData() {
    try {
        // const response = await axios.get('http://localhost:3000/loginComplete/');
        const response = await axios.get('http://localhost:3000/loginComplete/1');

        clientData = response.data;
        console.log(clientData);
        loginCheck();
    } catch (err) {
        console.log('데이터를 가져오는 중 오류 발생');
        console.log(err.message);
    }
}

function loginCheck() {
    console.log(clientData);
    if (clientData == '') {
        testing.addEventListener('click', () => {
            const response = axios.put('http://localhost:3000/loginComplete/1', loginComplete);
        });
        testing[0].href = "";
        testing[0].innerText = "로그아웃"
        testing[1].href = "";
        testing[1].innerText = "회원정보"
    }
}

getClientData();

