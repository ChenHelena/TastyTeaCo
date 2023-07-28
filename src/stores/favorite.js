import { defineStore } from 'pinia'
import { Toast } from '../../src/methods/swalToast';
const favoritesStore = defineStore('favoritesStore', {
  state: () => {
    return {
      favoritesList: JSON.parse(localStorage.getItem('favoritesList')) || []
    }
  },
  actions: {
    toggleFavorite(product) {
      const favoriteIndex = this.favoritesList.findIndex((item) => item.id === product.id)
      if (favoriteIndex === -1) {
        this.favoritesList.push(product)
        Toast.fire({
          icon: 'success',
          title: '加入收藏'
        })
      } else {
        this.favoritesList.splice(favoriteIndex, 1)
        Toast.fire({
          icon: 'success',
          title: '取消收藏'
        })
      }
    },
    isFavorite(product) {
      return this.favoritesList.some((item) => item.id === product.id)
    }
  },
  getters: {
    getFavoritesNum: ({ favoritesList }) => {
      return favoritesList.length
    }
  },
  deep: ['favoritesList']
})
export default favoritesStore