import{_ as f,m as p,b as u,o as r,c as a,d as t,bE as m,F as b,h,t as l,bB as w,br as x,i as k,g as C}from"./index-f424abb6.js";import{S as I,c as v}from"./cart-a8120377.js";import{f as y}from"./favorite-9ddf9aff.js";import{p as _}from"./products-3a28b517.js";import{S}from"./swiper-4e842526.js";const{VITE_URL:T,VITE_PATH:P}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/vue-week0316/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={data(){return{product:{},quantity:1,mainImg:"",relativeProduct:[]}},computed:{...p(v,["carts"]),...p(y,["favoritesList"]),...p(_,["products"])},watch:{favoritesList:{handler(){localStorage.setItem("favoritesList",JSON.stringify(this.favoritesList))},deep:!0}},methods:{getProduct(){const{id:o}=this.$route.params;this.$http.get(`${T}api/${P}/product/${o}`).then(s=>{this.product=s.data.product,this.mainImg=s.data.product.imageUrl,this.getRelative()}).catch(s=>{var n,d;I.fire({icon:"error",title:((d=(n=s.response)==null?void 0:n.data)==null?void 0:d.message)||"資料錯誤",confirmButtonColor:"#ab7e52"})})},getQuantity(){if(this.quantity<1){this.quantity=1;return}},getRelative(){const{category:o,id:s}=this.product;this.relativeProduct=this.products.filter(n=>n.category===o&&n.id!==s)},showImg(o){this.mainImg=o},...u(y,["isFavorite","toggleFavorite","removeFavorite"]),...u(v,["addToCart"]),...u(_,["getAllProducts"])},mounted(){this.getProduct(),this.getAllProducts(),new S(".mySwiper5",{slidesPerView:3,spaceBetween:30,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"},breakpoints:{200:{slidesPerView:1.2,spaceBetween:16},576:{slidesPerView:2.5,spaceBetween:10},768:{slidesPerView:3}}})}},E={class:"container my-7"},q={class:"card mb-3 mx-auto border-0"},L={class:"row g-0"},R={class:"col-md-7"},U={class:"text-center overflow-hidden position-relative"},B={class:"text-primary",style:{cursor:"pointer"}},A=["src","alt"],D={class:"row my-4"},F={class:"col-3 text-center overflow-hidden"},j=["src","alt"],O=["src","alt","onClick"],M={class:"col-md-5"},N={class:"card-body h-100 d-flex flex-column justify-content-between"},z={class:"card-item"},H={class:"card-title text-primary fw-bold"},Q={class:"card-text fs-3 text-secondary my-3"},J={class:"card-body-content my-5"},G=t("ul",{class:"nav nav-pills",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("a",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home-tab-pane",type:"button",role:"tab","aria-controls":"home-tab-pane","aria-selected":"true"},"產品資訊")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile-tab-pane",type:"button",role:"tab","aria-controls":"profile-tab-pane","aria-selected":"false"},"產品描述")])],-1),K={class:"tab-content",id:"myTabContent"},W={class:"tab-pane fade show active",id:"home-tab-pane",role:"tabpanel","aria-labelledby":"home-tab",tabindex:"0"},X={key:0,class:"card-text text-dark opacity-75 my-4"},Y={key:1,class:"card-text text-dark opacity-75 my-4"},Z={class:"tab-pane fade",id:"profile-tab-pane",role:"tabpanel","aria-labelledby":"profile-tab",tabindex:"0"},$={key:0,class:"card-text text-dark opacity-75 my-4"},tt={key:1,class:"card-text text-dark opacity-75 my-4"},et={class:"card-item"},st={class:"quantity-toggle my-3"},ot=["disabled"],it=t("div",{class:"row"},[t("div",{class:"best-seller-title px-0 mt-9"},[t("div",{class:"fs-6 text-primary roboto ls-4"},"SIMILLER PRODUCT."),t("div",{class:"fs-2 mb-8 text-primary ls-2"},"猜你可能喜歡")])],-1),rt={class:"swiper-container"},at={class:"swiper mySwiper5"},nt={class:"swiper-wrapper container-md ps-0"},lt={class:"card rounded-0"},dt=["src"],ct={class:"card-body"},pt={class:"card-title fs-4 mb-3 text-dark"},ut={class:"card-text fs-8 mb-7 text-dark opacity-75 text-2"},mt=["disabled","onClick"],bt={key:0,class:"spinner-border me-2 text-primary",style:{width:"1rem",height:"1rem","border-width":"0.15rem"},role:"status"},ht=t("span",{class:"sr-only"},"Loading...",-1),vt=[ht],yt=t("div",{class:"d-flex justify-content-center swiper-ctrl position-absolute",style:{right:"5%",top:"-3%"}},[t("i",{class:"swiper-button-next text-primary arrow-left"}),t("div",{class:"swiper-pagination align-items-center d-flex"}),t("i",{class:"swiper-button-prev text-primary arrow-right"})],-1);function _t(o,s,n,d,e,c){return r(),a("div",E,[t("div",q,[t("div",L,[t("div",R,[t("div",U,[t("a",B,[o.isFavorite(e.product)?(r(),a("i",{key:0,onClick:s[0]||(s[0]=()=>o.toggleFavorite(e.product)),class:"bi bi-bookmark-fill fs-4 position-absolute",style:{right:"16px",top:"16px","z-index":"2"}})):(r(),a("i",{key:1,onClick:s[1]||(s[1]=()=>o.toggleFavorite(e.product)),class:"bi bi-bookmark fs-4 position-absolute",style:{right:"16px",top:"16px","z-index":"2"}}))]),t("img",{src:e.mainImg,alt:e.product.title,class:"card-img-top rounded-0 object-fit-cover mainImg"},null,8,A)]),t("div",D,[t("div",F,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"card-img-top rounded-0 object-fit-cover smImg",onClick:s[2]||(s[2]=m(()=>c.showImg(e.product.imageUrl),["prevent"])),style:{cursor:"pointer"}},null,8,j)]),(r(!0),a(b,null,h(e.product.imagesUrl,(i,g)=>(r(),a("div",{class:"col-3 text-center overflow-hidden",key:g},[t("img",{src:i,alt:e.product.title,class:"card-img-top rounded-0 object-fit-cover smImg",onClick:m(()=>c.showImg(i),["prevent"]),style:{cursor:"pointer"}},null,8,O)]))),128))])]),t("div",M,[t("div",N,[t("div",z,[t("h4",H,l(e.product.title),1),t("p",Q,"$ "+l(e.product.price),1),t("div",J,[G,t("div",K,[t("div",W,[e.product.content?(r(),a("p",X,l(e.product.content),1)):(r(),a("p",Y,"無說明"))]),t("div",Z,[e.product.description?(r(),a("p",$,l(e.product.description),1)):(r(),a("p",tt,"無描述"))])])])]),t("div",et,[t("div",st,[t("button",{onClick:s[3]||(s[3]=()=>e.quantity--),disabled:e.quantity===1},"—",8,ot),w(t("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=i=>e.quantity=i),min:"1",onChange:s[5]||(s[5]=i=>c.getQuantity())},null,544),[[x,e.quantity,void 0,{number:!0}]]),t("button",{onClick:s[6]||(s[6]=()=>e.quantity++)},"＋")]),t("button",{type:"button",class:"btn btn-primary me-3 px-6 rounded-0",onClick:s[7]||(s[7]=()=>o.addToCart(e.product.id,e.quantity))},"加入購物車"),t("button",{type:"button",class:"btn btn-outline-secondary px-7 rounded-0",onClick:s[8]||(s[8]=()=>o.addToCart(e.product.id,e.quantity))},"立即購買")])])])])]),it,t("div",rt,[t("div",at,[t("div",nt,[(r(!0),a(b,null,h(e.relativeProduct,i=>(r(),a("div",{class:"swiper-slide",key:i.id},[t("div",lt,[t("img",{src:i.imageUrl,alt:"product.title",style:{height:"20rem"}},null,8,dt),t("div",ct,[t("div",pt,l(i.title),1),t("p",ut,l(i.content),1),t("a",{class:"btn btn-outline-primary border-0 rounded-0 px-0 roboto ls-2",disabled:i.id===o.loadingItem,onClick:()=>o.addToCart(i.id)},[o.loadingItem===i.id?(r(),a("div",bt,vt)):k("",!0),C(" ADD TO CART ")],8,mt)])])]))),128))])]),yt])])}const Ct=f(V,[["render",_t]]);export{Ct as default};
