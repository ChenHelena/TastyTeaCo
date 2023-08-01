<template>
  <div class="news-latest bg-quaternary pb-8">
    <div class="container py-7">
      <div class="row mx-md-9">
        <div class="news-category" data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine">
          <div class="fs-6 text-primary roboto ls-3">THE LATEST.</div>
          <div class="fs-2 mb-sm-5 mb-7 text-primary">最新消息</div>
        </div>
        <div class="col-md-4 position-relative" data-aos="fade-up" data-aos-offset="0" data-aos-easing="ease-in-sine" data-aos-duration="500" v-for="item in news" :key="item.news_id">
          <div class="arrivals" v-if="item.new_arrivals">新品上市</div>
          <div class="card mb-3 rounded-0" >
            <div class="card-img rounded-0" v-bind:style="{ 'background-image': 'url(' + item.news_img + ')' }">
              
              <div class="overlay">
                <div class="overlay-content">
                  <RouterLink :to="`/news/${item.news_id}`" class="nav-link text-sm-light">View</RouterLink>
                </div>
              </div>
            </div>
          
            <div class="card-content">
              <a href="#!">
                <h2>{{ item.news_title }}</h2>
                <p>{{ item.en_title }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'pinia';
import $ from 'jquery';
import newsStore from '../../stores/news';
import { RouterLink } from 'vue-router';
export default {
  computed:{
    ...mapState(newsStore,['news'])
  },
  components:{
    RouterLink
  },
}

$(document).ready(function () {
  $('.news-latest .card').delay(1800).queue(function (next) {
    $(this).removeClass('hover');
    $('a.hover').removeClass('hover');
    next();
  });
});

</script>