function loadheader() {
    fetch('./component/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById("header").innerHTML = data;
        document.getElementById("page-nav").innerHTML = content_navigator;
    });
}

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
