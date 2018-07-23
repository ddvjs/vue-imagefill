import Imagefill from './lib'

export default {
  install: function install (Vue) {
    for (var key in Imagefill) {
      if (Imagefill.hasOwnProperty(key)) {
        Vue.directive(key, Imagefill[key])
      }
    }
  }
}
