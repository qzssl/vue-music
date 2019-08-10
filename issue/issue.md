#### Parsing error: Adjacent JSX elements must be wrapped in an enclosing tag
解决：在.eslintrc.js添加"extends": [“standard”, “plugin:vue/recommended”]
```
extends: ['standard',"plugin:vue/recommended"],
// required to lint *.vue files
plugins: [
'html'
],
```

#### better-scroll
>新版本 snap改为对象
```
this.slider = new BScroll(this.$refs.slider, {
  scrollX: true,
  scrollY: false,
  momentum: false,
  snap: {
    loop: this.loop,
    threshold: 0.3,
    speed: 400
  }
})
//不需要 pageIndex -= 1
this.slider.on('scrollEnd', () => {
  let pageIndex = this.slider.getCurrentPage().pageX
  //if (this.loop) {
  //  pageIndex -= 1
  //}
  this.currentPagrIndex = pageIndex
})
```