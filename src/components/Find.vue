<template>
<div>
	<!-- Swiper -->
    <div class="swiper-container main-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href=""><img src="//upload.jianshu.io/admin_banners/web_images/3140/1eb5ae00e6fd00778b9cdd482639e1d2e4eabf4e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></a>
            </div>
            <div class="swiper-slide">
                <a href=""><img src="//upload.jianshu.io/admin_banners/web_images/3139/5dec5c333cf97f53fc953555034a9f146e68f25e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></a>
            </div>
            <div class="swiper-slide">
                <a href=""><img src="//upload.jianshu.io/admin_banners/web_images/3135/b7df07c739f26f7193fa6a808d77d0705c61c07f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></a>
            </div>
            <div class="swiper-slide">
                <a href=""><img src="//upload.jianshu.io/admin_banners/web_images/3133/a93aaecea8c1823fc7b437b9e39adaedd09e949d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></a>
            </div>
            <div class="swiper-slide">
                <a href=""><img src="//upload.jianshu.io/admin_banners/web_images/3123/667db7b5380780e229ba1db54c3e889839887b8e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""></a>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
    <!-- Swiper -->
    <div class="swiper-container category-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="">简书大学堂</a>
            </div>
            <div class="swiper-slide">
                <a href="">7日热门</a>
            </div>
            <div class="swiper-slide">
                <a href="">30日热门</a>
            </div>
            <div class="swiper-slide">
                <a href="">新上榜</a>
            </div>
        </div>
    </div>
    <div class="title">
        <h3>热门专题</h3>
        <div>
            <i class="iconfont icon-huanyipi"></i>换一批
        </div>
    </div>
    <div class="themes">
        <a href="">读书</a>
        <a href="">想法</a>
        <a href="">谈写作</a>
        <a href="">悬疑推理</a>
        <a href="">语言 翻译</a>
        <a href="">心理</a>
        <a href="">散文</a>
        <a href="">社会热点</a>
    </div>
    <div class="title">
        <h3>好友都在看</h3>
        <div>
            查看全部>>
        </div>
    </div>
    <section class="article">
        <div class="item" v-for="article in articles">
            <div class="content">
                <div class="content-top">
                    <img :src="article.headers" alt="">
                    <span class="author">{{article.author}}</span>
                    <span class="time">{{article.time}}</span>
                </div>
                <h3 class="content-title">{{article.title}}</h3>
                <div class="content-more">阅读<span>{{article.read}}</span> 评论<span>{{article.comment}}</span> 喜欢<span>{{article.like}}</span></div>
            </div>
            <div class="logo">
                <img :src="article.images" alt="">
            </div>
        </div>
    </section>
</div>
</template>

<script>
// 引入swiper插件
import Swiper from '../../static/swiper/dist/js/swiper.min.js';

// 引入axios模块
import axios from 'axios';

// swiper的插件引入到vue中不会直接生效，需要做特殊处理
export default {
    // {}相当于是组件的花括号
    data () {
        return {
            msg: 'hello Find',
            articles: []
        };
    },
    methods: {
        add () {
            alert('ok');
        }
    },
    // 当vue编译了HTML代码之后做的事情
    mounted () {
        /* eslint-disable no-new */
        new Swiper('.main-swiper', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true
        });

        /* eslint-disable no-new */
        new Swiper('.category-swiper', {
            slidesPerView: 3,
            spaceBetween: 30
        });
    },
    created () {
        axios.get('/article').then((data) => {
            console.log(data.data);
            this.articles = data.data;
        }).catch((err) => {
            console.log(err);
        });
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入base.scss
@import '../assets/base.scss';
a {
    text-decoration: none;
}

.main-swiper {
    width: 100%;
    a {
        display: block;
        width: 100%;
        img {
            width: 100%;
        }
    }
}

.category-swiper {
    padding: 48px;
    .swiper-slide {
        width: rem(300px);
        height: rem(120px);
        text-align: center;
        line-height: rem(120px);
        background-color: #ffba52;
        border-radius: rem(12px);
        a {
            color: #fff;
        }
    }
}

.title {
    display: flex;
    justify-content: space-between;
    height: rem(88px);
    padding: 0 rem(48px);
    line-height: rem(88px);
    h3::before {
        content: "";
        display: inline-block;
        width: rem(6px);
        height: rem(36px);
        margin-right: rem(22px);
        vertical-align: middle;
        background-color: #e68e7b;
    }
    div {
        color: #999;
    }
    .iconfont {
        font-size: rem(36px);
        margin-right: rem(12px);
        color: #999;
    }
}

.themes {
    display: flex;
    flex-wrap: wrap;
    padding: 0 rem(48px);
    margin-bottom: rem(20px);
    a {
        padding: rem(20px) rem(30px);
        margin-top: rem(30px);
        margin-right: rem(30px);
        border: 1px solid #e78e7b;
        border-radius: rem(8px);
        color: #e78e7b;
    }
}

.item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: rem(408px);
    padding: 0 rem(48px);
    border-bottom: 1px solid #ddd;
    .content {
        flex:1;
        .content-top {
            height: rem(66px);
            font-size: 0;
            line-height: rem(66px);
            img {
                height: 100%;
                vertical-align: top;
                border-radius: 50%;
            }
            .author {
                margin: 0 rem(18px);
                font-size: rem(36px);
            }
            .time {
                font-size: rem(32px);
                color: #999;
            }
        }
        .content-title {
            margin-top: rem(30px);
            line-height: 140%;
            font-size: rem(48px);
        }
        .content-more {
            margin-top: rem(32px);
            color: #999;
            font-size: rem(32px);
        }
    }
    .logo {
        width: rem(240px);
        height: rem(240px);
        margin-left: rem(62px);
        img {
            width: rem(240px);
            height: rem(240px);
            border-radius: rem(6px);
        }
    }
}

</style>
