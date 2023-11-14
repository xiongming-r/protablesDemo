import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from "element-plus";
import { createI18n } from 'vue-i18n'
import ProTable from "protables"
import 'protable/dist/style.css'
// element css
import "element-plus/dist/index.css";
// element dark css
import "element-plus/theme-chalk/dark/css-vars.css";
console.log("ProTable===>", ProTable);
const i18n = createI18n({
    allowComposition: true,
    legacy: false,
})

// createApp(App).component('ProTable', ProTable).mount('#app')
createApp(App).use(ElementPlus).use(i18n).use(ProTable).mount('#app')




