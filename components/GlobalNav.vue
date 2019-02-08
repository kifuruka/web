<template>
  <nav class="l-GlobalNav">
    <ul>
      <li>
        <a href="#" class="l-GlobalNav__link">
          <span>学校・地域から探す</span>
        </a>
      </li>
      <li>
        <a href="#" class="l-GlobalNav__link">
          <span>活動から探す</span>
        </a>
      </li>
      <li>
        <a href="#" class="l-GlobalNav__link">
          <span>返礼から探す</span>
        </a>
      </li>
      <li>
        <a href="#" class="l-GlobalNav__link">
          <span>特集・キャンペーン</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style>
/* hf-min */
.l-GlobalNav {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  display: block;
  position: relative;
  width: 1020px;
  height: 50px;
  z-index: 500;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px 10px;
  background-color: #fff !important;
}
.l-GlobalNav * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-GlobalNav article,
.l-GlobalNav aside,
.l-GlobalNav details,
.l-GlobalNav figcaption,
.l-GlobalNav figure,
.l-GlobalNav footer,
.l-GlobalNav header,
.l-GlobalNav hgroup,
.l-GlobalNav main,
.l-GlobalNav menu,
.l-GlobalNav nav,
.l-GlobalNav section {
  display: block;
}
.l-GlobalNav ol,
.l-GlobalNav ul {
  list-style: none;
}
.l-GlobalNav a {
  color: #000;
  text-decoration: underline;
}
.l-GlobalNav a:active {
  background-color: transparent;
}
.l-GlobalNav img {
  vertical-align: bottom;
}
.l-GlobalNav__link,
.l-GlobalNav__link--active,
.l-GlobalNav__link--current {
  display: block;
  height: 100%;
  padding-top: 5px;
  border: 2px solid #fff;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
  text-decoration: none;
}
.l-GlobalNav__link--active > span,
.l-GlobalNav__link--current > span,
.l-GlobalNav__link > span {
  display: inline-block;
  position: relative;
}

.l-GlobalNav__link--active > span:before,
.l-GlobalNav__link--current > span:before,
.l-GlobalNav__link > span:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  background-repeat: no-repeat;
}
.l-GlobalNav__link--active {
  opacity: 0.6;
}
.l-GlobalNav__link--current {
  border-color: hsl(41, 98%, 54%);
  color: hsl(41, 98%, 54%) !important;
  opacity: 1 !important;
}
.l-GlobalNav > ul {
  height: 100%;
}
.l-GlobalNav > ul:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.l-GlobalNav > ul > li {
  position: relative;
  float: left;
  width: 24%;
  height: 100%;
  box-sizing: border-box;
  padding: 3px;
  background: #ffe65d;
  margin: 0px 4px;
  border-radius: 5px;
}
.l-GlobalNav > ul > li:before {
  right: 0;
}
.l-GlobalNav > ul > li:before,
.l-GlobalNav > ul > li:first-child:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 0px;
  height: 100%;
  background: #ccc;
}
.l-GlobalNav > ul > li:first-child:after {
  left: 0;
}

.l-GlobalNav>ul>li:first-child .l-GlobalNav__link--active > span::before,.l-GlobalNav>ul>li:first-child .l-GlobalNav__link--current > span::before,
/* ↓↓↓ トップメニューのCSS アイコンを削除修正しました。 (2019/2/1 dan) */
.l-GlobalNav>ul>li:first-child .l-GlobalNav__link > span::before {
  top: 2px;
  width: 26px;
  height: 18px;
}

/* Nav Buttonの位置 */
/* .l-GlobalNav > ul > li:first-child .l-GlobalNav__link--active > span,
.l-GlobalNav > ul > li:first-child .l-GlobalNav__link--current > span,
.l-GlobalNav > ul > li:first-child .l-GlobalNav__link > span {
  padding: 0 16px 0 36px;
} */
/* .l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link--active > span,
.l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link--current > span,
.l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link > span {
  padding: 0 8px 0 28px;
} */
/* .l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link--active > span,
.l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link--current > span,
.l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link > span {
  padding: 0 8px 0 28px;
} */
/* .l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link--active > span,
.l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link--current > span,
.l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link > span {
  padding: 0 0 0 20px;
} */

.l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link--active > span:before,
.l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link--current > span:before,
.l-GlobalNav > ul > li:nth-child(2) .l-GlobalNav__link > span:before {
  top: 2px;
  width: 18px;
  height: 18px;
}

.l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link--active > span:before,
.l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link--current > span:before,
.l-GlobalNav > ul > li:nth-child(3) .l-GlobalNav__link > span:before {
  top: 2px;
  width: 18px;
  height: 18px;
}

.l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link--active > span:before,
.l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link--current > span:before,
.l-GlobalNav > ul > li:nth-child(4) .l-GlobalNav__link > span:before {
  top: 2px;
  width: 10px;
  height: 19px;
}
.l-GlobalNav.Js-pc .l-GlobalNav__link--active:active,
.l-GlobalNav.Js-pc .l-GlobalNav__link--active:hover,
.l-GlobalNav.Js-pc .l-GlobalNav__link--current:active,
.l-GlobalNav.Js-pc .l-GlobalNav__link--current:hover,
.l-GlobalNav.Js-pc .l-GlobalNav__link:active,
.l-GlobalNav.Js-pc .l-GlobalNav__link:hover {
  opacity: 0.6;
}
</style>
