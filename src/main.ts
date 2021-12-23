import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import 'virtual:svg-icons-register'
import SvgIcon from './components/common/SvgIcon.vue'
import { createPinia } from 'pinia'
const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(createPinia()).mount('#app')
