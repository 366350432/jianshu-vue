<template>
<div>
	<header class="header">
	    <h3 @click.stop="isShow=true">全部关注<span></span></h3>
        <div>            
            <i class="iconfont icon-icon"></i>
            <i class="iconfont icon-sousuo"></i>
        </div>
	</header>
    <!-- 默认是隐藏，点击全部关注，则显示出来 -->
    <ul class="dialog" v-show="isShow">
        <li>全部关注</li>
        <li>只看专题</li>
        <li>只看文集</li>
        <li>只看用户</li>
        <li>只看推送更新</li>
    </ul>
	<section class="main">
	    <div class="item">
	        <div class="logo">
	            <img src="../../static/images/jianyouquan.png" alt="">
	        </div>
	        <div class="content">
	            <h3>简友圈</h3>
	        </div>
	    </div>
	    <div class="item">
	        <div class="logo">
	            <img src="http://upload.jianshu.io/collections/images/47/%E9%A6%96%E9%A1%B5%E6%8A%95%E7%A8%BF.png?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="">
	        </div>
	        <div class="content">
	            <h3>首页投稿</h3>
	            <p>被提拔是幸还是灾？小心彼得原理陷阱</p>
	        </div>
	    </div>
	    <div class="item" v-for="(category,index) in categories" :key="index">
	        <div class="logo">
	            <img :src="category.img" alt="">
	        </div>
	        <div class="content">
	            <div class="title">
	                <h3>{{category.title}}</h3>
	                <span class="circle"></span>
	                <span class="num">{{category.num}}篇文章+</span>
	            </div>
	            <p>{{category.intro}}</p>
	        </div>
	    </div>
	</section>

    <search></search>
</div>
</template>

<script>
// 引入axios
import axios from 'axios';

// 引入搜索组件
import search from '@/components/Search';

export default {
    data () {
        return {
            categories: [],
            isShow: false
        };
    },
    components: {
        search
    },
    // 当vue创建成功之后，执行的函数
    created () {
        // 使用ajax将服务器的数据请求回来-axios
        axios.get('/category').then((data) => {
            // 数据被成功的从服务器请求回来，将数据交给categoryies，页面会自动遍历数据信息
            this.categories = data.data;
        }).catch((err) => {
            console.log(err);
        });

        // window.onresize = window.onscroll = function(){}
        // 点击事件：点击页面空白处，则让ul隐藏
        window.onscroll = document.onclick = () => {
            console.log(123);
            this.isShow = false;
        };
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入base.scss
@import '../assets/base.scss';

.dialog{
    position:absolute;
    top:rem(24px);
    left:rem(48px);
    width:rem(300px);
    padding:rem(36px);
    background-color:#fff;
    box-shadow:0 0 rem(6px) rem(6px) #ddd;
}
.dialog li{
    height:rem(48px);
    line-height:rem(48px);
    text-indent:rem(10px);
}

.header {
    display: flex;
    justify-content:space-between;
    height: rem(136px);
    padding: 0 rem(48px);
    line-height: rem(136px);
    font-size: rem(48px);
    border-bottom: 1px solid #ddd;
    h3 {
        span {
            display: inline-block;
            width: 0;
            height: 0;
            margin-top: rem(4px);
            margin-left: rem(20px);
            vertical-align: middle;
            border-width: rem(16px);
            border-style: solid;
            border-color: #333 transparent transparent transparent;
        }
    }
    .iconfont {
        width: rem(64px);
        font-size: rem(64px);
        margin-left: rem(64px);
    }
}

.item {
    display: flex;
    align-items: center;
    height: rem(216px);
    padding: 0 rem(48px);
    border-bottom: 1px solid #ddd;
    .logo {
        width: rem(120px);
        height: rem(120px);
        img {
            width: 100%;
            border-radius: rem(12px);
        }
    }
    .content {
        margin-left: rem(48px);
        .title {
            display: flex;
            height: rem(48px);
            line-height: rem(48px);
            font-size: 0;
            .circle {
                align-self: center;
                width: rem(28px);
                height: rem(28px);
                margin: 0 rem(18px);
                border-radius: 50%;
                background-color: #4a9eff;
            }
            .num {
                font-size: rem(36px);
                color: #999;
            }
        }
        h3 {
            font-size: rem(48px);
        }
        p {
            margin-top: rem(18px);
            font-size: rem(36px);
            color: #999;
        }
    }
}
</style>
