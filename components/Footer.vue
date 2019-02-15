<template>
  <div>
    <footer class="l-TopFooter">
      <div>
        <div class="l-TopFooter__first">
          <div class="Col2__el--w460">
            <div class="Title">
              <h2 class="Title__txt">NEWS</h2>
              <div class="Title__btn" style="padding-top: 0;">
                <a href="../Kifuruka_0201/mypage/coming_soon.html" class="Rollover">一覧を見る</a>
              </div>
            </div>
            <div class="News">
              <ul>
                <li>
                  <p class="News__date">2019年02月01日</p>
                  <p class="News__body">
                    <a
                      href="../Kifuruka_0201/mypage/coming_soon.html"
                      class="Rollover"
                    >リアクト学園の寄付受付を開始しました！</a>
                  </p>
                </li>
                <li>
                  <p class="News__date">2019年01月30日</p>
                  <p class="News__body">
                    <a
                      href="../Kifuruka_0201/mypage/coming_soon.html"
                      class="Rollover"
                    >システムメンテナンスのお知らせ</a>
                  </p>
                </li>
                <li>
                  <p class="News__date">2019年01月25日</p>
                  <p class="News__body">
                    <a
                      href="../Kifuruka_0201/mypage/coming_soon.html"
                      class="Rollover"
                    >コンビニ決済の対応を開始しました</a>
                  </p>
                </li>
                <li>
                  <p class="News__date">2019年01月18日</p>
                  <p class="News__body">
                    <a
                      href="../Kifuruka_0201/mypage/coming_soon.html"
                      class="Rollover"
                    >ララベル高校の寄付受付を開始しました！</a>
                  </p>
                </li>
                <li>
                  <p class="News__date">2019年01月16日</p>
                  <p class="News__body">
                    <a
                      href="../Kifuruka_0201/mypage/coming_soon.html"
                      class="Rollover"
                    >ドッカー学園の寄付受付を開始しました！</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div class="l-TopFooter__first">
            <div>
              <p class="l-TopFooter__title">公式SNSチャネル</p>
              <div class="l-TopFooter__guide1">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">LINE</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="l-TopFooter__last"></div>
      </div>
    </footer>

    <footer class="l-NavFooter">
      <div>
        <ul class="l-NavFooter__list">
          <li>
            <a href="https://www.satofull.jp/static/company/index.php">会社概要</a>
          </li>
          <li>
            <a href="https://www.satofull.jp/static/site_map.php">きふるかとは</a>
          </li>
          <li>
            <a href="https://www.satofull.jp/static/site_policy.php">寄付控除の仕組み</a>
          </li>
          <li>
            <a href="https://www.satofull.jp/static/kiyaku.php">規約</a>
          </li>
          <li>
            <a href="https://www.satofull.jp/static/privacy_policy.php">個人情報保護方針</a>
          </li>
          <li>
            <a href="https://www.satofull.jp/static/municipality_info.php">学校関係者の皆様へ</a>
          </li>
        </ul>
      </div>
    </footer>

    <footer class="l-Footer">
      <div>
        <a href="../index.html" class="l-Footer__logo">
          <!-- <img
            src="@/assets/kifurukaLogo.png"
            alt="がっこう寄付納税サイト【きふるか】"
            width="120"
            height="32"
            decoding="async"
          >-->
        </a>
        <p class="l-Footer__copyright">
          <small>&copy; Kifuruka Co.,Ltd.All rights reserved.</small>
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
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

.Recommend--ptn2 > ul::after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.Recommend--ptn2 > ul > li {
  float: left;
  width: 228px;
  margin: 25px 0 0 23px;
}
.Recommend--ptn2 > ul > li:nth-child(1),
.Recommend--ptn2 > ul > li:nth-child(2),
.Recommend--ptn2 > ul > li:nth-child(3) {
  margin-top: 0;
}
.Recommend--ptn2 > ul > li:nth-child(3n + 1) {
  clear: left;
  margin-left: 0;
}
.Recommend--ptn2 > ul > li > a {
  display: block;
  text-decoration: none;
}
.Recommend--ptn2 > ul > li:nth-child(4) {
  margin-top: 0;
}
.Recommend--ptn2 > ul > li:nth-child(3n + 1) {
  clear: none;
  margin-left: 20px;
}
.Recommend--ptn2 > ul > li:nth-child(4n + 1) {
  clear: left;
  margin-left: 0;
}

/* style */
footer {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  position: relative;
  height: auto;
  background-color: #fff2cb;
  display: block;
}

footer.simple p {
  margin: 0 auto;
}

.footer_inner {
  width: 1000px;
  margin: 0 auto;
  padding: 10px 20px 30px;
  line-height: 1.6em;
}
footer.simple .footer_inner {
  padding: 30px 0;
  text-align: center;
}

.footer_logo {
  background-image: url("https://www.satofull.jp/static/master/packages/default/images/common/footer_logo.png");
  background-repeat: no-repeat;
  width: 154px;
  height: 51px;
  margin: 0 auto;
  position: relative;
}
.footer_logo a {
  display: block;
  height: 51px;
}
.footer_logo a span {
  visibility: hidden;
}
.footer_sns {
  margin: 20px auto 0;
  text-align: center;
}
.footer_sns .fb {
  display: inline-block;
  width: 23px;
  height: 23px;
  margin: 0 10px;
  background-image: url("https://www.satofull.jp/static/master/packages/default/images/common/footer_fb.png");
  background-repeat: no-repeat;
}
.footer_sns .fb span {
  visibility: hidden;
}
.footer_sns .tw {
  display: inline-block;
  width: 26px;
  height: 23px;
  margin: 0 10px;
  background-image: url("https://www.satofull.jp/static/master/packages/default/images/common/footer_tw.png");
  background-repeat: no-repeat;
}
.footer_sns .tw span {
  visibility: hidden;
}

/* common */
/* 変化なし */
footer {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
footer {
  display: block;
}

.Col2--gap50:after,
.Col2--mt25:after,
.Col2:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.Col2__el,
.Col2__el--w230,
.Col2__el--w450,
.Col2__el--w480,
.Col2__el--w730 {
  float: left;
  margin-left: 20px;
}
.Col2__el--w230:first-child,
.Col2__el--w450:first-child,
.Col2__el--w480:first-child,
.Col2__el--w730:first-child,
.Col2__el:first-child {
  margin-left: 0;
}
.Col2__el--w230[data-zindex="10"],
.Col2__el--w450[data-zindex="10"],
.Col2__el--w480[data-zindex="10"],
.Col2__el--w730[data-zindex="10"],
.Col2__el[data-zindex="10"] {
  position: relative;
  z-index: 10;
}
.Col2__el--w230 {
  width: 230px;
}
.Col2__el--w450 {
  width: 450px;
}
.Col2__el--w480 {
  width: 480px;
}
.Col2__el--w730 {
  width: 730px;
}
.Col2--gap50 .Col2__el,
.Col2--gap50 .Col2__el--w230,
.Col2--gap50 .Col2__el--w450,
.Col2--gap50 .Col2__el--w480,
.Col2--gap50 .Col2__el--w730 {
  margin-left: 50px;
}
.Col2--gap50 .Col2__el--w230:first-child,
.Col2--gap50 .Col2__el--w450:first-child,
.Col2--gap50 .Col2__el--w480:first-child,
.Col2--gap50 .Col2__el--w730:first-child,
.Col2--gap50 .Col2__el:first-child {
  margin-left: 0;
}

.Title,
.Title--mb25 {
  margin-bottom: 10px;
}
.Title--mb25:after,
.Title:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.Title--mb25 {
  margin-bottom: 25px;
}
.Title__txt {
  float: left;
  font-size: 1.83333rem;
}
.Title__link,
.Title__txt {
  font-weight: 700;
  line-height: 1.4;
}
.Title__link {
  float: right;
  padding-top: 7px;
}
.Title__link > a {
  display: inline-block;
  position: relative;
  padding-left: 18px;
  color: hsl(41, 98%, 54%);
}
.Title__btn {
  float: right;
  padding-top: 2px;
}

.News > ul > li {
  margin-top: 15px;
  line-height: 1.6;
}
.News > ul > li:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.News > ul > li:first-child {
  margin-top: 0;
}
.News__date {
  float: left;
  width: 120px;
}
.News__body {
  overflow: hidden;
}
.News__body > a:active,
.News__body > a:hover {
  text-decoration: underline !important;
}
/* hf.min */

.l-TopFooter {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  background: #fff2cb;
}

.l-TopFooter * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-TopFooter article,
.l-TopFooter aside,
.l-TopFooter details,
.l-TopFooter figcaption,
.l-TopFooter figure,
.l-TopFooter footer,
.l-TopFooter header,
.l-TopFooter hgroup,
.l-TopFooter main,
.l-TopFooter menu,
.l-TopFooter nav,
.l-TopFooter section {
  display: block;
}
.l-TopFooter ol,
.l-TopFooter ul {
  list-style: none;
}
.l-TopFooter a {
  color: #000;
  text-decoration: underline;
}
.l-TopFooter a:active {
  background-color: transparent;
}
.l-TopFooter img {
  vertical-align: bottom;
}
.l-TopFooter > div {
  width: 980px;
  margin: 0 auto;
  padding: 40px 20px;
}
.l-TopFooter__first:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.l-TopFooter__first > div:first-child {
  float: left;
  width: 490px;
}
.l-TopFooter__first > div:last-child {
  float: right;
  width: 440px;
}
.l-TopFooter__title {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
}
.l-TopFooter__category__set {
  margin-top: 20px;
}
.l-TopFooter__category__set:first-child {
  margin-top: 0;
}
.l-TopFooter__category__title {
  font-weight: 700;
}
.l-TopFooter__category__list {
  line-height: 1.8;
}
.l-TopFooter__category__list > a {
  font-size: 14px;
  line-height: 2.6;
  white-space: nowrap;
  margin-right: 30px;
}
.l-TopFooter__guide1 > ul > li {
  background: #fff;
}
.l-TopFooter__guide1 > ul > li > a {
  display: block;
  padding: 12px 0;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
}
.l-TopFooter__guide1 > ul:first-child:after {
  content: ".";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.l-TopFooter__guide1 > ul:first-child > li {
  float: left;
  width: 217px;
  min-height: 41px;
  margin: 6px 0 0 6px;
}

.l-TopFooter__guide1 > ul:first-child > li:first-child,
.l-TopFooter__guide1 > ul:first-child > li:nth-child(2) {
  margin-top: 0;
}
.l-TopFooter__guide1 > ul:first-child > li:nth-child(odd) {
  margin-left: 0;
}
.l-TopFooter__guide1 > ul:last-child,
.l-TopFooter__guide1 > ul:last-child > li {
  margin-top: 6px;
}
.l-TopFooter__guide1 > ul:last-child > li:first-child {
  margin-top: 0;
}
.l-TopFooter__guide2 {
  position: relative;
  height: 60px;
  margin-top: 25px;
}
.l-TopFooter__guide2__facebook {
  left: 0;
}
.l-TopFooter__guide2__facebook,
.l-TopFooter__guide2__twitter {
  position: absolute;
  top: 0;
  width: 110px;
  height: 60px;
  background: #fff;
}
.l-TopFooter__guide2__twitter {
  left: 120px;
}
.l-TopFooter__guide2__privacy {
  position: absolute;
  right: 0;
  top: 0;
}
.l-TopFooter__guide2__privacy > a {
  opacity: 1 !important;
}
.l-TopFooter__last {
  position: relative;
  margin-top: 40px;
}
.l-TopFooter__bnr,
.l-TopFooter__bnr--1,
.l-TopFooter__bnr--2,
.l-TopFooter__bnr--3 {
  position: absolute;
  top: 0;
  width: 312px;
  height: 120px;
  background: #fff;
}
.l-TopFooter__bnr--1 {
  left: 0;
}
.l-TopFooter__bnr--2 {
  left: 334px;
}
.l-TopFooter__bnr--3 {
  left: 668px;
}
.l-TopFooter.Js-pc .l-TopFooter__category__list > a:active,
.l-TopFooter.Js-pc .l-TopFooter__category__list > a:hover,
.l-TopFooter.Js-pc .l-TopFooter__category__title > a:active,
.l-TopFooter.Js-pc .l-TopFooter__category__title > a:hover,
.l-TopFooter.Js-pc .l-TopFooter__guide1 > ul > li > a:active,
.l-TopFooter.Js-pc .l-TopFooter__guide1 > ul > li > a:hover,
.l-TopFooter.Js-pc .l-TopFooter__guide2__facebook:active,
.l-TopFooter.Js-pc .l-TopFooter__guide2__facebook:hover,
.l-TopFooter.Js-pc .l-TopFooter__guide2__twitter:active,
.l-TopFooter.Js-pc .l-TopFooter__guide2__twitter:hover,
.l-TopFooter.Js-pc__bnr--1 > a:active,
.l-TopFooter.Js-pc__bnr--1 > a:hover,
.l-TopFooter.Js-pc__bnr--2 > a:active,
.l-TopFooter.Js-pc__bnr--2 > a:hover,
.l-TopFooter.Js-pc__bnr--3 > a:active,
.l-TopFooter.Js-pc__bnr--3 > a:hover,
.l-TopFooter.Js-pc__bnr > a:active,
.l-TopFooter.Js-pc__bnr > a:hover {
  opacity: 0.6;
}

.l-NavFooter {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  height: 60px;
  background: #ffe65d;
}
.l-NavFooter * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-NavFooter article,
.l-NavFooter aside,
.l-NavFooter details,
.l-NavFooter figcaption,
.l-NavFooter figure,
.l-NavFooter footer,
.l-NavFooter header,
.l-NavFooter hgroup,
.l-NavFooter main,
.l-NavFooter menu,
.l-NavFooter nav,
.l-NavFooter section {
  display: block;
}
.l-NavFooter ol,
.l-NavFooter ul {
  list-style: none;
}
.l-NavFooter a {
  color: #000;
  text-decoration: underline;
}
.l-NavFooter a:active {
  background-color: transparent;
}
.l-NavFooter img {
  vertical-align: bottom;
}
.l-NavFooter > div {
  width: 980px;
  margin: 0 auto;
  padding: 21px 20px 0;
}
.l-NavFooter__list {
  line-height: 1.4;
  text-align: center;
}
.l-NavFooter__list > li {
  display: inline-block;
  position: relative;
  margin-left: 9px;
  padding-left: 13px;
}
.l-NavFooter__list > li:before {
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
.l-NavFooter__list > li:first-child {
  margin-left: 0;
  padding-left: 0;
}
.l-NavFooter__list > li:first-child:before {
  content: normal;
}
.l-NavFooter.Js-pc .l-NavFooter__list > li > a:active,
.l-NavFooter.Js-pc .l-NavFooter__list > li > a:hover {
  opacity: 0.6;
}

.l-Footer {
  min-width: 1020px;
  margin: 0;
  padding: 0;
  color: #000;
  font-family: ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo,
    sans-serif;
  font-size: 12px;
  line-height: 1.7;
  height: 71px;
}
.l-Footer * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}
.l-Footer article,
.l-Footer aside,
.l-Footer details,
.l-Footer figcaption,
.l-Footer figure,
.l-Footer footer,
.l-Footer header,
.l-Footer hgroup,
.l-Footer main,
.l-Footer menu,
.l-Footer nav,
.l-Footer section {
  display: block;
}
.l-Footer ol,
.l-Footer ul {
  list-style: none;
}
.l-Footer a {
  color: #000;
  text-decoration: underline;
}
.l-Footer a:active {
  background-color: transparent;
}
.l-Footer img {
  vertical-align: bottom;
}
.l-Footer > div {
  position: relative;
  width: 1020px;
  margin: 0 auto;
  background: none;
}
.l-Footer__logo {
  display: block;
  position: absolute;
  left: 20px;
  top: 19px;
  opacity: 1 !important;
}

.l-Footer__copyright {
  position: absolute;
  right: 20px;
  top: 27px;
  line-height: 1.4;
}
</style>