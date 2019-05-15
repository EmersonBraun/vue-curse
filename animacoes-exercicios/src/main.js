import Vue from 'vue'
import App from './App.vue'
import './style.css'
import './animation.css'

Vue.config.productionTip = false

Vue.component('v-alert',require('vue-strap').alert);
Vue.component('v-select',require('vue-strap').select);
Vue.component('v-option',require('vue-strap').option);
new Vue({
  render: h => h(App),
}).$mount('#app')
