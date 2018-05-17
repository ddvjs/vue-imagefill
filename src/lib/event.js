const emptyLeft = '(\\s|^)'
const emptyright = '(\\s|$)'

// class操作兼容
function hasClass(elements, className) {
  return !!elements.className.match(new RegExp(emptyLeft + className + emptyright))
}

function addClass(elements, className) {
  if (!hasClass(elements, className)) {
    elements.className += ' ' + className
  }
}

function removeClass(elements, className) {
  if (hasClass(elements, className)) {
    elements.className = elements.className.replace(new RegExp(emptyLeft + className + emptyright), ' ')
  }
}

module.exports = {
  hasClass,
  addClass,
  removeClass
}
