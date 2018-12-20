import events from './event.js'

export default {
  center (el, binding) {
    let hCenter = binding.modifiers.full ? 'v-imgfill-h-center-full' : 'v-imgfill-h-center'
    let vCenter = binding.modifiers.full ? 'v-imgfill-v-center-full' : 'v-imgfill-v-center'

    if (binding.value) {
      el.src = binding.value
    }

    el.onload = (e) => {
      let w = el.naturalWidth
      let h = el.naturalHeight
      let pw = el.parentNode.offsetWidth
      let ph = el.parentNode.offsetHeight
      let ratio = w / h
      let pRatio = pw / ph

      if (pRatio > ratio) {
        events.removeClass(el, hCenter)
        events.addClass(el, vCenter)
      } else {
        events.removeClass(el, vCenter)
        events.addClass(el, hCenter)
      }
    }
  },
  flex (el, binding) {
    events.addClass(el, 'v-imgfill-flex-box')
    let expansion = el.getElementsByClassName('v-imgfill-expansion')
    let div = null
    if (expansion.length) {
      div = expansion[0]
    } else {
      div = document.createElement('div')
      div.className = 'v-imgfill-expansion'
      el.appendChild(div)
    }
    div.style.paddingBottom = binding.value * 100 + '%'
  }
}
