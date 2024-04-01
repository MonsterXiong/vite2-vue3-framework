import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


const app = createApp(App);
app.config.productionTip = false;
app.use(Antd);
app.config.globalProperties.$message = message;
/* 会自动注册 Button 下的子组件, 例如 Button.Group */
app.use(Antd).mount('#app');
