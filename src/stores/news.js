import { defineStore } from "pinia";
const newsStore = defineStore('new',{
  state:() =>{
    return {
      news:[
        {
          news_id: 20230707,
          new_arrivals: true,
          news_img: 'https://plus.unsplash.com/premium_photo-1668949938430-63711ea6a78a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1144&q=80',
          news_title: '新品正式開賣',
          en_title: 'New products on sale',
          news_date: '2023年07月07日',
          content_title: '檸檬金萱茶',
          news_content: '在茶的世界裡，有一種茶被稱為「金萱」，它如金色般閃耀，如夏日陽光般溫暖。現在，我們自豪地宣布，全新的金萱茶已經上市啦！讓我們一同探索這款令人驚艷的茶飲。金萱茶是以台灣烏龍茶為基底的精心製作之作品。每一片茶葉都來自於優質的烏龍茶樹，以專業的技藝和傳統製作方法精心處理而成。這種茶葉在採摘後經過精細揉捻，然後經過適度的發酵和烘焙，以展現出其獨特的風味和特點。'
        },
        {
          news_id: 20230706,
          new_arrivals: false,
          news_img: 'https://images.unsplash.com/photo-1561861617-906ae467de12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
          news_title: '2023台灣奶茶節',
          en_title: '2023 Taiwan Milk Tea Festival',
          news_date: '2023年07月06日',
          content_title: 'No.1奶茶',
          news_content: '「品味絕佳，享受舌尖饗宴」。阿里山烏龍茶將帶你走進一場味覺盛宴。我們獨家挑選高山茶園最優質的茶葉，以傳統烘焙技法製成，帶有獨特的花香和果香，入口柔和順滑，回甘悠長。適合搭配各式美食，讓你的餐桌增添無限美味。現在購買，還可享受限時優惠！趕快選購，開啟美味之旅！'
        },
        {
          news_id: 20220120,
          new_arrivals: false,
          news_img: 'https://images.unsplash.com/photo-1567570672006-d7dcee4e6d64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
          news_title: '新春禮盒上市',
          en_title: 'New Year’s gifts listed',
          news_date: '2022年01月20日',
          content_title: '新春禮盒 — 歡慶新春佳節',
          news_content: '新春禮盒中包含了精選的茶葉和美味的美點，以及寓意吉祥的新年飾品。這是一份充滿關愛和溫暖的禮物，將帶給您和您所愛的人無盡的喜悅。在禮盒中，您將會發現精心挑選的茶葉，如清香的綠茶、芳香的烏龍茶或馥郁的紅茶。每一片茶葉都代表著一份對於新年的祝福，讓您在品茗的同時感受到新春的吉祥和美好。此外，禮盒中還附有美味的美點，例如精緻的餅乾、可口的巧克力或口感獨特的糖果。這些甜點將為您的味蕾帶來一份愉悅的享受，讓您在新年中感受到甜蜜和幸福。'
        }
      ]
    }
  }
})

export default newsStore