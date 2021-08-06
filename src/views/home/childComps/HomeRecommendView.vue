<template>
<div class="recommend">
  <div v-for="(item, index) in recommends" :key="index" class="recommend-item">
    <a :href="item.link">
      <img :src="item.image" alt="">
      <div><span>{{item.title}}</span></div>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;
  padding: 8px 0 12px;
  border-bottom: 8px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item a {
  display:inline-block ;
  width: 60px;
  height: 60px;
  margin: 0;
}

.recommend-item img {
  width: 100%;
}
</style>