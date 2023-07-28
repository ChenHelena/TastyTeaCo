<script>
import { RouterLink } from 'vue-router';
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import favoritesStore from '../../stores/favorite';
import Pagination from '../../components/PaginationView.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import productsStore from '../../stores/products';
export default {
  components: {
    RouterLink,
    Pagination,
    Loading,
  },
  computed: {
    ...mapState(favoritesStore, ['favoritesList']),
    ...mapState(cartStore,['loadingItem']),
    ...mapState(productsStore,['products','pagination','isLoading','fullPage','categories','filterCategory', 'filterProducts'])
  },
  watch: {
    favoritesList: {
      handler() {
        localStorage.setItem('favoritesList', JSON.stringify(this.favoritesList))
      },
      deep: true
    },
    filters: {
      handler() {
        this.currentPage = 1;
      },
      deep: true,
    },
  },
  methods: {
    ...mapActions(favoritesStore, ['isFavorite', 'toggleFavorite', 'removeFavorite']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(productsStore, ['getProducts','changeCategory', 'getAllProducts']),
    onClickPage() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
  mounted() {
    this.getProducts()
    this.getAllProducts()
  },
}
</script>
<template>
  <section class="products pt-6 pb-8 bg-quaternary">
    <div class="container p-lg-0">
      <Loading v-model:active="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage">
        <div class="loadingio-spinner-spin-tpwzrzmjz3o" style="background-color: transparent;"><div class="ldio-8hxqfx8rfhg"><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div></div>
      </Loading>
      <div class="best-seller-title px-0">
        <div class="fs-6 text-primary roboto ls-4">BEST SELLERS.</div>
        <div class="fs-2 mb-5 text-primary">熱銷產品</div>
      </div>
      <div class="row">
        <div class="col-lg-2 col-md-3 mb-3">
          <ul class="list-group rounded-0">
            <li
              class="list-group-item"
              style="cursor: pointer"
              v-for="category in categories"
              :key="category"
              @click.prevent="changeCategory(category)"
              @click="onClickPage()"
              :class="{ active: category === filterCategory }"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <div class="col-lg-10 col-md-9">
          <div class="row">
            <div class="col-lg-4 col-md-6 products-item mb-7" v-for="product in filterProducts" :key="product.id">
              <RouterLink :to="`/product/${product.id}`"  class="card text-white border-0 rounded-0 p-4 position-relative">
                <img :src="product.imageUrl" v-if="product.imageUrl" class="card-img rounded-0" :alt="product.title" style="height: 12rem;">
                <img v-else src="https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg" class="card-img rounded-0" :alt="product.title" style="height: 12rem;">
                <div class="products-border card-img-overlay p-3">
                  <!-- <p class="card-text" style="text-overflow: ellipsis;white-space: nowrap;overflow:hidden;" v-if="product.content">{{ product.content }}</p>
                  <p class="card-text" v-else>無說明</p> -->
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
        </div>
      </div>
      <Pagination :pages="pagination" @emit-pages="getProducts" v-if="filterCategory === '全部商品'"></Pagination>
    </div>
  </section>
  
</template>


