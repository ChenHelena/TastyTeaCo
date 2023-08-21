<script>
import { mapActions, mapState } from 'pinia';
import { RouterView, RouterLink } from 'vue-router';
import cartStore from '../stores/cart'

export default {
  components: {
    RouterView, RouterLink
  },
  computed: {
    ...mapState(cartStore, ['carts','cartNum'])
  },
  methods: {
    ...mapActions(cartStore, ['getCart'])
  },
  mounted() {
    this.getCart()
  }
}
</script>

<template>
<nav class="navbar navbar-expand-md bg-body-tertiary bg-tertiary py-0">
  <div class="container py-4">
    <a class="navbar-brand"  href="#">
      <img src="/public/logo.png" alt="" style="height:40px;width: auto;">
    </a>
    <div>
      <i class="me-3 d-md-none d-inline-block">
        <RouterLink to="/carts" class="nav-link py-0">
          <i class="bi bi-cart nav-link position-relative" style="display:inline-block">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger p-2">
              {{ cartNum }}
            </span>
          </i>
        </RouterLink>
      </i>
      <button class="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" >
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="offcanvas offcanvas-top h-100  bg-secondary" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" data-bs-toggle="offcanvas">
      <div class="offcanvas-header text-light">
        <img id="offcanvasTopLabel" src="/public/logo.png" alt="" style="width: auto;filter: brightness(100);height: 40px;">
        <button type="button" class="btn-close text-reset btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body justify-content-end text-center">
        <ul class="navbar-nav">
          <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/" class="nav-link text-sm-light">首頁</RouterLink>
          </li>
          <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/news" class="nav-link text-sm-light">最新消息</RouterLink>
          </li>
          <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/products" class="nav-link text-sm-light">產品列表</RouterLink>
          </li>
          <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/admin" class="nav-link text-sm-light">後台</RouterLink>
          </li>
          <li class="nav-item d-md-none d-block px-lg-2 px-md-0 py-md-0 py-3 text-light">
              ——————
            </li>
          <!-- <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/admin/products" class="nav-link text-sm-light">Backstage</RouterLink>
          </li> -->
          <li class="nav-item px-lg-2 px-md-0 py-md-0 py-3">
            <RouterLink to="/favorite" class="nav-link text-sm-light">慾望清單</RouterLink>
          </li>
          <li class="nav-item d-md-block d-none">
            <RouterLink to="/carts" class="nav-link py-0">
              <i class="bi bi-cart nav-link position-relative" style="display:inline-block">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger p-2">
                  {{ cartNum }}
                </span>
              </i>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<!-- 作為內頁顯示所使用 -->
<RouterView class="bg-white" style="min-height: calc(100vh - 370px)"></RouterView>

<!-- footer -->
<div class="footer follow bg-tertiary py-8">
  <div class="container-md">
    <div class="follow-title">
      <div class="fs-8 text-md-center mb-md-7 mb-3 roboto ls-4 px-5">
        FOLLOW US.
      </div>
    </div>
    <div class="row follow-link justify-content-center">
      <a href="https://line.me/ti/p/yjdysE5w_U" class="fs-5 text-primary col-md-auto px-7 text-md-center roboto ls-4 border-end border-primary">LINE</a>
      <a href="https://www.instagram.com/qqqtzln/" class="fs-5 text-primary col-md-auto px-7 text-md-center roboto ls-4 border-end border-primary">INSTAGRAM</a>
      <a href="mailto:qqqtzln@gmail.com" class="fs-5 text-primary col-md-auto px-7 text-md-center roboto ls-4">Email</a>
    </div>
    <div class="follow-copyright fs-10 text-md-center mt-9 roboto ls-4 px-5">
      copyright@2023. all rights reserved.
    </div>
  </div>
</div>
</template>