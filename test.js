var pressed = require('./')
var vkey = require('vkey')

window.addEventListener('keydown', update, false)
window.addEventListener('keyup', update, false)
window.addEventListener('blur', update, false)

function update() {
  var keys = pressed()
  var curr = Object.keys(keys).filter(function(d) {
    return keys[d]
  }).join(' + ')

  console.clear()
  console.log('')
  console.log(curr)
  console.log('')
  console.log('<alt>:', pressed('<alt>'))
  console.log('<meta>:', pressed('<meta>'))
  console.log('<space>:', pressed('<space>'))
  console.log('<shift>:', pressed('<shift>'))
  console.log('<control>:', pressed('<control>'))
}
