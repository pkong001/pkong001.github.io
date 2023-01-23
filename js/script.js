// function loadHeader() {
//     fetch('header.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('header').innerHTML = data;
//             document.getElementById("page-nav").innerHTML = "this is the new one";
//         });
// } อันนี้ก็ใช้ได้นะฮะ ที่ต้อแอด <body onload="loadHeader()">


function loadheader() {
    fetch('./component/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        document.getElementById("page-nav").innerHTML = content_navigator;
    });
}
// function changeText() {
//     document.getElementById("tester").innerHTML = "This is the new text";
// }

function footer1() {
    fetch('./component/footer1.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer1").innerHTML = data;
    });
}

function footer2() {
    fetch('./component/footer2.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("copy-right").innerHTML = data;
    });
}
