import {
  addClass,
  removeClass
} from './event.js'

export default {
  center: {
    inserted: function (el, binding) {
      let hCenter = binding.modifiers.full ? 'Hcenter-full' : 'Hcenter'
      let vCenter = binding.modifiers.full ? 'Vcenter-full' : 'Vcenter'
      if (binding.value) {
        el.src = binding.value
      }

      if (el.parentElement.style.position !== 'relative') {
        el.parentElement.style.position = 'relative'
      }
      el.onload = (e) => {
        let w = el.naturalWidth
        let h = el.naturalHeight
        let pw = el.parentNode.offsetWidth
        let ph = el.parentNode.offsetHeight
        let ratio = w / h
        let pRatio = pw / ph

        if (pRatio > ratio) {
          removeClass(el, hCenter)
          addClass(el, vCenter)
        } else {
          removeClass(el, vCenter)
          addClass(el, hCenter)
        }
      }
    }
  },
  flex: {
    inserted: function (el, binding) {
      addClass(el, 'flex-box')
      var div = document.createElement('div')
      div.className = 'expansion'
      div.style.paddingBottom = binding.value * 100 + '%'
      el.appendChild(div)
    }
  }
}
