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
          // todo 保存到 Vuex
        })
    },
    getCartCount () {
      this.axios.get('/carts/products/sum')
        .then((res) => {
          // todo
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
