# Copy link bookmarklets
## Normal Copy (src/normal-copy.js)
```javascript
javascript:!function(e){var t=document.createElement("textarea"),o=document.getSelection();t.textContent=e,document.body.appendChild(t),o.removeAllRanges(),t.select(),document.execCommand("copy"),o.removeAllRanges(),document.body.removeChild(t),window.alert("Copied")}("["+document.title+"]("+window.location.href+")");
```

## Gitlab Issue Copy (src/gitlab-issue-copy.js)
```javascript
javascript:!function(){var e=document.title,t=window.location.href,o=t.match(/https:\/\/gitlab.com\/.*?\/issues\/(\d+)/),n=e.match(/^(.*?) \(#\d+\)/);if(o&&2==o.length&&n&&2==n.length){var d="[#"+o[1]+" "+n[1]+"]("+t+")",c=document.createElement("textarea"),l=document.getSelection();c.textContent=d,document.body.appendChild(c),l.removeAllRanges(),c.select(),document.execCommand("copy"),l.removeAllRanges(),document.body.removeChild(c),window.alert("Copied")}}();
```