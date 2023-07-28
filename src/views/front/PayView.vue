<script>
import { Swal } from '@/methods/swalToast'
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import { Toast } from '../../methods/swalToast';
const { VITE_URL, VITE_PATH } = import.meta.env
export default{
  data() {
    return {
      order: {},
      orderId: '',
      user: {},
      payProducts: [],
      originTotal: 0,
      payMethod: '請選擇'
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'cartNum'])
  },
  methods:{
    ...mapActions(cartStore, ['getCart']),
    getOrder() {
      const { orderId } = this.$route.params
      this.$http.get(`${VITE_URL}api/${VITE_PATH}/order/${orderId}`)
        .then((res) => {
          this.order = res.data.order
          this.orderId = res.data.order.id
          this.user = res.data.order.user
          const defaultProducts = res.data.order.products
          this.payProducts = Object.keys(defaultProducts).map(function (key) { return defaultProducts[key] })
          if (this.payProducts[0]?.coupon?.percent !== undefined) {
            const orderPercent = this.payProducts[0].coupon.percent
            this.originTotal = parseInt(this.order.total / orderPercent * 100)
          }
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    payConfirm(){
      if(this.order.is_paid){
        Swal.fire({
          icon: 'warning',
          title: '您已付款完成',
          confirmButtonColor: '#ab7e52'
        })
      }else{
        if(this.payMethod !== '請選擇'){
          this.$http.post(`${VITE_URL}api/${VITE_PATH}/pay/${this.orderId}`)
          .then((res) => {
            Toast.fire({
              icon: 'success',
              title: res.data.message,
            })
            this.getOrder()
          })
          .catch((err) =>{
            Swal.fire({
              icon:'error',
              title: err.response.data.message,
              confirmButtonColor: '#ab7e52'
            })
          })
        }else{
          Swal.fire({
            icon:'warning',
            title:'請先選擇付款方式',
            confirmButtonColor: '#ab7e52'
          })
        }
      }
    }
  },
  mounted() {
    this.getOrder()
    this.getCart()
  }
}
</script>
<template>
  <div class="bg-light" style="padding-top: 3rem; padding-bottom: 4rem; min-height: 95vh;">
      <div v-if="order.is_paid" class="container" style="height: 52vh;">
        <div class="row justify-content-center px-4 mx-lg-5 mt-lg-5">
          <p class="text-center m-0 py-5 text-primary fs-1"><i class="bi bi-check2-circle text-success"></i> 付款成功，訂單已成立!</p>
          <p class="text-center fs-3 text-secondary mb-3">訂單編號：<span class="accent-color">{{ order.id }}</span></p>
          <p class="text-center  fs-3">感謝您的訂購！非常感激您對我們產品的信任和支持。</p>
          <p class="text-center  fs-3">您的滿意是我們最大的追求，期待為您提供更優質的服務！</p>
          <div class="row col-md-6 justify-content-between" style="padding-top: 4vh;">
            <router-link to="/products" class="btn text-tertiary col-6 col-md-auto d-flex align-items-center goShop ps-0 border-0"><div class="pic pic1 me-2"></div>繼續購物</router-link>
            <router-link to="/" class="btn btn-primary col-6 col-md-auto border-0 rounded-0 px-5">回到首頁</router-link>
          </div>
        </div>
      </div>
      <div v-else class="container">
        <div class="row justify-content-between px-4 pt-5 mx-lg-5">
          <p class="text-center ls-2 m-0 text-danger fs-1"><i class="bi bi-exclamation-circle"></i> 提醒您!訂單尚未完成</p>
          <p class="text-center  letter-spacing m-0 pt-3 fs-4">請於下方選譯付款方式後，按下<span class="bg-primary text-light px-5 py-2 fs-6">確認付款</span>，即可完成訂購!</p>
        </div>
        <div class="row justify-content-center pt-5 px-4 mx-lg-5">
          <div class="col-md-6 bg-quaternary px-0">
            <h2 class="text-center py-2 bg-secondary text-white">訂單明細</h2>
            <div class="d-flex mb-2 px-3 mt-6" v-for="(product, i) in order.products" :key="i">
              <div style="width: 55px;max-height: 48px;background-size: cover;background-position: center;" class="rounded-0 me-3" :style="{ backgroundImage: `url(${product.product.imageUrl})` }" :alt="product.product.title"></div>
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ product.product.title }}</p>
                  <p class="mb-0">NT$ {{ $filters.currency(product.product.price) }}</p>
                </div>
                <p class="mb-0 fw-bold">x {{ product.qty }}</p>
              </div>
            </div>

            <div class="px-3">
              <table class="table mt-4 border-top border-bottom border-tertiary">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 font-weight-normal">小計</th>
                    <td class="text-end border-0 px-0" v-if="originTotal !== 0">NT$ {{ $filters.currency(originTotal) }}</td>
                    <td class="text-end border-0 px-0" v-else>NT$ {{ $filters.currency(order.total) }}</td>
                  </tr>
                  <tr v-if="originTotal !== 0">
                    <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">折扣金額</th>
                    <td class="text-end accent-color border-0 px-0 pt-0">{{ order.total - originTotal }}</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4 mb-4 ">
                <p class="mb-0 h4 fw-bold">總計</p>
                <p class="mb-0 h4 fw-bold">NT$ {{ $filters.currency(order.total) }}</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <h2 class="text-center py-2 bg-secondary text-light">客戶資訊</h2>
            <div class="pb-3">
              <div class="px-3 m-auto">
                <div class="mb-3">
                  <p class="mb-1">Email：</p>
                  <p>{{ this.user.email }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">收件人姓名：</p>
                  <p>{{ this.user.name }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">收件人電話：</p>
                  <p>{{ this.user.tel }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">收件人地址：</p>
                  <p>{{ this.user.address }}</p>
                </div>
              </div>
            </div>
            <h2 class="text-center py-2 bg-secondary text-light">訂單資訊</h2>
            <div class="pb-3">
              <div class="px-3 m-auto">
                <div class="mb-3">
                  <p class="mb-1">訂單日期：</p>
                  <p>{{ $filters.date(order.create_at) }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">訂單編號：</p>
                  <p>{{ order.id }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">訂單金額：</p>
                  <p>NT$ {{ $filters.currency(order.total) }}</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">付款狀態：</p>
                  <p class="text-success fs-5 m-0" v-if="order.is_paid">付款完成</p>
                  <p class="fs-5 m-0" v-else>尚未付款</p>
                </div>
                <div class="mb-3">
                  <p class="mb-1">付款方式：</p>
                  <form class="col col-12">
                    <select name="" id="" class="form-select" v-model="payMethod" style="border-radius: 0;">
                      <option selected disabled>請選擇</option>
                      <option value="貨到付款">貨到付款</option>
                      <option value="銀行轉帳/ATM">銀行轉帳/ATM</option>
                      <option value="信用卡">信用卡</option>
                      <option value="LINE_Pay">LINE Pay</option>
                    </select>
                  </form>
                </div>
                <div class="mb-3" v-if="order.message">
                  <p class="mb-1">訂單備註：</p>
                  <p>{{ order.message }}</p>
                </div>
                <div class="mb-3">
                  <button type="button" class="btn btn-primary rounded-0 w-100" style="padding-left: 1.5rem;" @click="payConfirm">確認付款</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="order.is_paid" class="row justify-content-between px-4 mx-lg-5" style="padding-top: 4vh;">
          <router-link to="/products" class="btn btn-outline-n500 col-6 col-md-auto">繼續購物</router-link>
          <router-link to="/" class="btn btn-custom col-6 col-md-auto text-decoration-none" style="padding-left: 1.5rem;">回到首頁</router-link>
        </div>
        
      </div>
    </div>
</template>