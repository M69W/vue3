import { createApp } from 'vue'
import App from './App.vue'
import vantUI from './vantUI'
import './index.css'
import 'vant/lib/index.css'

const appVue = createApp(App)
vantUI(appVue)
appVue.mount('#app')
