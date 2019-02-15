<template>
  <div class="container_YourSchool">
    <h2>あなたが応援したい学校</h2>
    <div class="container_school">
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card_YourSchool">
            <!-- <img class="card-img" src="../assets/images/kindai.jpg" alt> -->
            <div class="card-content">
              <h3 class="card-title">近畿大学</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card_YourSchool">
            <!-- <img class="card-img" src="../assets/images/kindai_high.jpg" alt> -->
            <div class="card-content">
              <h3 class="card-title">近畿大学付属高等学校</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card_YourSchool">
            <!-- <img class="card-img" src="../assets/images/kindai_tyu.jpg" alt> -->
            <div class="card-content">
              <h3 class="card-title">近畿大学付属中学校</h3>
            </div>
          </section>
        </a>
      </div>
      <div class="item">
        <a href="http://webcreatorbox.com/about">
          <section class="card_YourSchool">
            <!-- <img class="card-img" src="../assets/images/jyounan.jpg" alt> -->
            <div class="card-content">
              <h3 class="card-title">城南学園小学校</h3>
            </div>
          </section>
        </a>
      </div>
    </div>
  </div>
</template>


<script>
// import Homeimg1 from "~/assets/img/schoolimg/top001.jpg";
// import Homeimg2 from "~/assets/img/topimg/top002.jpg";
// import Homeimg3 from "~/assets/img/topimg/top003.jpg";
// import Homeimg4 from "~/assets/img/topimg/jyounan.jpg";
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
.container_YourSchool {
  margin: 0 5%;
}

.container_school {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item a {
  text-decoration: none;
}

.card_YourSchool {
  width: 276px;
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
.container_YourSchool h2 {
  text-align: left;
  margin-bottom: 1%;
  padding: 0.25em 0.5em; /*上下 左右の余白*/
  color: #494949; /*文字色*/
  background: transparent; /*背景透明に*/
  border-left: solid 0.4em #ffe65d; /*左線*/
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

.item a {
  text-decoration: none;
}

.img {
  box-shadow: 2px 2px 4px gray;
}
</style>