import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';

import MintUI from 'mint-ui';
import moment from 'moment';
import 'mint-ui/lib/style.css';
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

import store from './store.js';
import router from './router.js';

Vue.filter('dateFormat', function (dateStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern);
});

Vue.config.productionTip = false
// 设置api的根路径


Vue.use(VueResource);
Vue.use(MintUI);

Vue.http.options.root = 'http://www.liulongbin.top:3005';
// 跨域设置
Vue.http.options.emulateHTTP = true;

new Vue({
  render: h => h(App),
  router, // 注入路由
  store   // 注入状态管理
}).$mount('#app')