<template>
  <div class="container my-6">
    <div class="row justify-content-center flex-lg-row flex-column-reverse ">
      <div class="col-lg-6">
        <div class="d-flex">
          <div class="text-tertiary active me-2">
            購物車
            ⇀
          </div>
          <div class="text-secondary me-2">
            訂單資訊
            ⇀
          </div>
          <div class="text-tertiary">結帳</div>
        </div>
        <div class="d-flex justify-content-between mb-3">
          <span class="fs-4">訂單資訊</span>
        </div>
        <VForm ref="form" v-slot="{ errors }">
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <VField
              id="email"
              name="email"
              type="email"
              class="form-control"
              :class="{ 'is-invalid': errors['email'] }"
              placeholder="請輸入 Email"
              rules="email|required"
              v-model="form.user.email"
            />
            <ErrorMessage name="email" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="name" class="form-label">收件人姓名</label>
            <VField
              id="name"
              name="姓名"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['姓名'] }"
              placeholder="請輸入姓名"
              rules="required"
              v-model="form.user.name"
            />
            <ErrorMessage name="姓名" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label">收件人電話</label>
            <VField
              id="tel"
              name="電話"
              type="tel"
              class="form-control"
              :class="{ 'is-invalid': errors['電話'] }"
              placeholder="請輸入電話"
              rules="required|min:8|max:10|numeric"
              v-model="form.user.tel"
            />
            <ErrorMessage name="電話" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">收件人地址</label>
            <VField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
            />
            <ErrorMessage name="地址" class="invalid-feedback" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">留言</label>
            <textarea
              id="message"
              class="form-control"
              cols="30"
              rows="10"
              v-model="form.message"
            ></textarea>
          </div>
          <div
            class="d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"
          >
            <div>
              <RouterLink :to="`/carts`" type="button" class="btn text-tertiary  w-100 border-0 rounded-0 d-flex align-items-center goShop ps-0" style="box-shadow: none;">
                <div class="pic pic1 me-2"></div>
                回購物車
              </RouterLink>
            </div>
            <div class="text-end">
              <button type="button" @click.prevent="() => creatOrder()" class="btn btn-primary w-100 border-0 rounded-0 px-5">
                送出訂單
              </button>
            </div>
          </div>
        </VForm>
      </div>
      <div class="col-lg-4">
        <div class="border p-4 mb-4 bg-light">
          <div class="d-flex mb-2" v-for="item in carts.carts" :key="item.id">
            <div style="width: 55px;max-height: 48px;background-size: cover;background-position: center;" class="rounded-0 me-3" :style="{ backgroundImage:`url(${item.product.imageUrl})`}"></div>
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{item.product.title}}</p>
                <p class="mb-0">NT$ {{ item.product.price }}</p>
              </div>
              <p class="mb-0 fw-bold">x {{ item.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">NT${{ carts.total }}</td>
              </tr>
              <tr v-if="carts.total !== carts.final_total">
                <th scope="row" class="border-0 px-0 pt-0 font-weight-normal">折扣金額</th>
                <td class="text-end accent-color border-0 px-0 pt-0">-{{ $filters.currency(carts.total - carts.final_total) }}</td>
              </tr>
            </tbody>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <input
              type="text"
              class="form-control"
              v-model="coupon_code"
              placeholder="請輸入優惠碼"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-primary rounded-0"
                type="button"
                @click="addCouponCode"
              >
                套用優惠碼
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">總計</p>
            <p class="mb-0 h4 fw-bold">NT${{ $filters.currency(carts.final_total) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import { mapActions, mapState } from 'pinia';
import cartStore from '../../stores/cart';
import { Toast,Swal } from '../../methods/swalToast';
const { VITE_URL, VITE_PATH } = import.meta.env;

export default {
  data(){
    return {
      form:{
        user:{
          name:'',
          email:'',
          tel:'',
          address:''
        },
        message:'',
      },
      coupon_code: '88888'
    }
  },
  computed:{
    ...mapState(cartStore,['carts','cartNum'])
  },
  methods:{
    ...mapActions(cartStore,['getCart']),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '須為正確的手機號碼 (ex：0912345678)'
    },
    addCouponCode() {
      if (this.cartNum) {
        const coupon = {
          code: this.coupon_code
        }
        this.$http.post(`${VITE_URL}api/${VITE_PATH}/coupon`, { data: coupon })
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: '套用優惠券'
            })
            this.getCart();
            this.coupon_code = '';
          })
          .catch((err) => {
            Swal.fire({
              icon: 'error',
              title: err.response?.data?.message,
              confirmButtonColor: '#ab7e52'
            })
          })
      } else {
        Toast.fire({
          icon: 'warning',
          title: '請先選購產品'
        })
      }
    },
    creatOrder(){
      const order = this.form
      this.$http.post(`${VITE_URL}api/${VITE_PATH}/order`, { data: order })
      .then((res)=>{
        console.log(this.$route.params);
        Toast.fire({
          icon:'success',
          title:res.data.message
        })
        this.$refs.form.resetForm()
        this.form.message = ''
        this.coupon_code =''
        this.getCart()
        this.linkToPay(res.data.orderId)
      })
      .catch(()=>{
        if(this.cartNum === 0){
          Swal.fire({
            icon:'error',
            title: '您尚未選購產品',
            text: '請您將產品加入購物車後，再次送出訂單，謝謝!',
            confirmButtonColor: '#482D0D'
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: '客戶資訊漏填',
            text: '請將客戶資訊填寫完整後，再次送出訂單，謝謝!',
            confirmButtonColor: '#482D0D'
          })
        }
      })
    },
    linkToPay(orderId){
      this.$router.push(`/pay/${orderId}`)
    }
  },
  mounted(){
    this.getCart()
  }
}

</script>