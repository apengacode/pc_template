import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/common.scss'
import router from './router'
import store from '@/store/index'
import ElementUI from 'element-ui'
import Avue from '@haiking/avue' // avue
import setting from '@/setting' // 全局配置
import 'element-ui/lib/theme-chalk/index.css'
import '@haiking/micro-common/lib/crud.scss'
import '@haiking/micro-common/lib/micro.css'
import '@haiking/avue/lib/index.css' // avue css
import '@/assets/icon/iconfont.css'
import HJMicro from '@haiking/micro-common'
import moment from 'moment'
import 'prismjs/themes/prism.css'
import { $validator, $validate, $utils } from './utils/common'



moment.locale('zh-cn')
Vue.config.productionTip = false
Vue.prototype.$validator = $validator
Vue.prototype.$validate = $validate
Vue.prototype.$utils = $utils
Vue.use(HJMicro, {
  baseUrl: '',
  // Message: ElementUI.Message,
  env: process.env.NODE_ENV,
  VUE_APP_MINIO: process.env.VUE_APP_MINIO,
  setting
})
Vue.use(ElementUI)
Vue.use(Avue, {
  size: 'normal'
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
