<template>
    <div class="feature">
        <h2>参加学校</h2>
        <div class="container_feature">
            <div class="item">
                <a href="http://webcreatorbox.com/about">
                    <section class="card">
                        <div class="card-content">
                            <h3 class="card-title">麻布学園</h3>
                        </div>
                        <img class="card-img" src="../assets/images/azabu_logo.png" alt="">
                        <div class="card-content">
                            <h4 class="card-title">活動件数：5件</h4>
                        </div>
                    </section>
                </a>
            </div>
            <div class="item">
                <a href="http://webcreatorbox.com/about">
                    <section class="card">
                        <div class="card-content">
                            <h3 class="card-title">近畿大学</h3>
                        </div>
                        <img class="card-img" src="../assets/images/kindai_logo.png" alt="">
                        <div class="card-content">
                            <h4 class="card-title">活動件数：5件</h4>
                        </div>
                    </section>
                </a>
            </div>
            <div class="item">
                <a href="http://webcreatorbox.com/about">
                    <section class="card">
                        <div class="card-content">
                            <h3 class="card-title">青山学院大学</h3>
                        </div>
                        <img class="card-img" src="../assets/images/aoyama_logo.png" alt="">
                        <div class="card-content">
                            <h4 class="card-title">活動件数：5件</h4>
                        </div>
                    </section>
                </a>
            </div>
            <div class="item">
                <a href="http://webcreatorbox.com/about">
                    <section class="card">
                        <div class="card-content">
                            <h3 class="card-title">酪農大学</h3>
                        </div>                        
                        <img class="card-img" src="../assets/images/rakuno_logo.png" alt="">
                        <div class="card-content">
                            <h4 class="card-title">活動件数：5件</h4>
                        </div>
                    </section>
                </a>
            </div>
        </div>

    <carousel :navigationEnabled="true">
                    <slide>
                        <span class="label">
                            <div class="item">
                                <a href="http://webcreatorbox.com/about">
                                    <section class="card">
                                        <div class="card-content">
                                            <h3 class="card-title">酪農大学</h3>
                                        </div>                        
                                        <img class="card-img" src="../assets/images/rakuno_logo.png" alt="">
                                        <div class="card-content">
                                            <h4 class="card-title">活動件数：5件</h4>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </span>
                      </slide>
                      <slide>
                        <span class="label">
                            <div class="item">
                                <a href="http://webcreatorbox.com/about">
                                    <section class="card">
                                        <div class="card-content">
                                            <h3 class="card-title">酪農大学</h3>
                                        </div>                        
                                        <img class="card-img" src="../assets/images/rakuno_logo.png" alt="">
                                        <div class="card-content">
                                            <h4 class="card-title">活動件数：5件</h4>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </span>
                      </slide>
                      <slide>
                        <span class="label">
                            <div class="item">
                                <a href="http://webcreatorbox.com/about">
                                    <section class="card">
                                        <div class="card-content">
                                            <h3 class="card-title">酪農大学</h3>
                                        </div>                        
                                        <img class="card-img" src="../assets/images/rakuno_logo.png" alt="">
                                        <div class="card-content">
                                            <h4 class="card-title">活動件数：5件</h4>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </span>
                      </slide>
                      <slide>
                        <span class="label">
                            <div class="item">
                                <a href="http://webcreatorbox.com/about">
                                    <section class="card">
                                        <div class="card-content">
                                            <h3 class="card-title">酪農大学</h3>
                                        </div>                        
                                        <img class="card-img" src="../assets/images/rakuno_logo.png" alt="">
                                        <div class="card-content">
                                            <h4 class="card-title">活動件数：5件</h4>
                                        </div>
                                    </section>
                                </a>
                            </div>
                        </span>
                    </slide>
    </carousel>
  </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
    Carousel,
    Slide
  }
};
</script>
<style>
.feature {
    margin: 5% 0%;
    padding: 5%;
    background-color: #333333;
}
.container_feature {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container h2  {
  position: relative;
  display: inline-block;
  margin-bottom: 2em;
  color:white;
}

.container h2:before {
  content: '';
  position: absolute;
  bottom: -15px;
  display: inline-block;
  width: 2.5rem;
  height: 0.2rem;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #FFE65D;
  border-radius: 2px;
}

.container h3  {
    font-size: 1rem;
}
.container h4  {
    font-size: 0.8rem;
}


.item  {
    margin-bottom:1%;
}


.item a {
    text-decoration:none;
}

.card {
  width: 200px;
  margin-right:10px;     
}
.card-img {
  border-radius: 0 0 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 1px;
}

h2 a {
  text-decoration: none;
}
.card-title {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    text-align: left;
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

/* スライダーjs */

.carousel {
  width:80%;
  border : 1px solid #ccc;
}

.slide {
  background-color : pink
}

</style>