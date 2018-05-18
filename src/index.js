// const Imagefill = require('./lib')
import Imagefill from './lib'

// module.exports = Imagefill.default
export default {
  install (Vue, options = {}) {
    Vue.directive('flex', Imagefill.flex)
    Vue.directive('center', Imagefill.center)
  }
}
