import{_ as h,R as _,a as p,r as l,o as m,c as v,d as e,e as o,w as n,bE as k,F as f,g as c}from"./index-f424abb6.js";const{VITE_URL:R}={VITE_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"helena27",BASE_URL:"/vue-week0316/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={components:{RouterView:_,RouterLink:p},methods:{logout(){document.cookie=`helenaToken=; expires=${new Date}`,this.$router.push("/login")},checkAdmin(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=s;const t=`${R}api/user/check`;this.$http.post(t).then(i=>{i.data.success&&this.$router.push("/admin/products"),console.log(s)}).catch(()=>{this.$router.push("/login")})}},mounted(){this.checkAdmin()}},g={class:"navbar navbar-expand-lg bg-body-tertiary"},V={class:"container-fluid"},b={class:"collapse navbar-collapse",id:"navbarNav"},w={class:"navbar-nav d-flex justify-content-center w-100 text-center"},x={class:"nav-item"},E={class:"nav-item"},T={class:"nav-item"},L={class:"nav-item"};function A(s,t,i,D,B,r){const a=l("RouterLink"),d=l("RouterView");return m(),v(f,null,[e("nav",g,[e("div",V,[e("div",b,[e("ul",w,[e("li",x,[o(a,{to:"/admin/products",class:"nav-link"},{default:n(()=>[c("Products")]),_:1})]),e("li",E,[o(a,{to:"/admin/orders",class:"nav-link"},{default:n(()=>[c("Orders")]),_:1})]),e("li",T,[o(a,{to:"/",class:"nav-link"},{default:n(()=>[c("Go back home")]),_:1})]),e("li",L,[e("a",{href:"#",class:"nav-link",onClick:t[0]||(t[0]=k((...u)=>r.logout&&r.logout(...u),["prevent"]))},"logout")])])])])]),o(d)],64)}const y=h($,[["render",A]]);export{y as default};
