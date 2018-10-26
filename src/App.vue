<template>
  <div class="app">
    <!--底部导航 start-->
      <nav>
        <ul class="nav">
              <li><router-link to="/"  tag="div">
                    <i class="iconfont icon-index"></i>
                    <h3>首页</h3>
                </router-link>
              </li>
              <li><router-link to="/find"  tag="div">
                  <i class="iconfont icon-find"></i>
                  <h3>发现</h3>
              </router-link>
            </li>
            <li><router-link to="/create"  tag="div">
                <span>+</span>
            </router-link>
          </li>
          <li><router-link to="/message"  tag="div">
              <i class="iconfont icon-message"></i>
              <h3>消息</h3>
           </router-link>
        </li>
        <li><router-link to="/me"  tag="div">
            <i class="iconfont icon-my"></i>
            <h3>我的</h3>
         </router-link>
      </li>
      </ul>
    </nav>
 
    <!--底部导航 end-->
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
 /* 底部导航 start */
.nav {
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 1.33333rem;
  font-size: 0.24074rem;
  text-align: center;
  background-color: #ddd; }
  .nav li {
    flex: 1; }
    .nav li a {
      display: block;
      color: #636563; }
    .nav li .iconfont {
      font-size: 0.64815rem; }
    .nav li span {
      display: inline-block;
      width: 1.03704rem;
      height: 1.03704rem;
      background-color: #e78273;
      text-align: center;
      font-size: 0.38889rem;
      line-height: 1.03704rem;
      color: #fff;
      border-radius: 50%; }

/* 底部导航 end */
</style>
