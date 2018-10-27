<template>
	<div>  
    <router-view></router-view>
    <!-- {{$route.path:固定用法，获取当前页面的路径}} -->
    <nav class="nav">
        <router-link to="/" tag="div">
            <!-- 如果是/,则添加icon-index-active类，如果不是，则添加icon-index类 -->
            <p><i class="iconfont" :class="$route.path=='/' ? 'icon-index-active' : 'icon-index'"></i></p>
            <p class="text">首页</p>
        </router-link>
        <router-link to="/find" tag="div">
            <p><i class="iconfont" :class="$route.path=='/find' ? 'icon-find-active' : 'icon-find'"></i></p>
            <p class="text">发现</p>
        </router-link>
        <router-link to="/create" tag="div">
            <span>+</span>
        </router-link>
        <router-link to="/message" tag="div">
            <p><i class="iconfont" :class="$route.path=='/message' ? 'icon-message-active' : 'icon-message'"></i></p>
            <p class="text">消息</p>
        </router-link>
        <router-link to="/me" tag="div">
            <p><i class="iconfont" :class="$route.path=='/me' ? 'icon-my-active' : 'icon-my'"></i></p>
            <p class="text">我的</p>
        </router-link>
    </nav>		
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss">
// 引入base.scss
@import './assets/base.scss';

body{
    padding-bottom:rem(144px);
}

.nav {
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: rem(144px);
    text-align: center;
    background-color: #fff;
    border-top: 1px solid #ddd;
    div {
        flex: 1;
        .text {
            margin-top: rem(8px);
        }
        span {
            display: inline-block;
            width: rem(112px);
            height: rem(112px);
            font-size: rem(84px);
            text-align: center;
            line-height: rem(112px);
            color: #fff;
            border-radius: 50%;
            background-color: #e78273;
        }
    }
    .iconfont {
        font-size: rem(70px);
    }
}
</style>
