<template>
<div>
	<header class="header">
        <i class="iconfont icon-zuojiantou"></i>
        <h3>0字</h3>
        <p>发布</p>
    </header>
    <section class="article">
        <div class="title">
            <input type="text" placeholder="请输入标题">
        </div>
        <div class="content">
            <textarea placeholder="请输入正文"></textarea>
        </div>
    </section>
</div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@function rem($px) {
    @return $px/108px*1rem;
}
.header {
    display: flex;
    height: rem(136px);
    padding: 0 rem(48px);
    line-height: rem(136px);
    font-size: rem(48px);
    border-bottom: 1px solid #ddd;
    .iconfont {
        font-size: rem(48px);
        margin-right: rem(52px);
    }
    h3 {
        flex: 1;
    }
    p {
        color: #e58c7c;
    }
}

.article {
    padding: 0 rem(48px);
    .title {
        height: rem(158px);
        line-height: rem(158px);
        border-bottom: 1px dashed #ddd;
        input {
            width: 100%;
            height: rem(152px);
            font-size: rem(64px);
            border:0;
            outline: none;
        }
    }
    .content {
        width: 100%;
        height: 100%;
        padding-top: rem(50px);
        textarea {
            width: 100%;
            height: 300px;
            font-size: rem(48px);
            border:0;
            outline: 0;
        }
    }
}

</style>
