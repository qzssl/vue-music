const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    publicPath:'/',
    outputDir:'./dist',
    assetsDir: '',  // 相对于outputDir的静态资源(js、css、img、fonts)目录
    chainWebpack:config => {
        //添加别名
        config.resolve.alias
            .set('@',resolve('src'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('router', resolve('src/router'))
            .set('base', resolve('src/base'))
            .set('store', resolve('src/store'));
    }
};
