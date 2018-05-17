import {
  hasClass,
  addClass,
  removeClass
} from './event.js'
import vue from 'vue'

const imagefill = {}
let imagefillDirective = {
  center: {
    // 图片居中切割
    inserted: function (el, binding) {
      el.onload = (e) => {
        let w = el.naturalWidth
        let h = el.naturalHeight
        let pw = el.parentNode.offsetWidth
        let ph = el.parentNode.offsetHeight
        let ratio = w / h
        let pRatio = pw / ph

        if (pRatio > ratio) {
          removeClass(el, 'Hcenter')
          addClass(el, 'Vcenter')
        } else {
          removeClass(el, 'Vcenter')
          addClass(el, 'Hcenter')
        }
      }
    }
  },
  flex: {
    // 容器自适应
    inserted: function (el, binding) {
      addClass(el, 'flex-box')
      var div = document.createElement('div')
      div.className = 'expansion'
      div.style.paddingBottom = binding.value * 100 + '%'
      el.appendChild(div)
    }
  },
  src: {
    inserted: function (el, binding) {
      let pw = el.parentNode.offsetWidth
      let ph = el.parentNode.offsetHeight
      if (binding.modifiers.center) {
        el.src = binding.value + '?x-oss-process=image/resize,m_fill,h_' + parseInt(ph) + ',w_' + parseInt(pw)

        el.onload = function (e) {
          let w = el.naturalWidth
          let h = el.naturalHeight
          let ratio = w / h
          let pRatio = pw / ph
          if (pRatio > ratio) {
            removeClass(el, 'Hcenter')
            addClass(el, 'Vcenter')
          } else {
            removeClass(el, 'Vcenter')
            addClass(el, 'Hcenter')
          }
        }
      } else {
        el.src = binding.value + '?x-oss-process=image/resize,m_lfit,h_' + parseInt(ph) + ',w_' + parseInt(pw)
      }
    }
  }
}

Object.keys(imagefillDirective).forEach(key => {
  imagefill[key] = vue.directive(key, imagefillDirective[key])
})

export default {
  imagefill
}
