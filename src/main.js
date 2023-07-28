import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'
import './assets/main.css'


// eslint-disable-next-line no-unused-vars
import jquery from 'jquery'
import * as bootstrap from 'bootstrap'
import App from './App.vue'
import router from './router'
import { date, currency } from './methods/filters'

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');


const app = createApp(App)
app.config.globalProperties.$filters = {
  date,
  currency
}
app.use(VueAxios, axios)
app.use(bootstrap)
app.use(createPinia())
app.use(router)
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);


app.mount('#app')




// eslint-disable-next-line no-unused-vars
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})



