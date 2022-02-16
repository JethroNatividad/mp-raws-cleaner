import './style.css'
import ClipboardJS from 'clipboard'
const textarea = document.querySelector('textarea')

new ClipboardJS('.btn');

// textarea on change run cleanup
textarea.addEventListener('change', () => {
  const output = cleanup(textarea.value)
  textarea.value = output

})


function cleanup(text) {

  const textBasic = text.replace(
    /[\uff01-\uff5e]/g,
    function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); }
  )

  const removedUseless = textBasic.replaceAll('UU看书 www.uukanshu.com', '')
  const removedUseless1 = removedUseless.replaceAll('UU看書 www.uukanshu.com', '')
  const removedUseless2 = removedUseless1.replaceAll('UU看書www.uukanshu.com', '')
  const removedUseless3 = removedUseless2.replaceAll('UU看书www.uukanshu.com', '')
  const addSpace = removedUseless3.replaceAll(',', ', ')
  const addSpace1 = addSpace.replaceAll(':', ': ')
  const replaceDot = addSpace1.replaceAll('。', '.')
  return replaceDot
}
''