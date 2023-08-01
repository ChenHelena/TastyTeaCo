import{_ as p,m as h,b,r as y,o,c as n,d as t,F as m,h as v,t as a,e as i,w as c,bB as f,br as g,g as u}from"./index-00d10242.js";import{c as _}from"./cart-fbb657ad.js";const{VITE_URL:x,VITE_PATH:C}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/TastyTeaCo/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},w={computed:{...h(_,["carts","cartNum","loadingItem"])},methods:{getCarts(){this.$http.get(`${x}api/${C}/cart`).then(s=>{this.carts=s.data.data})},...b(_,["getCart","updateCartItem","deleteItem","deleteAllCarts"])},mounted(){this.getCart()}},k={key:0,class:"container my-6"},I={class:"col-md-6 mx-auto"},$=t("div",{class:"d-flex"},[t("div",{class:"text-secondary active me-2"}," 購物車 ⇀ "),t("div",{class:"text-tertiary me-2"}," 訂單資訊 ⇀ "),t("div",{class:"text-tertiary"},"結帳")],-1),T={class:"d-flex justify-content-between mb-3"},V=t("span",{class:"fs-4"},"購物車",-1),S={class:"text-end"},j={href:"#"},E=["src"],q={key:1,src:"https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg",alt:"...",style:{width:"140px",height:"120px"}},R={class:"w-100 p-3 position-relative"},U=["onClick","disabled"],A=t("i",{class:"fa-solid fa-x"},null,-1),D=[A],L={class:"d-flex justify-content-between align-items-center mt-2"},B={class:"quantity-toggle"},N=["onClick","disabled"],P=t("i",{class:"bi bi-dash-lg"},null,-1),F=[P],H=["onUpdate:modelValue","onChange","disabled"],M=["onClick","disabled"],O=t("i",{class:"bi bi-plus-lg"},null,-1),z=[O],G={class:"container"},J={class:"row justify-content-center"},K={class:"col-md-6"},Q=t("div",{class:"cart-title border-bottom border-primary mb-3"},[t("div",{class:"fs-8 text-primary roboto ls-4"},"Cart Total"),t("div",{class:"fs-6 text-primary ls-4"},"購物車金額")],-1),W=t("div",{class:"service-title text-center"},null,-1),X={class:"cart-subtotal d-flex justify-content-between my-2"},Y=t("p",null,"小計",-1),Z={class:"cart-total d-flex justify-content-between"},tt=t("h4",{class:"fw-bold"},"總計",-1),et={class:"fw-bold"},st={class:"d-flex justify-content-between my-3"},ot={class:"cart-button"},nt=t("div",{class:"pic pic1 me-2"},null,-1),at={class:"cart-button"},dt=t("button",{type:"button",class:"btn btn-primary w-100 border-0 rounded-0 px-5"},"確認訂單",-1),lt={key:1,class:"container text-center fs-3 my-10"},it=t("p",{class:"fs-2 text-primary"},"購物車目前是空的，快來挑選商品吧！",-1),ct={class:"cart-button"},rt=t("div",{class:"pic pic1 me-2"},null,-1);function ut(s,r,_t,pt,ht,bt){const d=y("RouterLink");return s.cartNum!==0?(o(),n("div",k,[t("div",I,[$,t("div",T,[V,t("div",S,[t("button",{class:"btn btn-outline-danger border-0 rounded-0 ls-2",onClick:r[0]||(r[0]=()=>s.deleteAllCarts()),type:"button"},"清空購物車")])]),(o(!0),n(m,null,v(s.carts.carts,e=>(o(),n("div",{class:"d-flex mb-4 border",key:e.id},[t("a",j,[e.product.imageUrl?(o(),n("img",{key:0,src:e.product.imageUrl,alt:"",style:{width:"140px",height:"120px"}},null,8,E)):(o(),n("img",q))]),t("div",R,[t("button",{type:"button",class:"btn text-primary position-absolute border-0 p-1",style:{top:"1rem",right:"1rem","z-index":"9","box-shadow":"none"},"aria-label":"Close",onClick:()=>s.deleteItem(e),disabled:e.id===s.loadingItem},D,8,U),t("p",null,a(e.product.title),1),t("p",null,"折扣後金額 : $"+a(e.product.price),1),t("div",L,[t("div",B,[t("button",{type:"button",class:"btn text-primary border-0",onClick:l=>s.updateCartItem(e,e.qty-1),disabled:e.id===s.loadingItem||e.qty===1},F,8,N),f(t("input",{style:{outline:"none"},type:"text","onUpdate:modelValue":l=>e.qty=l,onChange:()=>s.updateCartItem(e,e.qty),disabled:e.id===s.loadingItem,min:"1",onkeyup:"this.value=this.value.replace(/\\D/g,'')"},null,40,H),[[g,e.qty,void 0,{number:!0}]]),t("button",{type:"button",class:"btn text-primary border-0",onClick:l=>s.updateCartItem(e,e.qty+1),disabled:e.id===s.loadingItem},z,8,M)]),t("p",null,"$"+a(e.total),1)])])]))),128))]),t("div",G,[t("div",J,[t("div",K,[Q,W,t("div",X,[Y,t("p",null,"$"+a(s.carts.total),1)]),t("div",Z,[tt,t("h4",et,"$"+a(s.carts.total),1)]),t("div",st,[t("div",ot,[t("div",null,[i(d,{to:"/products",type:"button",class:"btn text-tertiary w-100 border-0 rounded-0 d-flex align-items-center goShop ps-0",style:{"box-shadow":"none"}},{default:c(()=>[nt,u(" 繼續購物 ")]),_:1})])]),t("div",at,[i(d,{to:"/order"},{default:c(()=>[dt]),_:1})])])])])])])):(o(),n("div",lt,[it,t("div",ct,[t("div",null,[i(d,{to:"/products",type:"button",class:"fs-5 btn text-tertiary w-100 border-0 rounded-0 d-flex align-items-center goShop ps-0 justify-content-center mt-3",style:{"box-shadow":"none"}},{default:c(()=>[rt,u(" 繼續購物 ")]),_:1})])])]))}const vt=p(w,[["render",ut]]);export{vt as default};
