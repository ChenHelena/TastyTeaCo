import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          name:'Home',
          component: () => import('../views/front/HomeView.vue'),
        },
        {
          path: 'news',
          name: 'News',
          component: () => import('../views/front/NewsView.vue'),
        },
        {
          path: 'news/:news_id',
          component: () => import('../views/front/SingleNews.vue'),
        },
        {
          path: 'products',
          component: () => import('../views/front/ProductsView.vue'),
        },
        {
          path: 'product/:id',
          component: () => import('../views/front/ProductView.vue'),
        },
        {
          path: 'carts',
          component: () => import('../views/front/CartsView.vue'),
        },
        {
          path: 'favorite',
          component: () => import('../views/front/FavoriteView.vue'),
        },
        {
          path: 'order',
          component: () => import('../views/front/OrderView.vue'),
        },
        {
          path: 'pay/:orderId',
          component: () => import('../views/front/PayView.vue'),
        },
        {
          path: 'login',
          component: () => import('../views/front/LoginView.vue'),
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/admin/AdminProducts.vue')
        },
        {
          path: 'orders',
          component: () => import('../views/admin/AdminOrders.vue')
        }
      ]
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/front/AboutView.vue')
    // }
  ]
})



export default router
