import Imagefill from './lib'
import Flex from './lib/Flex.vue'

export default {
  install (Vue) {
    for (let key in Imagefill) {
      if (Imagefill.hasOwnProperty(key)) {
        Vue.directive(key, Imagefill[key])
      }
    }
    Vue.component('v-flex', Flex)
  }
}
