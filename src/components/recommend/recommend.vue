<template>
  <div ref="recommend" class="recommend">
    <scroll ref="scroll" class="recommend-content" :data="discList">
      <div>
        <div v-if="recommend.length" ref="sliderWrapper" class="slider-wrapper">
          <v-slider>
            <div v-for="(item, index) in recommend" :key="index">
              <a :href="item.linkUrl">
                <img class="needsclick" :src="item.picUrl" @load="loadImage">
              </a>
            </div>
          </v-slider>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">
            热门歌单推荐
          </h1>
          <ul>
            <li v-for="(item, index) in discList" :key="index" class="item">
              <div class="icon">
                <img v-lazy="item.imgurl" width="60" height="60">
              </div>
              <div class="text">
                <h2 class="name">
                  {{ item.creator.name }}
                </h2>
                <p class="desc">
                  {{ item.dissname }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div v-show="!discList.length" class="loading-container">
        <loading></loading>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import VSlider from '../../base/slider/slider.vue'
  import Scroll from 'base/scroll/scroll.vue'
  import Loading from 'base/loading/loading'
  import { getRecommend, getDiscList } from 'api/recommend'
  import { ERR_OK } from 'api/config'
import { setTimeout } from 'timers';
  export default {
    components: {
      VSlider,
      Scroll,
      Loading
    },
    data() {
      return {
        recommend: [],
        discList: []
      }
    },
    created() {
      this._getRecommend()
      this._getDiscList()
    },
    methods: {
      _getRecommend() {
        getRecommend().then((res) => {
          if (res.code === ERR_OK) {
            this.recommend = res.data.slider
          }
        })
      },
      _getDiscList() {
        getDiscList().then((res) => {
          if (res.code === ERR_OK) {
            this.discList = res.data.list
          }
        })
      },
      loadImage() {
        if (!this.checkLoaded) {
          this.checkLoaded = true
          this.$refs.scroll.refresh()
        }
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
      .item
        display:flex
        box-sizing:border-box
        align-items:center
        padding: 0 20px 20px 20px
        .icon
          flex:0 0 60px
          width:60px
          padding-right:20px
        .text
          display:flex
          flex-direction: column
          justify-content: center
          line-height:20px
          overflow:hidden
          font-size:14px
          .name
            margin-bottom:10px
            color:#fff
          .desc
            color:rgba(255,255,255,0.3)
    .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)

</style>
