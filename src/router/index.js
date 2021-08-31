import Vue from 'vue'
import Router from 'vue-router'
import Index from '../index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ],
  // 浏览滚动插件
  scrollBehavior(to, from, position) {
    // position参数可自行打印，点击浏览器左右箭头会触发
    return {
      // 这里可以返回很多参数，下面简单列就几个，详情
      x: 100,
      y: 100,
      selector: '#app',
      offset: 200
    }
  }

})
