<script>
import { mapState, mapActions } from 'pinia';
import favoritesStore from '../../stores/favorite';
import cartStore from '../../stores/cart';
export default {
  computed:{
    ...mapState(favoritesStore,['favoritesList','getFavoritesNum']),
    ...mapState(cartStore,['loadingItem']),
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
    ...mapActions(favoritesStore,['toggleFavorite', 'isFavorite']),
    ...mapActions(cartStore,['addToCart']),
  },
}
</script>
<template>
  <section class="bg-quaternary py-6">
    <div class="container p-lg-0">
      <div class="best-seller-title px-0">
        <div class="fs-6 text-primary roboto ls-4">WISH LIST.</div>
        <div class="fs-2 mb-6 text-primary">慾望清單</div>
      </div>
      
      <div class="row" v-if="getFavoritesNum !== 0">

        <div class="products-item col-md-6 col-xl-4 col-xxl-3 mb-7" v-for="product in favoritesList" :key="product.id">
          <RouterLink :to="`/product/${product.id}`"  class="card text-white border-0 rounded-0 p-4 position-relative">
            <img :src="product.imageUrl" v-if="product.imageUrl" class="card-img rounded-0" :alt="product.title" style="height:12rem">
            <img v-else src="https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg" class="card-img rounded-0" :alt="product.title"  style="height:12rem">
            <div class="products-border card-img-overlay p-3">
              <p class="card-text text-2">{{ product.description }}</p>
            </div>
            <RouterLink :to="`/product/${product.id}`" class="products-btn text-light btn-decor fs-7 py-1 px-4  bg-transparent">MORE</RouterLink>
          </RouterLink>
          <button class="btn btn-tertiary text-primary w-100 border-0 rounded-0 roboto ls-2" :disabled="product.id === loadingItem" @click="() => addToCart(product.id)">
            <div class="spinner-border me-2"  v-if="loadingItem === product.id" style="width:1rem;height:1rem;border-width:0.15rem" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            ADD TO CART
          </button>
          <div class="border-bottom border-1 border-tertiary py-3">
            <div class="d-flex justify-content-between ">
              <div class="card-title fw-bold text-primary">{{ product.title }}</div>
              <a class="text-primary" style="cursor: pointer;">
                <i v-if="isFavorite(product)" @click="() => toggleFavorite(product)" class="bi bi-bookmark-fill fs-4 position-absolute" style="right: 16px; top: 0; z-index: 5;"></i>
                <i v-else @click="() => toggleFavorite(product)" class="bi bi-bookmark fs-4 position-absolute" style="right: 16px; top:0; z-index: 5;"></i>
              </a>
            </div>
            <div class="card-title fw-bold text-primary">${{ product.price }}</div>
          </div>
        </div>  
      </div>
      <div v-else>
        <p class="text-center fs-2 text-primary">您尚未收藏任何產品！</p>
      </div>
      <div class="d-flex justify-content-center">
        <RouterLink :to="`/products`" class="btn btn-outline-secondary mt-3 px-6 py-2 rounded-0">繼續購物</RouterLink>
      </div>
    </div>
  </section>
</template>