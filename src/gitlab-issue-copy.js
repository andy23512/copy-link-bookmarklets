// Copy from https://gist.github.com/stefanmaric/2abf96c740191cda3bc7a8b0fc905a7d
(function () {
  var title = document.title
  var url = window.location.href

  var matchIssueNumber = url.match(/https:\/\/gitlab.com\/.*?\/issues\/(\d+)/)
  var matchIssueTitle = title.match(/^(.*?) \(#\d+\)/)
  if(!matchIssueNumber || matchIssueNumber.length != 2) return
  if(!matchIssueTitle || matchIssueTitle.length != 2) return
  var issueNumber = matchIssueNumber[1]
  var issueTitle = matchIssueTitle[1]

  var text = '[#'+issueNumber+ ' ' + issueTitle + '](' + url +')'
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
})()
