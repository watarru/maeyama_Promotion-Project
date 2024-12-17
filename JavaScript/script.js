"use strict"

// ハンバーガーメニューの実装
const navBtn = document.querySelector(".header__hamburger-btn");
const navList = document.querySelector("nav");
navBtn.addEventListener("click", function(){
    navList.classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line01").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line02").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line03").classList.toggle("open");
});

const link = document.querySelectorAll(".header__hamburger-nav a");
// マップメソッドか何かで、配列の中のそれぞれにイベントを仕組んでいきたい。
console.log(link);
link.addEventListener("click", function(){
    navList.classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line01").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line02").classList.toggle("open");
    document.querySelector(".header__hamburger-btn__line03").classList.toggle("open");
});
