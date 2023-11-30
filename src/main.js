import { createApp } from 'vue'
import App from './App.vue'


import router from './router'  // <-- 설치한 라우터를 가져와서

createApp(App).mount('#app')
createApp(App).use(router).mount('#app') 
