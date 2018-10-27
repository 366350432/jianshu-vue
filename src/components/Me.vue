<template>
<div>
	<header class="header">
        <h3>消息</h3>
        <i class="iconfont icon-xiaoxishezhi"></i>
        <i class="iconfont icon-sousuo"></i>
    </header>
    <div class="info">
        <div class="logo">
            <img src="http://upload.jianshu.io/users/upload_avatars/3435555/5c919a0f5b7b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/120/h/120" alt="">
        </div>
        <div class="content">
            汨逸<i class="iconfont icon-xiewenzhang"></i>
        </div>
    </div>
    <div class="division"></div>
    <div class="list">
        <div class="item">
            <i class="iconfont icon-wenzhang1"></i>
            <h3>公开文章</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-yinsihemimashezhi"></i>
            <h3>私密文章</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-shoucangdewenzhang"></i>
            <h3>收藏的文章</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-xihuan"></i>
            <h3>喜欢的文章</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-zhuanti"></i>
            <h3>我的专题</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-wenji"></i>
            <h3>我的文集</h3>
            <span>32</span>
        </div>
        <div class="item">
            <i class="iconfont icon-wallet"></i>
            <h3>我的钱包</h3>
            <span>32</span>
        </div>
    </div>
    <div class="division"></div>
    <div class="list">
        <div class="item">
            <i class="iconfont icon-yejianmoshi"></i>
            <h3>夜间模式</h3>
            <div class="line">
                <div class="circle"></div>
            </div>
        </div>
        <div class="item">
            <i class="iconfont icon-liulanlishi"></i>
            <h3>浏览记录</h3>
        </div>
    </div>
    <div class="division"></div>
    <div class="list">
        <div class="item">
            <i class="iconfont icon-fenxiang"></i>
            <h3>分享简书</h3>
        </div>
        <div class="item">
            <i class="iconfont icon-bangzhufankui"></i>
            <h3>帮助与反馈</h3>
        </div>
        <div class="item">
            <i class="iconfont icon-shoucang"></i>
            <h3>给简书评分</h3>
        </div>
    </div>
    <div class="division"></div>
</div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 引入base.scss
@import '../assets/base.scss';
.header {
    display: flex;
    height: rem(136px);
    padding: 0 rem(48px);
    line-height: rem(136px);
    font-size: rem(48px);
    border-bottom: 1px solid #ddd;
    h3 {
        flex: 1;
    }
    .iconfont {
        width: rem(64px);
        font-size: rem(64px);
        margin-left: rem(64px);
    }
}

.info{
    display: flex;
    align-items:center;
    height: rem(240px);
    border-bottom: 1px solid #ddd;

    .logo{
        width: rem(150px);
        height: rem(150px);
        margin: 0 rem(60px);
        img{
            width: 100%;
            border-radius: 50%;
        }
    }

    .content{
        font-size: rem(42px);
        .iconfont{
            margin-left: rem(24px);
            font-size: rem(42px);
        }
    }
}

.division{
    height: rem(48px);
    border-top: 1px solid #ddd;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ddd;
}

.item{
    display: flex;
    margin: 0 rem(42px);
    height: rem(136px);
    line-height: rem(136px);
    color: #525252;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .iconfont{
        font-size: rem(64px);
    }
    .icon-wenzhang1{
        color: #e78273;
    }
    .icon-yinsihemimashezhi{
        color: #4abe39;
    }
    h3{
        flex:1;
        margin-left: rem(36px);
        font-size: rem(42px);
    }
    span{
        margin-right: rem(32px);
    }
}

</style>
