import{j as c,bJ as r}from"./index-00d10242.js";import{S as s}from"./cart-fbb657ad.js";const{VITE_URL:i,VITE_PATH:n}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/TastyTeaCo/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p=c("product",{state:()=>({products:[],pageProducts:[],pagination:{},isLoading:!0,fullPage:!0,categories:["全部商品","頂級茶道系列","純天然鮮奶茶系列"],filterCategory:"全部商品"}),actions:{getAllProducts(){this.isLoading=!0,r.get(`${i}api/${n}/products/all`).then(t=>{this.isLoading=!1,this.products=t.data.products}).catch(t=>{var e,o;s.fire({icon:"error",title:((o=(e=t.response)==null?void 0:e.data)==null?void 0:o.message)||"資料取得失敗",confirmButtonColor:"#ab7e52"})})},getProducts(t=1){this.isLoading=!0,r.get(`${i}api/${n}/products/?page=${t}`).then(e=>{this.isLoading=!1,this.pageProducts=e.data.products,this.pagination=e.data.pagination}).catch(e=>{var o,a;s.fire({icon:"error",title:((a=(o=e.response)==null?void 0:o.data)==null?void 0:a.message)||"資料取得失敗",confirmButtonColor:"#ab7e52"})})},changeCategory(t){this.filterCategory=t}},getters:{filterProducts:({products:t,pageProducts:e,filterCategory:o})=>o==="全部商品"?e:t.filter(a=>a.category===o)}});export{p};
