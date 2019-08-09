const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);
module.exports = {
    //部署生产环境和开发环境下的URL：可对当前环境进行区分
    // publicPath:process.env.NODE_ENV === 'production'?'public': '/',
    publicPath:'/',
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir:'./dist',
    // 相对于outputDir的静态资源(js、css、img、fonts)目录
    assetsDir: 'assets',
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: false,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    chainWebpack:config => {
        //添加别名
        config.resolve.alias
            .set('@',resolve('src'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('router', resolve('src/router'))
            .set('base', resolve('src/base'))
            .set('store', resolve('src/store'));
    },
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        //open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        /* 使用代理 */
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://localhost:8080/',
                /* 允许跨域 */
                changeOrigin: true,
            },
        },
    },
};
