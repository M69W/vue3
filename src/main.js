import { createApp } from 'vue'
import App from './App.vue'
import vantUI from './vantUI'
import './index.css'

const appVue = createApp(App)
appVue.config.devtools = true;
vantUI(appVue)
appVue.mount('#app')