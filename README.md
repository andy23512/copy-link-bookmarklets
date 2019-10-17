# Copy link bookmarklets
## Normal Copy (src/normal-copy.js)
```javascript
javascript:!function(e){var t=document.createElement("textarea"),o=document.getSelection();t.textContent=e,document.body.appendChild(t),o.removeAllRanges(),t.select(),document.execCommand("copy"),o.removeAllRanges(),document.body.removeChild(t)}("["+document.title+"]("+window.location.href+")");
```

## Gitlab Issue Copy (src/gitlab-issue-copy.js)
```javascript
javascript:!function(){var e=document.title,t=window.location.href,o=t.match(/https:\/\/gitlab.com\/.*?\/issues\/(\d+)/),n=e.match(/^(.*?) \(#\d+\)/);if(o&&2==o.length&&n&&2==n.length){var c=o[1],l=n[1];console.log(c),console.log(l);var d="[#"+c+" "+l+"]("+t+")",m=document.createElement("textarea"),a=document.getSelection();m.textContent=d,document.body.appendChild(m),a.removeAllRanges(),m.select(),document.execCommand("copy"),a.removeAllRanges(),document.body.removeChild(m)}}();
```
