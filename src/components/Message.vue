<template>
<div>
	<header class="header">
        <h3>消息</h3>
        <i class="iconfont icon-xiaoxishezhi"></i>
        <i class="iconfont icon-sousuo"></i>
    </header>
    <section class="main">
        <div class="item">
            <i class="iconfont icon-pinglun"></i>
            <div>评论</div>
        </div>
        <div class="item">
            <i class="iconfont icon-pinglun"></i>
            <div>简信</div>
        </div>
        <div class="item">
            <i class="iconfont icon-tougaoguanli"></i>
            <div>
                <p>投稿请求</p>
                <p class="text">专题有新投稿，将出现在这里</p>
            </div>
        </div>
        <div class="item">
            <i class="iconfont icon-heart"></i>
            <div>喜欢和赞</div>
        </div>
        <div class="item">
            <i class="iconfont icon-guanzhu"></i>
            <div>关注</div>
        </div>
        <div class="item">
            <i class="iconfont icon-shang"></i>
            <div>赞赏</div>
        </div>
        <div class="item">
            <i class="iconfont icon-sandian"></i>
            <div>
                <p>其他提醒</p>
                <p class="text">有用户关注你的专题等</p>
            </div>
        </div>
    </section>
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

.item {
    display: flex;
    align-items:center;
    height: rem(138px);
    margin-left: rem(48px);
    font-size: rem(42px);
    border-bottom: 1px solid #ddd;
    .iconfont {
        margin-right: rem(48px);
        font-size: rem(56px);
        color: #e78170;
    }
    .text{
        margin-top: rem(20px);
        font-size: rem(32px);
        color: #999;
    }
}

</style>
