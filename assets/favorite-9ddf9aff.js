import{j as r}from"./index-f424abb6.js";import{T as i}from"./cart-a8120377.js";const f=r("favoritesStore",{state:()=>({favoritesList:JSON.parse(localStorage.getItem("favoritesList"))||[]}),actions:{toggleFavorite(t){const e=this.favoritesList.findIndex(s=>s.id===t.id);e===-1?(this.favoritesList.push(t),i.fire({icon:"success",title:"加入收藏"})):(this.favoritesList.splice(e,1),i.fire({icon:"success",title:"取消收藏"}))},isFavorite(t){return this.favoritesList.some(e=>e.id===t.id)}},getters:{getFavoritesNum:({favoritesList:t})=>t.length},deep:["favoritesList"]});export{f};
