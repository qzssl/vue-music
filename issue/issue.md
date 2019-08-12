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
#### axios请求数据(代理)
>web.config.js添加
```
const axios = require('axios')

devServer: {
  before(app) {
    app.get('/api/getDiscList', (req, res) => {
        var url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg' //原api
        axios.get(url, {
          headers: {
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          params: req.query
        }).then((response) => {
            res.json(response.data)
        }).catch((e) => {
            console.log(e)
        })
    })
  }
}

```
>recommend.js
```
export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParam, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
```
>recommend.vue
```
_getDiscList() {
  getDiscList().then((res) => {
    if (res.code === ERR_OK) {
      this.discList = res.data.list
    }
  })
}
```