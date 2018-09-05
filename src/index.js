import Imagefill from './lib'

export default {
  install (Vue) {
    for (let key in Imagefill) {
      if (Imagefill.hasOwnProperty(key)) {
        Vue.directive(key, Imagefill[key])
      }
    }
  }
}
