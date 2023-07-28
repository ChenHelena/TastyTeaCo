<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import { Swal } from '@/methods/swalToast';
import favoritesStore from '../../stores/favorite';
import productsStore from '../../stores/products';
import Swiper from 'swiper';
import 'swiper/swiper.css';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default{
  data() {
    return {
      product: {},
      quantity: 1,
      mainImg:'',
      relativeProduct: [],
    }
  },
  computed: {
    ...mapState(cartStore, ['carts']),
    ...mapState(favoritesStore,['favoritesList']),
    ...mapState(productsStore,['products']),
  },
  watch: {
    favoritesList: {
      handler() {
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList))
      },
      deep: true
    }
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
          this.mainImg = res.data.product.imageUrl
          this.getRelative();
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response?.data?.message || '資料錯誤',
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    getQuantity(){
      if(this.quantity < 1){
        this.quantity = 1;
        return
      }
    },
    getRelative() {
      const { category, id } = this.product;
      this.relativeProduct = this.products.filter(
        (item) => item.category === category && item.id !== id,
      );
    },
    showImg(url){
      this.mainImg = url
    },
    ...mapActions(favoritesStore, ['isFavorite', 'toggleFavorite', 'removeFavorite']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getAllProducts'])
  },
  mounted() {
    this.getProduct();
    this.getAllProducts();
    // eslint-disable-next-line no-unused-vars
    var swiper5 = new Swiper(".mySwiper5", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
      },
      breakpoints: {
        200: {
          slidesPerView: 1.2,
          spaceBetween: 16,
        },
        576: {
          slidesPerView: 2.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
}
</script>
<template>
  <div class="container my-7">
    <div class="card mb-3 mx-auto border-0">
      <div class="row g-0">
        <div class="col-md-7">
          
          <div class="text-center overflow-hidden position-relative">
            <a class="text-primary" style="cursor: pointer;">
              <i v-if="isFavorite(product)" @click="() => toggleFavorite(product)" class="bi bi-bookmark-fill fs-4 position-absolute" style="right: 16px; top: 16px;z-index: 2;"></i>
              <i v-else @click="() => toggleFavorite(product)" class="bi bi-bookmark fs-4 position-absolute" style="right: 16px; top: 16px;z-index: 2;"></i>
            </a>
            <img :src="mainImg" :alt="product.title" class="card-img-top rounded-0 object-fit-cover mainImg">
          </div>
          <div class="row my-4">
            <div class="col-3 text-center overflow-hidden">
              <img :src="product.imageUrl" :alt="product.title" class="card-img-top rounded-0 object-fit-cover smImg" @click.prevent="() => showImg(product.imageUrl)" style="cursor: pointer;">
            </div>
            <div class="col-3 text-center overflow-hidden" v-for="(imgItem, i) in product.imagesUrl" :key="i">
              <img :src="imgItem" :alt="product.title" class="card-img-top rounded-0 object-fit-cover smImg" @click.prevent="() => showImg(imgItem)" style="cursor: pointer;">
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="card-body h-100 d-flex flex-column justify-content-between">
            <div class="card-item">
              <h4 class="card-title text-primary fw-bold">{{ product.title }}</h4>
              <p class="card-text fs-3 text-secondary my-3">$ {{ product.price }}</p>
              <div class="card-body-content my-5">
                <ul class="nav nav-pills" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">產品資訊</a>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">產品描述</button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    <p class="card-text text-dark opacity-75 my-4" v-if="product.content">{{ product.content }}</p>
                    <p class="card-text text-dark opacity-75 my-4" v-else>無說明</p>
                  </div>
                  <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                    <p class="card-text text-dark opacity-75 my-4" v-if="product.description">{{ product.description }}</p>
                    <p class="card-text text-dark opacity-75 my-4" v-else>無描述</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-item">
              <div class="quantity-toggle my-3">
                <button @click="() => quantity--" :disabled="quantity === 1">&mdash;</button>
                <input type="text" v-model.number="quantity" min="1" @change="getQuantity()">
                <button @click="() => quantity++">&#xff0b;</button>
              </div>
              <button type="button" class="btn btn-primary me-3 px-6 rounded-0" @click="() => addToCart(product.id, quantity)">加入購物車</button>
              <button type="button" class="btn btn-outline-secondary px-7 rounded-0" @click="() => addToCart(product.id, quantity)">立即購買</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="best-seller-title px-0 mt-9">
        <div class="fs-6 text-primary roboto ls-4">SIMILLER PRODUCT.</div>
        <div class="fs-2 mb-8 text-primary ls-2">猜你可能喜歡</div>
      </div>
    </div>

    <div class="swiper-container">
      <!-- Swiper -->
      <div class="swiper mySwiper5">
        <div class="swiper-wrapper container-md ps-0">
          <div class="swiper-slide" v-for="item in relativeProduct" :key="item.id">
            <div class="card rounded-0">
              <img :src="item.imageUrl" alt="product.title" style="height: 20rem;">
              <div class="card-body">
                <div class="card-title fs-4 mb-3 text-dark">{{ item.title }}</div>
                <p class="card-text fs-8 mb-7 text-dark opacity-75 text-2">{{ item.content }}</p>
                <a class="btn btn-outline-primary border-0 rounded-0 px-0 roboto ls-2" :disabled="item.id === loadingItem" @click="() => addToCart(item.id)">
                  <div class="spinner-border me-2 text-primary" v-if="loadingItem === item.id" style="width:1rem;height:1rem;border-width:0.15rem" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="d-flex justify-content-center swiper-ctrl position-absolute" style="right: 5%;top: -3%;">
        <i class="swiper-button-next text-primary arrow-left"></i>
        <div class="swiper-pagination align-items-center d-flex"></div>
        <i class="swiper-button-prev text-primary arrow-right"></i>
      </div>
    </div>

  </div>
</template>
