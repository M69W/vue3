import { createApp } from 'vue'
import App from './App.vue'
import { Button, Cell, CellGroup } from 'vant';
import './index.css'
import 'vant/lib/index.css';

createApp(App).use(Button).use(Cell).use(CellGroup).mount('#app')
