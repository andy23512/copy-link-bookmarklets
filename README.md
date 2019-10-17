# Copy link bookmarklets
## Normal Copy (src/normal-copy.js)
```javascript
javascript:!function(e){var t=document.createElement("textarea"),o=document.getSelection();t.textContent=e,document.body.appendChild(t),o.removeAllRanges(),t.select(),document.execCommand("copy"),o.removeAllRanges(),document.body.removeChild(t)}("["+document.title+"]("+window.location.href+")");
```

## Gitlab Issue Copy (src/gitlab-issue-copy.js)
```javascript
javascript:!function(){var e=document.title,t=window.location.href,n=t.match(/https:\/\/gitlab.com\/.*?\/issues\/(\d+)/),o=e.match(/^(.*?) \(#\d+\)/);if(n&&2==n.length&&o&&2==o.length){var c="[#"+n[1]+" "+o[1]+"]("+t+")",d=document.createElement("textarea"),m=document.getSelection();d.textContent=c,document.body.appendChild(d),m.removeAllRanges(),d.select(),document.execCommand("copy"),m.removeAllRanges(),document.body.removeChild(d)}}();
```