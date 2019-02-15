 <template>
  <!--styleを追加 -->
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    style="margin:8px 8px 8px; border-bottom:2px solid gold"
  >
    <div class="navbar-brand">
      <!-- 左側ロゴ -->
      <!-- #にリンクを入れる -->
      <a class="navbar-item" href="#">
        <!-- srcに画像のリンクを入れる （widthとheightの指定をしているが必要かわからない）-->
        <img src="@/static/kifurukaLogo.png" alt="がっこう寄付納税サイト【きふるか】" decoding="async">
        <!-- <img src=""> -->
      </a>

      <!-- モバイル時のハンバーガーメニュー -->
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <!-- navbar-menuを消すと、左右に振り分けられていたデザインが左側によってしまう。-->
    <div id="navbarBasicExample" class="navbar-menu">
      <!-- navbar-start->初めから（ブルマでは上もしくは左から）navbar-end->最後からもしくは右から -->
      <div class="navbar-end"></div>

      <div class="navbar-end">
        <!-- navの中のアイテム -->
        <!-- 別途、flex-direction: row-reverse;をつかって左寄せに -->
        <a class="navbar-item flex3">
          <strong>学校関係者の皆さま</strong>
        </a>
        <a class="navbar-item flex3">
          <strong>母校</strong>
        </a>
        
        <a class="navbar-item flex3">
          <strong>マイページ</strong>
        </a>
        
        <a class="navbar-item flex3">
          <strong>新規登録</strong>
        </a>

        <div class="navbar-item">
          <div class="buttons flex3">
            <a class="button is-medium custom-btn">
              <strong>ログイン</strong>
            </a>
            <!-- スペースを確保するためにmarginを追加 -->
            <!-- <a class="button is-medium" style="margin-right:1em">
                            新規登録
            </a>-->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>


<style>
.flex3 {
  display: flex;
  flex-direction: row-reverse;
}

/* .main-color {
  border-color: #ffe035;
} */
.custom-btn {
  background-color: #ffe035;
  color: white;
  border-radius: 2em;
  width: 6.3em;
  border-color: #ffe035;
}
</style>
