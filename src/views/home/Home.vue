<template>
<div id="home">
  <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  <scroll class="scroll-content" ref="scroll" :probeType="3" @scroll="contentScroll"  :pull-up-load="true" @pullingUp="loadMore">
    <home-swiper :banners=banners></home-swiper>
    <home-recommend-view :recommends=recommends></home-recommend-view>
    <feature-view></feature-view>
    <tab-control :titles=titles @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </scroll>
  <back-top @click.native="backClick" v-show="isShow"></back-top>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import HomeRecommendView from './childComps/HomeRecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata, getHomeGoods} from 'network/home.js'







export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
   
    
  },
  data(){
    return{
      banners: [],
      recommends: [],
      currentType: 'pop',
      isShow: false,
      titles: ['流行', '新款', '精选'],
      goods: {
        'pop':  {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      }
          
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      this.isShow = (-position.y) > 1000
    },
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list
    })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.finishPullUp()
    })
    }
  }
}
</script>

<style scoped>
  #home {
    position: absolute;
    height: 100vh;
  }

  .home-nav {
    background-color: var(--color-tint);
    color:#fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

 .scroll-content {
   height: calc(100% - 93px);
   overflow: hidden;
   margin-top: 44px;
 }

 /* 第二种居中方案
 .scroll-content {
   overflow: hidden;
   position: absolute;
   top: 44px;
   bottom: 49px;
   left: 0;
   right: 0;
 } */

 
</style>