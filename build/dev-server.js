require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

// ============================================
app.get('/category', function(req, res) {
    var data = [
        { img: './static/images/category/1.jpg', title: "@产品", num: 33, intro: "本专题主要收录写作者于文学写作及其他写作的思考。" },
        { img: './static/images/category/2.jpg', title: "旅行·在路上", num: 33, intro: "借一双眼睛看世界" },
        { img: './static/images/category/3.jpg', title: "短篇小说", num: 33, intro: "借一斑略知全豹 ，以一目尽传精神" },
        { img: './static/images/category/4.jpg', title: "上班这点事儿", num: 33, intro: "本专题仅收录求职、简历、换工作" },
        { img: './static/images/category/5.jpg', title: "连载小说", num: 33, intro: "请大家收藏连载的导航主页" },
        { img: './static/images/category/6.jpg', title: "黛玉日报", num: 33, intro: "大家好，这里是黛玉日报" },
        { img: './static/images/category/7.jpg', title: "@IT·互联网", num: 33, intro: "@IT 专题 由 IT大分类，转定位于IT·互联网行业观察与思考" },
        { img: './static/images/category/8.jpg', title: "@二次元", num: 33, intro: "勇敢的少年们，一起去征服世界吧！" },
        { img: './static/images/category/9.jpg', title: "诗", num: 33, intro: "诗，一座由孤独看守的花园 专题主编：林贞观 编审：爬山猫、山东..." },
        { img: './static/images/category/10.jpg', title: "谈写作", num: 33, intro: "本专题主要收录写作者关于文学写作及其他写作的思考" }
    ];
    res.json(data);
})

app.get('/article', function(req, res) {
    var data = [
        { "headers": "./static/images/headers/1.jpg", "author": "爱读书的高博士1", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/1.jpg" },
        { "headers": "./static/images/headers/2.jpg", "author": "爱读书的高博士2", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/2.jpg" },
        { "headers": "./static/images/headers/3.jpg", "author": "爱读书的高博士3", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/3.jpg" },
        { "headers": "./static/images/headers/4.jpg", "author": "爱读书的高博士4", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/4.jpg" },
        { "headers": "./static/images/headers/5.jpg", "author": "爱读书的高博士5", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/5.jpg" },
        { "headers": "./static/images/headers/6.jpg", "author": "爱读书的高博士6", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/6.jpg" },
        { "headers": "./static/images/headers/7.jpg", "author": "爱读书的高博士7", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/7.jpg" },
        { "headers": "./static/images/headers/8.jpg", "author": "爱读书的高博士8", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/8.jpg" },
        { "headers": "./static/images/headers/9.jpg", "author": "爱读书的高博士9", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/9.jpg" },
        { "headers": "./static/images/headers/10.jpg", "author": "爱读书的高博士10", "time": "9个小时前", "title": "年入外快100万+，一个上班族是如何做到的？", "read": 2378, "comment": 189, "like": 267, "images": "./static/images/article/10.jpg" }
    ];

    res.json(data);
})

// ============================================

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        log: () => {}
    })
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
        // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve()
})

var server = app.listen(port)

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}
