import { defineStore } from 'pinia'
import axios from 'axios';
import { Toast, Swal } from '../../src/methods/swalToast';

const { VITE_URL, VITE_PATH } = import.meta.env;

const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: {},
      cartNum: 0,
      loadingItem: ''
    }
  },
  actions: {
    getCart() {
      axios.get(`${VITE_URL}api/${VITE_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data;
          this.cartNum = res.data.data.carts.length;
          // console.log(this.carts);
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    addToCart(product_id, qty = 1) {
      const data = {
        data: {
          product_id,
          qty,
        },
      };
      this.loadingItem = product_id
      axios.post(`${VITE_URL}api/${VITE_PATH}/cart`, data)
        .then((res) => {
          this.getCart();
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.loadingItem = ''
        })
        .catch((err)=>{
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    updateCartItem(item, qty) {
      this.loadingItem = item.id
      const data = {
        product_id: item.product.id,
        qty
      }
      axios.put(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          this.getCart()
          this.loadingItem = ''
          Toast.fire({
            icon:'success',
            title:res.data.message
          })

        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    deleteItem(item) {
      this.loadingItem = item.id;
      axios.delete(`${VITE_URL}api/${VITE_PATH}/cart/${item.id}`)
        .then((res) => {
          this.getCart()
          this.loadingItem = ''
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    deleteAllCarts() {
      axios.delete(`${VITE_URL}api/${VITE_PATH}/carts`)
        .then((res) => {
          Toast.fire({
            icon: 'success',
            title: res.data.message
          })
          this.getCart();
        })
    },
  },
});

export default cartStore;
