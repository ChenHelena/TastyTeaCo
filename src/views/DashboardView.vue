<script>
import { RouterView, RouterLink } from 'vue-router'
const { VITE_URL } = import.meta.env

export default {
  components: {
    RouterView, RouterLink
  },
  methods: {
    logout() {
      document.cookie = `helenaToken=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkAdmin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)helenaToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_URL}api/user/check`
      this.$http.post(url)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/admin/products')
          }
          console.log(token)
        })
        .catch(() => {
          this.$router.push('/login')
        })
    }
  },
  mounted() {
    this.checkAdmin()
  }
}
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav d-flex justify-content-center w-100 text-center">
          <li class="nav-item">
            <RouterLink to="/admin/products" class="nav-link">Products</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/admin/orders" class="nav-link">Orders</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Go back home</RouterLink>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link"  @click.prevent="logout">logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
</template>