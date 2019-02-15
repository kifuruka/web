<template>
  <header class="l-TopHeader">
    <div>
      <h1 class="l-TopHeader__tagline">がっこう寄付納税総合支援サイト【きふるか】</h1>
      <ul class="l-TopHeader__nav">
        <li>
          <a href="#">学生【寄付型】クラファン</a>
        </li>
        <li>
          <a href="#">ログイン</a>
        </li>
        <li>
          <a href="#">新規登録</a>
        </li>
      </ul>
    </div>
  </header>
</template>


<style scoped>
header {
  z-index: 600;
}

.l-TopHeader {
  z-index: inherit;
}

.l-TopHeader > div {
  z-index: 500;
  background: #ffe65d;
}

main {
  width: 100%;
  z-index: 200;
}

.l-TopHeader {
  margin: 0;
  padding: 0;
  width: auto;
  height: 42px;
  display: flex;
  background: #ffe65d;
}
.l-TopHeader * {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
}

.l-TopHeader ul {
  list-style: none;
}

.l-TopHeader a:active {
  background-color: transparent;
}

.l-TopHeader > div {
  position: relative;
  width: 960px;
  height: 100%;
  margin: 0 auto;
}
.l-TopHeader__tagline {
  left: 8px;
  color: #000;
  background: none;
}

.l-TopHeader__nav,
.l-TopHeader__tagline {
  position: absolute;
  top: 12px;
  line-height: 1.4;
}

.l-TopHeader__nav {
  right: 8px;
}

.l-TopHeader__nav > li {
  display: inline-block;
  position: relative;
  margin-left: 8px;
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

.l-TopHeader__nav > li:first-child:before {
  content: normal;
}

.l-TopHeader__nav > li > a {
  text-decoration: none;
}
</style>





