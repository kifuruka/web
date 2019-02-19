<template>
  <div class="feature">
    <h2>特集test</h2>
    <div class="container_feature">
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/sankinkoryu.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">産近甲龍特集</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/kaiyou.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">海洋特集</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/ekiden.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">駅伝特集</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/parasports.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">パラスポーツ特集</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/march.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">MARCH特集</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card">
            <img class="card-img" src="../assets/images/yasai.jpg" alt>
            <div class="card-content">
              <h3 class="card-title">農業畜産特集</h3>
            </div>
          </section>
        </a>
      </div>
    </div>
    <!-- <p>{{message}}</p>
        <p>{{1+3}}</p>
        <p>{{message ==='test' ? 'OK':'NO' }}</p>
        <p> {{
            reversedMessage
            /* 算出プロパティの値を出⼒ */
            }} </p>
            <button v-on:click="reversedMessage">Reverse </button>
    <input v-model="message" type="text">-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "teeeest"
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>
<style>
.feature {
  margin: 5% 5%;
}
.container_feature {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.container h2 {
  text-align: left;
  margin-bottom: 1%;
  padding: 0.25em 0.5em; /*上下 左右の余白*/
  color: #494949; /*文字色*/
  background: transparent; /*背景透明に*/
  border-left: solid 0.4em #ffe65d; /*左線*/
}
.item {
  margin-bottom: 1%;
}
.item a {
  text-decoration: none;
}
.card {
  width: 350px;
  margin-right: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 10px;
}
h2 a {
  text-decoration: none;
}
.card-title {
  text-decoration: none;
  color: #ffffff;
  font-size: 20px;
  text-align: center;
  color: #777;
}
.card-title a {
  text-decoration: none;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
.card-link {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 20px;
}
.card-link a {
  text-decoration: none;
  color: #ffffff;
  margin: 0 10px;
}
.card-link a:hover {
  color: #0090aa;
}
</style>