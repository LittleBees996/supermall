import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import channelServ from './services/channel.js'

// channelServ.getChannels()  b站分类数据

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
