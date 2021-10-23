import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';

const app = createApp(App);
app.config.globalProperties.bus = createApp();
app.config.globalProperties.$log = window.console.log;

app.use(store)
	.use(router)
	.use(Antd)
	.mount('#app')
