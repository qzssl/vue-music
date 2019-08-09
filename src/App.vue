<template>
  <div id="app">
    <m-header />
    <!--<router-link></router-link>-->
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header.vue'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style scoped lang="stylus">
    @import "common/stylus/variabl.styl"
    #app
        color:$color-background
</style>
