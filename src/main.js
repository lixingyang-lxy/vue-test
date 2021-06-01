import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/common.css"
import assistData from './data.json'

Vue.config.productionTip = false
Vue.prototype.$assistData = assistData

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
