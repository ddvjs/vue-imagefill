import Imagefill from './lib'
require('./lib/style/vue-imagefill.css')

export default {
  install(Vue) {
    Object.keys(Imagefill).forEach(key => {
      Vue.directive(key, Imagefill[key])
    })
  }
}
