let on1 = document.getElementById("on1")
let on2 = document.getElementById("on2")
let on3 = document.getElementById("on3")
let on4 = document.getElementById("on4")
let on5 = document.getElementById("on5")
let on6 = document.getElementById("on6")
let on7 = document.getElementById("on7")
let on8 = document.getElementById("on8")
let on9 = document.getElementById("on9")
let on10 = document.getElementById("on10")


function showAnswer() {
    on1.style.display = "flex";
    on2.style.display = "flex";
    on3.style.display = "flex";
    on4.style.display = "flex";
    on5.style.display = "flex";
    on6.style.display = "flex";
    on7.style.display = "flex";
    on8.style.display = "flex";
    on9.style.display = "flex";
    on10.style.display = "flex";


}
function one1() {
    on1.innerHTML = "<h4>صح</h4><h3>السؤال الاول</h3>";
    on1.style.display = "none";
}
function one2() {
    on1.innerHTML = "<h4>غلط</h4><h3>السؤال الاول</h3>";
    on1.style.display = "none";
}
function one3() {
    on1.innerHTML = "<h4>غلط</h4><h3>السؤال الاول</h3>";
    on1.style.display = "none";
}
function two1() {
    on2.innerHTML = "<h4>صح</h4><h3>السؤال الثاني</h3>";
    on2.style.display = "none";
}
function two2() {
    on2.innerHTML = "<h4>غلط</h4><h3>السؤال الثاني</h3>";
    on2.style.display = "none";
}
function two3() {
    on2.innerHTML = "<h4>غلط</h4><h3>السؤال الثاني</h3>";
    on2.style.display = "none";
}
function three1() {
    on3.innerHTML = "<h4>صح</h4><h3>السؤال الثالث</h3>";
    on3.style.display = "none";
}
function three2() {
    on3.innerHTML = "<h4>غلط</h4><h3>السؤال الثالث</h3>";
    on3.style.display = "none";
}
function three3() {
    on3.innerHTML = "<h4>غلط</h4><h3>السؤال الثالث</h3>";
    on3.style.display = "none";
}
function four1() {
    on4.innerHTML = "<h4>صح</h4><h3>السؤال الرابع</h3>";
    on4.style.display = "none";
}
function four2() {
    on4.innerHTML = "<h4>غلط</h4><h3>السؤال الرابع</h3>";
    on4.style.display = "none";
}
function four3() {
    on4.innerHTML = "<h4>غلط</h4><h3>السؤال الرابع</h3>";
    on4.style.display = "none";
}
function five1() {
    on5.innerHTML = "<h4>صح</h4><h3>السؤال الخامس</h3>";
    on5.style.display = "none";
}
function five2() {
    on5.innerHTML = "<h4>غلط</h4><h3>السؤال الخامس</h3>";
    on5.style.display = "none";
}
function five3() {
    on5.innerHTML = "<h4>غلط</h4><h3>السؤال الخامس</h3>";
    on5.style.display = "none";
}
function six1() {
    on6.innerHTML = "<h4>صح</h4><h3>السؤال السادس</h3>";
    on6.style.display = "none";
}
function six2() {
    on6.innerHTML = "<h4>غلط</h4><h3>السؤال السادس</h3>";
    on6.style.display = "none";
}
function six3() {
    on6.innerHTML = "<h4>غلط</h4><h3>السؤال السادس</h3>";
    on6.style.display = "none";
}
function seven1() {
    on7.innerHTML = "<h4>صح</h4><h3>السؤال السابع</h3>";
    on7.style.display = "none";
}
function seven2() {
    on7.innerHTML = "<h4>غلط</h4><h3>السؤال السابع</h3>";
    on7.style.display = "none";
}
function seven3() {
    on7.innerHTML = "<h4>غلط</h4><h3>السؤال السابع</h3>";
    on7.style.display = "none";
}
function eight1() {
    on8.innerHTML = "<h4>صح</h4><h3>السؤال الثامن</h3>";
    on8.style.display = "none";
}
function eight2() {
    on8.innerHTML = "<h4>غلط</h4><h3>السؤال الثامن</h3>";
    on8.style.display = "none";
}
function eight3() {
    on8.innerHTML = "<h4>غلط</h4><h3>السؤال الثامن</h3>";
    on8.style.display = "none";
}
function nine1() {
    on9.innerHTML = "<h4>صح</h4><h3>السؤال التاسع</h3>";
    on9.style.display = "none";
}
function nine2() {
    on9.innerHTML = "<h4>غلط</h4><h3>السؤال التاسع</h3>";
    on9.style.display = "none";
}
function nine3() {
    on9.innerHTML = "<h4>غلط</h4><h3>السؤال التاسع</h3>";
    on9.style.display = "none";
}
function ten1() {
    on10.innerHTML = "<h4>صح</h4><h3>السؤال العاشر</h3>";
    on10.style.display = "none";
}
function ten2() {
    on10.innerHTML = "<h4>غلط</h4><h3>السؤال العاشر</h3>";
    on10.style.display = "none";
}
function ten3() {
    on10.innerHTML = "<h4>غلط</h4><h3>السؤال العاشر</h3>";
    on10.style.display = "none";
}
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    const icon = document.querySelector('.menu-icon');

    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        icon.classList.remove('active');
    } else {
        menu.style.display = 'block';
        icon.classList.add('active');
    }
}

// إغلاق القائمة عند الضغط خارجها
window.onclick = function (event) {
    if (!event.target.matches('.menu-icon') && !event.target.matches('.menu-line')) {
        document.getElementById('dropdownMenu').style.display = 'none';
        document.querySelector('.menu-icon').classList.remove('active');
    }
}