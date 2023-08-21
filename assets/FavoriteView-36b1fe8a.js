import{_ as p,m as c,b as m,r as b,o as s,c as o,d as e,F as y,h as g,e as r,w as n,t as l,g as d,i as f}from"./index-ee3127fb.js";import{f as _}from"./favorite-c501d1ec.js";import{c as h}from"./cart-16a05450.js";const v={computed:{...c(_,["favoritesList","getFavoritesNum"]),...c(h,["loadingItem"])},watch:{favoritesList:{handler(){localStorage.setItem("favoritesList",JSON.stringify(this.favoritesList))},deep:!0}},methods:{...m(_,["toggleFavorite","isFavorite"]),...m(h,["addToCart"])}},u={class:"bg-quaternary py-6"},k={class:"container p-lg-0"},x=e("div",{class:"best-seller-title px-0"},[e("div",{class:"fs-6 text-primary roboto ls-4"},"WISH LIST."),e("div",{class:"fs-2 mb-6 text-primary"},"慾望清單")],-1),w={key:0,class:"row"},C=["src","alt"],F=["alt"],L={class:"products-border card-img-overlay p-3"},S={class:"card-text text-2"},N=["disabled","onClick"],$={key:0,class:"spinner-border me-2",style:{width:"1rem",height:"1rem","border-width":"0.15rem"},role:"status"},I=e("span",{class:"sr-only"},"Loading...",-1),T=[I],V={class:"border-bottom border-1 border-tertiary py-3"},R={class:"d-flex justify-content-between"},j={class:"card-title fw-bold text-primary"},A={class:"text-primary",style:{cursor:"pointer"}},B=["onClick"],D=["onClick"],O={class:"card-title fw-bold text-primary"},z={key:1},E=e("p",{class:"text-center fs-2 text-primary"},"您尚未收藏任何產品！",-1),U=[E],q={class:"d-flex justify-content-center"};function H(i,J,M,W,G,K){const a=b("RouterLink");return s(),o("section",u,[e("div",k,[x,i.getFavoritesNum!==0?(s(),o("div",w,[(s(!0),o(y,null,g(i.favoritesList,t=>(s(),o("div",{class:"products-item col-md-6 col-xl-4 col-xxl-3 mb-7",key:t.id},[r(a,{to:`/product/${t.id}`,class:"card text-white border-0 rounded-0 p-4 position-relative"},{default:n(()=>[t.imageUrl?(s(),o("img",{key:0,src:t.imageUrl,class:"card-img rounded-0",alt:t.title,style:{height:"12rem"}},null,8,C)):(s(),o("img",{key:1,src:"https://tomchun.tw/tomchun/wp-content/uploads/2020/07/S__31834120.jpg",class:"card-img rounded-0",alt:t.title,style:{height:"12rem"}},null,8,F)),e("div",L,[e("p",S,l(t.description),1)]),r(a,{to:`/product/${t.id}`,class:"products-btn text-light btn-decor fs-7 py-1 px-4 bg-transparent"},{default:n(()=>[d("MORE")]),_:2},1032,["to"])]),_:2},1032,["to"]),e("button",{class:"btn btn-tertiary text-primary w-100 border-0 rounded-0 roboto ls-2",disabled:t.id===i.loadingItem,onClick:()=>i.addToCart(t.id)},[i.loadingItem===t.id?(s(),o("div",$,T)):f("",!0),d(" ADD TO CART ")],8,N),e("div",V,[e("div",R,[e("div",j,l(t.title),1),e("a",A,[i.isFavorite(t)?(s(),o("i",{key:0,onClick:()=>i.toggleFavorite(t),class:"bi bi-bookmark-fill fs-4 position-absolute",style:{right:"16px",top:"0","z-index":"5"}},null,8,B)):(s(),o("i",{key:1,onClick:()=>i.toggleFavorite(t),class:"bi bi-bookmark fs-4 position-absolute",style:{right:"16px",top:"0","z-index":"5"}},null,8,D))])]),e("div",O,"$"+l(t.price),1)])]))),128))])):(s(),o("div",z,U)),e("div",q,[r(a,{to:"/products",class:"btn btn-outline-secondary mt-3 px-6 py-2 rounded-0"},{default:n(()=>[d("繼續購物")]),_:1})])])])}const Y=p(v,[["render",H]]);export{Y as default};