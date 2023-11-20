'use strict';

let birthDateY = document.querySelector(".birthDateY"),
    birthDateM = document.querySelector(".birthDateM"),
    birthDateD = document.querySelector(".birthDateD"),
    Agreement = document.querySelectorAll(".Agreement"),
    Marketing = document.querySelectorAll(".Marketing"),
    registrationComplete = document.querySelector(".registrationComplete"),
    doubleCheck = document.querySelector(".doubleCheck"),
    grid_head = document.querySelectorAll(".grid_head"),
    idinfo_grid = document.querySelector(".idinfo_grid"),
    idinfoGridValue = idinfo_grid.getElementsByTagName('input'),
    sxBox = document.querySelector(".sx_box"),
    sxBoxInput = sxBox.getElementsByTagName('input');

for (let i = 1920; i < 2024; i++) {
    birthDateY.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 13; i++) {
    birthDateM.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 32; i++) {
    birthDateD.innerHTML += `<option value="${i}">${i}</option>`
}
// ==========================================


//메인 CheckBox가 체크되면 서브가 모두 체크됨
function mainCheckBox(main) {
    if (main[0].checked) {
        for (let i = 1; i < main.length; i++) {
            main[i].checked = true;
        }
    }
    else if (main[0].checked != true) {
        for (let i = 1; i < main.length; i++) {
            main[i].checked = false;
        }
    }
};
//서브 CheckBox가 모두 체크되면 메인이 체크됨
function subCheckBoxAll(main) {
    console.log(main.length);
    for (let i = 1, count = 1; i < main.length; i++) {
        if (main[i].checked === true) count++;

        if (count == main.length) main[0].checked = true;
        else main[0].checked = false;
        console.log(count);
    }
};

//mainCheckBox 를 호출하기 위한 함수
function mainExecution(main, mainCheckBox) {
    main[0].addEventListener('click', () => {
        mainCheckBox(main);
    });
};
//subCheckBoxAll 를 호출하기 위한 함수
function subExecution(main, subCheckBoxAll) {
    for (let i = 0; i < main.length; i++) {
        main[i].addEventListener('click', () => {
            subCheckBoxAll(main);
        });
    }
};
mainExecution(Agreement, mainCheckBox);
mainExecution(Marketing, mainCheckBox);
subExecution(Agreement, subCheckBoxAll);
subExecution(Marketing, subCheckBoxAll);



function informationCheck() {
    for (let i = 0, j; i < sxBoxInput.length; i++) {
        if (sxBoxInput[i].checked) j = sxBoxInput[i].value;
    }
    for (let i = 0, j = 0; i < idinfoGridValue.length; i++) {
        switch (i) {
            case 2:
                console.log(idinfoGridValue[2].value);
                let count = idinfoGridValue[2].value.split('');
                for (let n = 0; n < count.length; n++) {
                    if (count.length < 8) {
                        alert(`비밀번호는 영문 대소문자/숫자/특수문자를 혼용하여 8~16자를 입력해주십시오.`);
                        break;
                    } else if ((count[n] == " ") || (count[n] == `"`) || (count[n] == `'`)) {
                        alert(`비밀번호에 '(작은따옴표), "(큰따옴표), 공백은 입력 하실 수 없습니다.`);
                        break;
                    }
                }
                break;
            case 3:
                if (idinfoGridValue[3].value != idinfoGridValue[2].value) {
                    alert("비밀번호가 서로 일치하지 않습니다");
                }
                break;
            default:
                break;
        }
    }
}
function printName(id) {
    // const name = document.getElementById(`${id}`).value;
    // console.log(name);
}
registrationComplete.childNodes[1].addEventListener('click', (e) => {
    e.preventDefault();
});

doubleCheck.addEventListener('click', () => {
    let count = idinfoGridValue[1].value.split('');
    for (let n = 0; n < count.length; n++) {
        if ((count[n] == " ") || (count[n] == "&") || (count[n] == "?") || (count[n] == "%") || (count[n] === "#")) {
            alert("『&』,『?』,『%』『#』 또는 공백 문자를 사용하실 수 없습니다.");
            break;
        }
        if (n == count.length - 1) alert(`${idinfoGridValue[1].value} 사용할수 있는 아이디입니다.`);
    }
});

