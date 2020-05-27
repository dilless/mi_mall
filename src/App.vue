<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {}
  },
  mounted () {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser () {
      this.axios.get('/user')
        .then((res) => {
          this.$store.dispatch('saveUsername', res.username)
        })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum')
        .then((res) => {
          this.$store.dispatch('saveCartCount', res)
        })
    }
  }
}
</script>

<style lang="scss">
@import "./assets/scss/reset";
@import "./assets/scss/base";
@import "./assets/scss/modal";
@import "./assets/scss/button";
</style>
