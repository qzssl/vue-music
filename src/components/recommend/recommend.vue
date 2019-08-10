<template>
  <div ref="recommend" class="recommend">
    <div v-if="recommend.length" ref="sliderWrapper" class="recommend-content">
      <div class="slider-wrapper">
        <v-slider>
          <div v-for="(item, index) in recommend" :key="index">
            <a :href="item.linkUrl">
              <img :src="item.picUrl">
            </a>
          </div>
        </v-slider>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">
          热门歌单推荐
        </h1>
        <ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import VSlider from '../../base/slider/slider.vue'
//   import Scroll from 'base/scroll/scroll.vue'
  import { getRecommend } from 'api/recommend'
  import { ERR_OK } from 'api/config'
  export default {
    components: {
      VSlider
    },
    data() {
      return {
        recommend: []
      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommend = res.data.slider
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
@import '../../common/stylus/variabl.styl'
.recommend
  position: fixed
  width:100%
  top:88px
  bottom:0
  .recommend-content
    height:100%
    overflow:hidden
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
</style>
