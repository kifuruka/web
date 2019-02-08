<template>
  <div>
    <img :src="img" alt>
    <div class="Section--mt15">
      <div id="HomeVisual" class="HomeVisual">
        <div class="HomeVisual__in">
          <div class="HomeVisual__body">
            <div class="HomeVisual__set">
              <div class="HomeVisual__set__in">
                <div class="HomeVisual__bnrs--1">
                  <div class="HomeVisual__bnrs__item--1" id="rt_top_slide">
                    <!-- <script>
                    Rtoaster.hide();
                    </script>-->
                    <a href="#" class="Rollover">
                      <img :src="img" alt="トップスライド１" width="980" height="286" decoding="async">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <!--▲レコメンド-->
            <div class="HomeVisual__set">
              <div class="HomeVisual__set__in">
                <div class="HomeVisual__bnrs--1">
                  <div class="HomeVisual__bnrs__item--1">
                    <a href="#" class="Rollover" id="sliderPc01">
                      <img
                        src="@/assets/topslide01.jpg"
                        alt="#"
                        width="980"
                        height="286"
                        decoding="async"
                      >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="HomeVisual__arrow"></div>
        </div>
        <div class="HomeVisual__pointer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import TopSlide01Image from "~/assets/topslide01.jpg";
export default {
  data() {
    return {
      img: TopSlide01Image
    };
  }
};
</script>

<style>
/*  */
section {
  display: block;
  margin: 0;
}
section {
  padding: 0 10px 20px;
}
/*  */
.Section--mt15 {
  margin-top: 15px;
}

body.pc .Rollover:active,
body.pc .Rollover:hover {
  opacity: 0.6;
}

/*  */
.HomeVisual {
  position: relative;
  height: 310px;
  overflow: hidden;
  visibility: hidden;
}
.HomeVisual__in {
  position: relative;
  height: 286px;
}
.HomeVisual__body,
.HomeVisual__set,
.HomeVisual__set__in {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
.HomeVisual__bnrs__item--1,
.HomeVisual__bnrs__item--2,
.HomeVisual__bnrs__item--3,
.HomeVisual__bnrs__item--4,
.HomeVisual__bnrs__item--5,
.HomeVisual__bnrs__item--6,
.HomeVisual__bnrs__item--7,
.HomeVisual__bnrs__item--8 {
  position: absolute;
}
.HomeVisual__bnrs__item--1 {
  left: 0;
  top: 0;
}
.HomeVisual__bnrs__item--2 {
  left: 516px;
  top: 0;
}
.HomeVisual__bnrs__item--3 {
  left: 750px;
  top: 0;
}
.HomeVisual__bnrs__item--4 {
  left: 516px;
  top: 145px;
}
.HomeVisual__bnrs__item--5 {
  left: 750px;
  top: 145px;
}
.HomeVisual__bnrs--1 .HomeVisual__bnrs__item--1,
.HomeVisual__bnrs--2 .HomeVisual__bnrs__item--1 {
  left: 0;
  top: 0;
}
.HomeVisual__bnrs--2 .HomeVisual__bnrs__item--2 {
  left: 492px;
  top: 0;
}
.HomeVisual__bnrs--3 .HomeVisual__bnrs__item--1 {
  left: 0;
  top: 0;
}
.HomeVisual__bnrs--3 .HomeVisual__bnrs__item--2 {
  left: 492px;
  top: 0;
}
.HomeVisual__bnrs--3 .HomeVisual__bnrs__item--3 {
  left: 738px;
  top: 0;
}
.HomeVisual__bnrs--3 .HomeVisual__bnrs__item--4 {
  left: 492px;
  top: 145px;
}
.HomeVisual__bnrs--3 .HomeVisual__bnrs__item--5 {
  left: 738px;
  top: 145px;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--1 {
  left: 0;
  top: 0;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--2 {
  left: 246px;
  top: 0;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--3 {
  left: 492px;
  top: 0;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--4 {
  left: 738px;
  top: 0;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--5 {
  left: 0;
  top: 145px;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--6 {
  left: 246px;
  top: 145px;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--7 {
  left: 492px;
  top: 145px;
}
.HomeVisual__bnrs--4 .HomeVisual__bnrs__item--8 {
  left: 738px;
  top: 145px;
}
.HomeVisual__arrow > div {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 80px;
  margin-top: -40px;
  line-height: 1;
  cursor: pointer;
}
.HomeVisual__arrow > div:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.6;
}
.HomeVisual__arrow > div:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  width: 0;
  height: 0;
  margin-top: -5px;
  border: 5px solid transparent;
}
.HomeVisual__arrow > div.js-prev {
  left: 0;
}
.HomeVisual__arrow > div.js-prev:before {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4p x;
}
.HomeVisual__arrow > div.js-prev:after {
  left: 11px;
  border-right: 7px solid #fff;
}
.HomeVisual__arrow > div.js-next {
  right: 0;
}
.HomeVisual__arrow > div.js-next:before {
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4p x;
}
.HomeVisual__arrow > div.js-next:after {
  right: 11px;
  border-left: 7px solid #fff;
}
.HomeVisual__pointer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  font-size: 0;
  line-height: 1;
  text-align: center;
}
.HomeVisual__pointer > div {
  display: inline-block;
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 1px;
  cursor: pointer;
}
.HomeVisual__pointer > div:before {
  content: "";
  display: block;
  position: absolute;
  left: 4px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background: #ccc;
  vertical-align: bottom;
}
.HomeVisual__pointer > div.js-current {
  cursor: default;
}
.HomeVisual__pointer > div.js-current:before {
  background: hsl(41, 98%, 54%);
  opacity: 1 !important;
}
body.pc .HomeVisual__arrow > div:active,
body.pc .HomeVisual__arrow > div:hover,
body.pc .HomeVisual__pointer > div:active:before,
body.pc .HomeVisual__pointer > div:hover:before {
  opacity: 0.6;
}
</style>
