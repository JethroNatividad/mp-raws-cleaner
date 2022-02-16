import './style.css'



function cleanup(text) {

  const textBasic = text.replace(
    /[\uff01-\uff5e]/g,
    function (ch) { return String.fromCharCode(ch.charCodeAt(0) - 0xfee0); }
  )

  const removedUseless = textBasic.replaceAll('UU看书 www.uukanshu.com', '')
  return removedUseless
}
