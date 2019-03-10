import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

// component
import 'idist-components'

// Css
import './css/cssist.css';
import './css/sanfrancisco-font.css';

// Bower Components
import "../bower_components/cssist/cssist.js";
import "../bower_components/reset.css/reset.css";
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
