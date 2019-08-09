#### Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
解决：在.eslintrc.js添加"extends": [“standard”, “plugin:vue/recommended”]
```
extends: ['standard',"plugin:vue/recommended"],
// required to lint *.vue files
plugins: [
'html'
],
```
