<template>
  <header class="l-Header">
    <div class="headerInner">
      <div class="LogoImgSize">
        <a href="#" class="l-Header__logo">
          <!-- <img src="@/assets/kifurukaLogo.png" alt="がっこう寄付納税サイト【きふるか】" decoding="async"> -->
        </a>
      </div>
      <ul class="l-TopHeader__nav">
        <li class="sendStr">
          <a href="#">母校</a>
        </li>
        <li class="sendStr">
          <a href="#">ログイン</a>
        </li>
        <!-- <li class="sendButton">
          <a href="#">新規登録</a>
        </li>-->
        <li>
          <a href="#">
            <button>新規登録</button>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>





<style scoped>
.l-Header {
  color: rgb(34, 34, 34);
  max-width: 1920px;
  height: 100px;
  margin: 0;
  padding: 0;
  display: flex;
  line-height: 1.7;
  z-index: 600;
  z-index: inherit;

  /* background-color: #c2beab; */
}
.l-Header * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}

.headerInner {
  width: 1519px;
  padding: 0;
  margin: 0 auto;
  position: relative;
  /* background-color: #b8ae80; */
}

.l-TopHeader__nav,
.LogoImgSize {
  position: absolute;
  top: 8px;
  line-height: 1.4;
  width: 420px;
}

.LogoImgSize {
  margin-top: -1.7em;
  top: 50%;
  width: 220px;
  height: 42px;
}

.l-TopHeader__nav {
  right: 0px;
}

.l-TopHeader__nav > li {
  display: inline-block;
  position: relative;
}

.l-TopHeader__nav > li:first-child:before {
  content: normal;
}

.l-TopHeader__nav > li > a {
  color: rgb(34, 34, 34);
  text-decoration: none;
}

ul {
  margin: 15px;
  padding: 0;
  display: table;
  table-layout: fixed;
  width: 100%;
}
li {
  list-style-type: none;
  display: table-cell;
  cursor: pointer;
}

.sendButton {
  position: absolute;
  margin: auto;
  display: block;
  border-radius: 28px;
  background-color: #ffe035;
  width: 180px;
  height: 56px;
  right: 0;
}
button {
  padding: 0.3em 0.8em;
  background: #ffe035;
  border-radius: 2.4em;
  box-shadow: 0 0.1em 0.2em rgb(179, 179, 179);
  color: #333333;
  font-size: 125%;
  line-height: 1.5;
  width: 180px;
  height: 56px;
  /* position: absolute; */
  /* margin: auto;
        display: block; */
  /* border-radius: 28px; */
  /* background-color: */
  /* right: 0; */
}
.sendButton > a {
  display: block;
  padding: 17px;
  text-align: center;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.3em;
}

.sendStr {
  position: absolute;
  margin: auto;
  display: block;
  background-color: none;
  width: 120px;
  height: 56px;
  right: 0;
}
.sendStr > a {
  display: block;
  padding: 15px;
  text-align: center;
  color: rgb(34, 34, 34);
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 0.3em;
}
</style>
