<script>
import { mapState } from 'pinia';
import newsStore from '../../stores/news';
  export default{
    data(){
      return{
        singleNews:{}
      }
    },
    computed:{
      ...mapState(newsStore,['news'])
    },
    methods:{
      getNews(){
        const id = parseInt(this.$route.params.news_id)
        this.singleNews = this.news.find(item => item.news_id === id)
      }
    }, 
    mounted(){
      this.getNews()
    }
  }
</script>
<template>
  <div class="container-fluid bg-quaternary">
    <div class="container">
      <div class="row justify-content-center pt-7 pb-8 single-news">
        <div class="col-lg-5">
          <div class="news-category" data-aos="fade-zoom-in" data-aos-offset="0" data-aos-easing="ease-in-sine">
            <div class="fs-6 text-primary roboto ls-3">{{ singleNews.en_title }}</div>
            <div class="fs-2 mb-sm-5 mb-7 text-primary">{{ singleNews.news_title }}</div>
          </div>
          <img class="single-news-img" data-aos="fade-right" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600" :src="singleNews.news_img" alt="singleNews.news_title">
        </div>
        <div class="col-lg-6 position-relative" data-aos="fade-left" data-aos-offset="100" data-aos-easing="ease-in-sine" data-aos-duration="600">
          <div class="card-rounded p-5 bg-light w-100">
            <div class="fs-5 mb-2">{{ singleNews.news_title }}</div>
            <div class="fs-7">{{ singleNews.news_content }}</div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center pt-5 pb-8">
        <RouterLink :to="`/news`" class="btn btn-outline-secondary mt-3 px-6 py-2 rounded-0">消息總覽</RouterLink>
      </div>
    </div>
  </div>
</template>