import{_ as d,m as c,a as l,$ as a,r as _,o as t,c as o,d as s,F as m,h as u,i as v,n as p,e as h,w as f,g as w,t as r}from"./index-f424abb6.js";import{n as y}from"./news-16e70281.js";const g={computed:{...c(y,["news"])},components:{RouterLink:l}};a(document).ready(function(){a(".news-latest .card").delay(1800).queue(function(n){a(this).removeClass("hover"),a("a.hover").removeClass("hover"),n()})});const k={class:"news-latest bg-quaternary pb-8"},x={class:"container py-7"},b={class:"row mx-md-9"},V=s("div",{class:"news-category","data-aos":"fade-zoom-in","data-aos-offset":"0","data-aos-easing":"ease-in-sine"},[s("div",{class:"fs-6 text-primary roboto ls-3"},"THE LATEST."),s("div",{class:"fs-2 mb-sm-5 mb-7 text-primary"},"最新消息")],-1),$={key:0,class:"arrivals"},C={class:"card mb-3 rounded-0"},L={class:"overlay"},N={class:"overlay-content"},S={class:"card-content"},T={href:"#!"};function B(n,E,R,q,z,F){const i=_("RouterLink");return t(),o("div",k,[s("div",x,[s("div",b,[V,(t(!0),o(m,null,u(n.news,e=>(t(),o("div",{class:"col-md-4 position-relative","data-aos":"fade-up","data-aos-offset":"0","data-aos-easing":"ease-in-sine","data-aos-duration":"500",key:e.news_id},[e.new_arrivals?(t(),o("div",$,"新品上市")):v("",!0),s("div",C,[s("div",{class:"card-img rounded-0",style:p({"background-image":"url("+e.news_img+")"})},[s("div",L,[s("div",N,[h(i,{to:`/news/${e.news_id}`,class:"nav-link text-sm-light"},{default:f(()=>[w("View")]),_:2},1032,["to"])])])],4),s("div",S,[s("a",T,[s("h2",null,r(e.news_title),1),s("p",null,r(e.en_title),1)])])])]))),128))])])])}const H=d(g,[["render",B]]);export{H as default};
