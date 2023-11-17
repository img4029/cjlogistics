const birthDateY = document.querySelector(".birthDateY"),
    birthDateM = document.querySelector(".birthDateM"),
    birthDateD = document.querySelector(".birthDateD");

for (let i = 1920; i < 2024; i++) {
    birthDateY.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 13; i++) {
    birthDateM.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i < 32; i++) {
    birthDateD.innerHTML += `<option value="${i}">${i}</option>`
}