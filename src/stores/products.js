import { defineStore } from "pinia";
const { VITE_URL, VITE_PATH } = import.meta.env;
import axios from 'axios';
import { Swal } from '@/methods/swalToast';
const productsStore = defineStore('product',{
  state:() => {
    return{
      products: [],
      pageProducts:[],
      pagination: {},
      isLoading: true,
      fullPage: true,
      categories: ['全部商品', '頂級茶道系列', '純天然鮮奶茶系列'],
      filterCategory: '全部商品',
    }
  },
  actions:{
    getAllProducts() {
      this.isLoading = true
      axios.get(`${VITE_URL}api/${VITE_PATH}/products/all`)
        .then((res) => {
          this.isLoading = false
          this.products = res.data.products
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response?.data?.message || '資料取得失敗',
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    getProducts(page = 1) {
      this.isLoading = true
      axios.get(`${VITE_URL}api/${VITE_PATH}/products/?page=${page}`)
        .then((res) => {
          this.isLoading = false
          this.pageProducts = res.data.products
          this.pagination = res.data.pagination
          // console.log(res.data);
        })
        .catch((err) => {
          Swal.fire({
            icon: 'error',
            title: err.response?.data?.message || '資料取得失敗',
            confirmButtonColor: '#ab7e52'
          })
        })
    },
    changeCategory(category) {
      this.filterCategory = category;
    },
  }, 
  getters: {
    filterProducts: ({ products, pageProducts, filterCategory }) => {
      if (filterCategory === '全部商品') {
        return pageProducts;
      }
      return products.filter((product) => (product.category === filterCategory));
    },
  },
})

export default productsStore