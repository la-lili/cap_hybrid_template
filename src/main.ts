import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue'
import { defineCustomElements } from '@ionic/pwa-elements/loader'
import { createI18n } from 'vue-i18n'
import { createRouter, createWebHistory } from '@ionic/vue-router'
import messages from '@intlify/unplugin-vue-i18n/messages'
import App from './App.vue'
import routes from '~pages'
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'
/* Theme variables */
import './theme/variables.css'
/* unocss styles */
import '@unocss/reset/tailwind.css'
//import './styles/main.css'
import 'uno.css'

defineCustomElements(window)
const pinia = createPinia()
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
const app = createApp(App)
  .use(IonicVue)
  .use(i18n)
  .use(pinia)
  .use(router)
router.isReady().then(() => { app.mount('#app') })
