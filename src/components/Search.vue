<template>
<div>
    <header class="header">
        <i class="iconfont icon-zuojiantou"></i>
        <div class="search">
            <input type="text" placeholder="搜索文章、专题、用户、文集">
            <i class="iconfont icon-sousuo"></i>
        </div>
    </header>
    <div class="main">
        在 “我的关注” 中搜索<i class="iconfont icon-zuojiantou"></i>
    </div>
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
    align-items: center;
    height: rem(178px);
    padding: 0 rem(48px);
    .iconfont {
        font-size: rem(48px);
    }
    .icon-zuojiantou {
        margin-right: rem(44px);
    }
    .search {
        display: flex;
        align-items: center;
        flex: 1;
        height: rem(100px);
        padding-left: rem(50px);
        border-radius: rem(50px);
        border: 1px solid #ddd;
        input {
            width: 100%;
            height: rem(48px);
            font-size: rem(48px);
            border: 0;
            border-right: 1px solid #999;
            outline: 0;
        }
        .icon-sousuo {
            margin-left: rem(36px);
            margin-right: rem(48px);
        }
    }
}

.main {
    height: rem(136px);
    line-height: rem(136px);
    text-align: center;
    color: #666;
    border-bottom: 1px solid #ddd;
}
</style>
