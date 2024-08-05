import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faCalculator,
  faCodeBranch,
  faCog,
  faExchangeAlt,
  faEye,
  faEyeSlash,
  faTimes,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faMastodon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);

  library.add(
    faCalculator,
    faCodeBranch,
    faCog,
    faExchangeAlt,
    faEye,
    faEyeSlash,
    faMastodon,
    faTimes,
    faTrash,
  );
});
