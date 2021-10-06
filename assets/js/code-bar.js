window.Clipboard = (function(window, document, navigator) {

  function copyToClipboard(text) {

    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
  
    } else {
      let inputCopy = document.createElement("input")
      inputCopy.value = text;
      document.body.appendChild(inputCopy)
  
      let range = document.createRange()
      range.selectNodeContents(inputCopy)
      selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
      inputCopy.setSelectionRange(0, text.length)
  
      document.execCommand("Copy")
      document.body.removeChild(inputCopy)
    }
  }

  return {
    copy: copyToClipboard
  }
 
})(window, document, navigator)
