<template>
  <header class="l-Header">
    <a href="#" class="l-Header__logo">
      <img
        src="@/assets/kifurukaLogo.png"
        alt="がっこう寄付納税サイト【きふるか】"
        width="158"
        height="42"
        decoding="async"
      >
    </a>
    <form action="#" method="get">
      <div class="l-Header__search">
        <div class="l-Header__search__field">
          <input type="text" placeholder="キーワードから探す" id="l-Header__search__field__input" name="q">
        </div>
        <button class="l-Header__search__btn">検索</button>
      </div>
      <input type="hidden" name="cnt" value="60">
      <input type="hidden" name="p" value="1">
    </form>
    <nav class="l-Header__nav">
      <ul>
        <li>
          <a href="cart/index.php.html" class="l-Header__nav__link--cart">
            <img src alt="カート" decoding="async">
          </a>
        </li>
        <li>
          <a href="#" class="l-Header__nav__link--mypage">
            <img src alt="マイページ" decoding="async">
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style>
/* きふルカ */

header {
  z-index: 600;
}

.l-TopHeader {
  z-index: inherit;
}

.l-TopHeader > div {
  z-index: 500;
  /* メインカラーコード */
  background: #ffe65d;
}

.l-Header {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  position: relative;
  width: 1020px;
  height: 69px;
  margin: 0 auto;
}
.l-Header * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-Header article,
.l-Header aside,
.l-Header details,
.l-Header figcaption,
.l-Header figure,
.l-Header footer,
.l-Header header,
.l-Header hgroup,
.l-Header main,
.l-Header menu,
.l-Header nav,
.l-Header section {
  display: block;
}

.l-Header ol,
.l-Header ul {
  list-style: none;
}
.l-Header a {
  color: #000;
  text-decoration: underline;
}
.l-Header a:active {
  background-color: transparent;
}
.l-Header img {
  vertical-align: bottom;
}
.l-Header__logo {
  display: block;
  position: absolute;
  left: 20px;
  top: 13px;
  opacity: 1 !important;
}

.l-Header__search {
  position: absolute;
  left: 238px;
  top: 16px;
  width: 400px;
  height: 36px;
}
.l-Header__search__field {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 100%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #ebebeb;
  box-shadow: inset 0 4px 4px rgba(0, 0, 0, 0.1);
}
.l-Header__search__field > input {
  display: block;
  width: 290px;
  height: 100%;
  padding-left: 10px;
  border: none;
  background: none;
  font-size: 12px;
}
.l-Header__search__field > input:placeholder-shown {
  color: #999;
}
.l-Header__search__field > input::-webkit-input-placeholder {
  color: #999;
}
.l-Header__search__field > input:-ms-input-placeholder {
  color: #999;
}
.l-Header__search__field > input::-moz-placeholder {
  color: #999;
}
.l-Header__search__field > input::-ms-clear {
  display: none;
}
.l-Header__search__btn {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  width: 100px;
  height: 100%;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: hsl(41, 98%, 54%);
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
}
.l-Header__nav {
  position: absolute;
  right: 20px;
  top: 14px;
  height: 40px;
}
.l-Header__nav > ul {
  height: 100%;
  border-right: 1px solid #ccc;
}
.l-Header__nav > ul:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.l-Header__nav > ul > li {
  float: left;
  width: 75px;
  height: 100%;
  border-left: 1px solid #ccc;
}
.l-Header__nav__link,
.l-Header__nav__link--cart,
.l-Header__nav__link--favorite,
.l-Header__nav__link--instruction,
.l-Header__nav__link--mypage {
  display: block;
  position: relative;
  height: 100%;
  box-sizing: border-box;
  line-height: 1.1;
  text-align: center;
  text-decoration: none !important;
}
.l-Header__nav__link--cart > span,
.l-Header__nav__link--favorite > span {
  display: block;
  position: absolute;
  right: 0;
  top: -3px;
  width: 49px;
  line-height: 1.1;
  text-align: center;
}
.l-Header__nav__link--cart > span > span,
.l-Header__nav__link--favorite > span > span {
  display: inline-block;
  padding: 3px 4px 2px;
  border-radius: 7.5px;
  background: #c00;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
}
.l-Header.Js-pc .l-Header__nav__link--cart:active,
.l-Header.Js-pc .l-Header__nav__link--cart:hover,
.l-Header.Js-pc .l-Header__nav__link--favorite:active,
.l-Header.Js-pc .l-Header__nav__link--favorite:hover,
.l-Header.Js-pc .l-Header__nav__link--instruction:active,
.l-Header.Js-pc .l-Header__nav__link--instruction:hover,
.l-Header.Js-pc .l-Header__nav__link--mypage:active,
.l-Header.Js-pc .l-Header__nav__link--mypage:hover,
.l-Header.Js-pc .l-Header__nav__link:active,
.l-Header.Js-pc .l-Header__nav__link:hover,
.l-Header.Js-pc .l-Header__search__btn:active,
.l-Header.Js-pc .l-Header__search__btn:hover {
  opacity: 0.6;
}
/*  */
.l-Wrapper {
  position: fixed;
}

/*  */
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  margin: 20px 0 0;
}
h1 {
  font-weight: bolder;
}
h1 {
  background-color: #ffe65d;
  color: #fff;
  margin: 0 30px;
  padding: 15px 30px;
}

a,
div,
form,
h1,
h2,
h3,
h4,
h5,
h6,
header,
html,
img,
li,
nav,
span {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* 特段変わらない */
header,
nav {
  display: block;
}

/* style */
header {
  width: 1040px;
  margin: 0 auto;
  padding: 0;
  position: relative;
  height: auto;
  background-color: #fff;
  display: block;
}

header.simple {
  height: 80px;
}
</style>