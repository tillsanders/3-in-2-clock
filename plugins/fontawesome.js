import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faCalculator, faCodeBranch, faExchangeAlt, faEye, faEyeSlash, faCog, faTimes, faTrash
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCalculator, faCodeBranch, faExchangeAlt, faEye, faEyeSlash, faCog, faTimes, faTrash, faTwitter
)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false
