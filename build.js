const fs = require('fs')
const UglifyJS = require("uglify-js")

const bookmarklets = [
  {title: 'Normal Copy', src: 'src/normal-copy.js'},
  {title: 'Gitlab Issue Copy', src: 'src/gitlab-issue-copy.js'},
].map(bookmarklet => {
  const fileContent = fs.readFileSync(bookmarklet.src, {encoding: 'utf-8'})
  const result = UglifyJS.minify(fileContent)
  return {
    ...bookmarklet,
    minCode: result.code
  }
})

const README = `# Copy link bookmarklets` + bookmarklets.map(bookmarklet => `
## ${bookmarklet.title} (${bookmarklet.src})
\`\`\`javascript
javascript:${bookmarklet.minCode}
\`\`\``).join('\n')
fs.writeFileSync('./README.md', README)
