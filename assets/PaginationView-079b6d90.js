import{_,o as t,c as n,d as a,aw as l,bE as c,F as g,h as p,t as d}from"./index-f424abb6.js";const u={props:["pages"],methods:{updatePage(o){this.$emit("emitPages",o)}}},h={"aria-label":"Page navigation example"},k={class:"pagination justify-content-center"},m=a("span",{"aria-hidden":"true"},"«",-1),f=[m],P={key:0,class:"page-link"},v=["onClick"],b=a("span",{"aria-hidden":"true"},"»",-1),x=[b];function y(o,i,e,C,w,r){return t(),n("nav",h,[a("ul",k,[a("li",{class:l([{disabled:!e.pages.has_pre},"page-item"])},[a("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:i[0]||(i[0]=c(()=>r.updatePage(e.pages.current_page-1),["prevent"]))},f)],2),(t(!0),n(g,null,p(e.pages.total_pages,s=>(t(),n("li",{class:l(["page-item",{active:e.pages.current_page===s}]),key:s},[s===e.pages.current_page?(t(),n("span",P,d(s),1)):(t(),n("a",{key:1,class:"page-link",href:"#",onClick:c(()=>r.updatePage(s),["prevent"])},d(s),9,v))],2))),128)),a("li",{class:l(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:i[1]||(i[1]=c(()=>r.updatePage(e.pages.current_page+1),["prevent"]))},x)],2)])])}const E=_(u,[["render",y]]);export{E as P};