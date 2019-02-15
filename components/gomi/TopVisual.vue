<template>
  <div class="top">
    <div class="mainContainer">
      <div class="harfBox">
        <a href="#">
          <img :src="img1" alt="トップスライド１" decoding="async">
        </a>
      </div>
      <div class="harfBox">
        <div class="upBox">
          <div class="innerBox1">
            <a href="#">
              <img :src="img2" alt="トップスライド2" decoding="async">
            </a>
          </div>
          <div class="innerBox2">
            <a href="#">
              <img :src="img3" alt="トップスライド3" decoding="async">
            </a>
          </div>
        </div>
        <div class="underBox">
          <a href="#">
            <img :src="img4" alt="トップスライド4" decoding="async">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// TODO:画像スライドのJSを書く
// TODO:スライドスタイルの追加
import TopImage1 from "~/assets/img/topimg/top1.jpg";
import TopImage2 from "~/assets/img/topimg/top2.jpg";
import TopImage3 from "~/assets/img/topimg/top3.jpg";
import TopImage4 from "~/assets/img/topimg/top4.jpg";

export default {
  data() {
    return {
      img1: TopImage1,
      img2: TopImage2,
      img3: TopImage3,
      img4: TopImage4
    };
  }
};
</script>

<style scoped>
/* .top{

} */

.mainContainer {
  /* -webkit-box-sizing: border-box; */
  margin: 0 auto;
  width: 1520px;
  height: 575px;
  background-color: beige;
  /* paddCing: 16px; */
  display: flex;
  position: relative;
}

.harfBox {
  position: absolute;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 50%;
  height: 100%;
  /* background-color: rgb(228, 228, 0); */
  padding: 16px;
}
.upBox {
  margin: 0 auto;
  width: 100%;
  height: 47.2%;
  /* background-color: rgb(231, 60, 29); */
  padding: 0;
  display: flex;
}
.innerBox1 {
  width: 50%;
  height: 100%;
  /* background-color: rgb(18, 72, 221); */
  padding-right: 16px;
}
.innerBox2 {
  width: 50%;
  height: 100%;
  /* background-color: rgb(18, 72, 221); */
  padding-left: 16px;
}
.underBox {
  margin: 0 auto;
  width: 100%;
  height: 47.2%;
  /* background-color: rgb(29, 204, 102); */
  padding-top: 32px;
}
.topVisual {
  width: 960px;
  max-height: 288px;
  margin: 0 auto;
  padding: 0;
}

img {
  width: 100%;
  margin: 0;
  height: 100%;
}
</style>
