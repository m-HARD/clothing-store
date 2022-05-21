import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)


createApp(App).mount('#app')
