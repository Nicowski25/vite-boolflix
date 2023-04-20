import { createApp } from 'vue'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import App from './App.vue'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faMagnifyingGlass, faBell)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
