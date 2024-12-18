"use strict"

// ハンバーガーメニューの実装
const navBtn = document.querySelector(".header__hamburger-btn");
const navList = document.querySelector(".header__hamburger-nav");
navBtn.addEventListener("click", function(){
    navList.classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line01").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line02").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line03").classList.toggle("open");
});


// ハンバーガーメニューのリンクをクリックしたらハンバーガーメニューを閉じる
const links = document.querySelectorAll(".header__hamburger-nav a");
console.log(links);
links.forEach(link => {
    link.addEventListener("click", function(){
        navList.classList.toggle("open");
        document.querySelector(".header__hamburger-btn__line01").classList.toggle("open");
        document.querySelector(".header__hamburger-btn__line02").classList.toggle("open");
        document.querySelector(".header__hamburger-btn__line03").classList.toggle("open");
    });    
});


// レスポンシブでメニューを切り替える
const pcMenu = document.querySelector(".container__pc-menu");
function responsive(){
    if (window.matchMedia('(max-width: 1120px)').matches) {
        navBtn.style.display = '';
        pcMenu.style.display = 'none';
    } else if (window.matchMedia('(min-width:1120px)').matches) {
        navBtn.style.display = 'none';
        pcMenu.style.display = '';
    }    
}


// パソコン版メニューバーの実装
const about_zionmeet = document.querySelector(".deployment");
const pcMenu_h2 = document.querySelector(".pc-menu__h2");
about_zionmeet.addEventListener("mouseenter", (e) => {
    pcMenu_h2.classList.add("open");
});
pcMenu_h2.addEventListener("mouseleave", (e) => {
    pcMenu_h2.classList.remove("open");
});



window.addEventListener('resize', responsive);

responsive();