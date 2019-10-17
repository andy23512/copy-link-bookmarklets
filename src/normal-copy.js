// Copy from https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d
(function (text) {
  var node = document.createElement('textarea')
  var selection = document.getSelection()

  node.textContent = text
  document.body.appendChild(node)

  selection.removeAllRanges()
  node.select()
  document.execCommand('copy')

  selection.removeAllRanges()
  document.body.removeChild(node)
  window.alert('Copied')
})('[' + document.title + '](' + window.location.href + ')')
