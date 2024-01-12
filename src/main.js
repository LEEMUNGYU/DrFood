import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'

import router from './router'  // <-- 설치한 라우터를 가져와서

createApp(App).use(router).use(store).mount('#app') 

//new { createApp }({
//  render: h => h(App),
//  router,
//  store, // store
//}).$mount('#app');