<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
const { VITE_URL, VITE_PATH } = import.meta.env;
export default{
  computed:{
    ...mapState(cartStore, ['carts','cartNum', 'loadingItem'])
  },
  methods:{
    getCarts() {
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
          // console.log(this.carts);
        })
    },
    ...mapActions(cartStore, ['getCart', 'updateCartItem','deleteItem','deleteAllCarts']),
  },
  mounted(){
    this.getCart()
  }
}
</script>
<template>
  <div class="container my-6" v-if="cartNum !== 0">
    <!-- 購物車列表 -->
    <div class="col-md-6 mx-auto">
      <div class="d-flex">
        <div class="text-secondary active me-2">
          購物車
          ⇀
        </div>
        <div class="text-tertiary me-2">
          訂單資訊
          ⇀
        </div>
        <div class="text-tertiary">結帳</div>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span class="fs-4">購物車</span>
        <div class="text-end">
          <button class="btn btn-outline-danger border-0 rounded-0 ls-2"  @click="() => deleteAllCarts()" type="button">清空購物車</button>
        </div>
      </div>
      <div class="d-flex mb-4 border"  v-for="item in carts.carts" :key="item.id">
        <a href="#">
          <img v-if="item.product.imageUrl" :src="item.product.imageUrl" alt="" style="width: 140px;height: 120px;">
          <img v-else src="https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg"
          alt="..." style="width: 140px;height: 120px;">
        </a>
        <div class="w-100 p-3 position-relative">
          <button type="button" class="btn text-primary position-absolute border-0 p-1" style="top:1rem;right:1rem;z-index: 9;box-shadow: none;" aria-label="Close" @click="() => deleteItem(item)" :disabled="item.id === loadingItem">
            <i class="fa-solid fa-x"></i>
          </button>
          <p>{{ item.product.title }}</p>
          <p>折扣後金額 : ${{ item.product.price }}</p>
          <div class="d-flex justify-content-between align-items-center mt-2">
            <div class="quantity-toggle">
              <button type="button" class="btn text-primary border-0"  @click="updateCartItem(item, item.qty - 1)"  :disabled="item.id === loadingItem || item.qty === 1"><i class="bi bi-dash-lg"></i></button>
              <input style="outline:none" type="text" v-model.number="item.qty" @change="() => updateCartItem(item, item.qty)" :disabled="item.id === loadingItem" min="1" onkeyup="this.value=this.value.replace(/\D/g,'')"/>
              <button type="button" class="btn text-primary border-0" @click="updateCartItem(item, item.qty + 1)" :disabled="item.id === loadingItem"><i class="bi bi-plus-lg"></i></button>
            </div>
            <p>${{ item.total }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="cart-title border-bottom border-primary mb-3">
            <div class="fs-8 text-primary roboto ls-4">Cart Total</div>
            <div class="fs-6 text-primary ls-4">購物車金額</div>
          </div>
          <div class="service-title text-center">
          
          </div>
          <div class="cart-subtotal d-flex justify-content-between my-2">
            <p>小計</p>
            <p>${{ carts.total }}</p>
          </div>
          <div class="cart-total d-flex justify-content-between">
            <h4 class="fw-bold">總計</h4>
            <h4 class="fw-bold">${{ carts.total }}</h4>
          </div>
          <div class="d-flex justify-content-between my-3">
            <div class="cart-button">
              <div>
                <RouterLink :to="`/products`" type="button" class="btn text-tertiary  w-100 border-0 rounded-0 d-flex align-items-center goShop ps-0" style="box-shadow: none;">
                  <div class="pic pic1 me-2"></div>
                  繼續購物
                </RouterLink>
              </div>
            </div>
            <div class="cart-button">
              <RouterLink to="/order">
                <button type="button" class="btn btn-primary w-100 border-0 rounded-0 px-5">確認訂單</button>
              </RouterLink>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  <div class="container text-center fs-3 my-10" v-else>
    <p class="fs-2 text-primary">購物車目前是空的，快來挑選商品吧！</p>
    <div class="cart-button">
      <div>
        <RouterLink :to="`/products`" type="button" class="fs-5 btn text-tertiary  w-100 border-0 rounded-0 d-flex align-items-center goShop ps-0 justify-content-center mt-3" style="box-shadow: none;">
          <div class="pic pic1 me-2"></div>
          繼續購物
        </RouterLink>
      </div>
    </div>
  </div>
</template>