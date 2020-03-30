import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faCalculator, faExchangeAlt, faEye, faEyeSlash, faCog, faTimes
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faCalculator, faExchangeAlt, faEye, faEyeSlash, faCog, faTimes
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false
