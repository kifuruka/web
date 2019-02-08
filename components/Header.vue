<template>
  <header class="l-TopHeader">
    <div>
      <h1 class="l-TopHeader__tagline">がっこう寄付納税総合支援サイト【きふるか】</h1>
      <ul class="l-TopHeader__nav">
        <li>
          <a href="#">クラウドファンディング</a>
        </li>
        <li>
          <a href="#">ログイン</a>
        </li>
        <li>
          <a href="#">新規登録</a>
        </li>
      </ul>
    </div>
    <!-- .l-TopHeader -->
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

main {
  width: 1020px;
  z-index: 200;
}

#pagetop {
  z-index: 700;
}

footer {
  z-index: 400;
}

.l-TopHeader {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  width: auto;
  height: 40px;
  background: #ffe65d;
}
.l-TopHeader * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-TopHeader article,
.l-TopHeader aside,
.l-TopHeader details,
.l-TopHeader figcaption,
.l-TopHeader figure,
.l-TopHeader footer,
.l-TopHeader header,
.l-TopHeader hgroup,
.l-TopHeader main,
.l-TopHeader menu,
.l-TopHeader nav,
.l-TopHeader section {
  display: block;
}
.l-TopHeader ol,
.l-TopHeader ul {
  list-style: none;
}
.l-TopHeader a {
  color: #000;
  text-decoration: underline;
}
.l-TopHeader a:active {
  background-color: transparent;
}
.l-TopHeader img {
  vertical-align: bottom;
}
.l-TopHeader > div {
  position: relative;
  width: 1020px;
  height: 100%;
  margin: 0 auto;
}
.l-TopHeader__tagline {
  left: 20px;
  color: #000;
  background: none;
}
.l-TopHeader__nav,
.l-TopHeader__tagline {
  position: absolute;
  top: 11px;
  line-height: 1.4;
}
.l-TopHeader__nav {
  right: 20px;
}
.l-TopHeader__nav > li {
  display: inline-block;
  position: relative;
  margin-left: 9px;
  padding-left: 13px;
}
.l-TopHeader__nav > li:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 3px;
  width: 1px;
  height: 12px;
  background: #000;
  opacity: 0.35;
}
.l-TopHeader__nav > li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.l-TopHeader__nav > li:first-child:before {
  content: normal;
}
.l-TopHeader__nav > li > a {
  text-decoration: none;
}
.l-TopHeader.Js-pc .l-TopHeader__nav > li > a:active,
.l-TopHeader.Js-pc .l-TopHeader__nav > li > a:hover {
  opacity: 0.6;
}

/* style */
.l-Wrapper {
  position: fixed;
}

/* style */
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
h1,

/* common */
/* 特段変わらない */
.l-Wrapper {
  min-width: 1020px;
}

/* 特段変わらない */
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





