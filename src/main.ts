import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SimpleDesign from '../packages/src/index'

createApp(App).use(SimpleDesign).mount('#app')
