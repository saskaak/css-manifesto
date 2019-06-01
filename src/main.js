import 'reset-css';
import './sass/html-tags.scss';

import Vue from 'vue';
import vueSmoothScroll from 'vue-smooth-scroll'

import App from './App.vue';

Vue.use(vueSmoothScroll);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
