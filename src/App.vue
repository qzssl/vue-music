<template>
  <div id="app">
    <m-header />
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from 'components/m-header/m-header.vue'
import Tab from 'components/tab/tab.vue'
export default {
  name: 'App',
  components: {
    MHeader, Tab
  }
}
</script>

<style scoped lang="stylus">
    @import "common/stylus/variabl.styl"
    #app
        color:$color-background
</style>
