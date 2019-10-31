<style lang="less" scoped>
.footer {
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #eee;
    left: 0;
    bottom: 0;
    z-index: 5000;
    a {
        margin: 0 20px;
    }
}
</style>
<template>
    <div class="footer">
        <span>带有 Footer 的布局</span>
        <router-link to="/foot">footer index</router-link>
        <router-link to="/foot/page1">footer page1</router-link>
        <router-link to="/foot/page2">footer page2</router-link>
    </div>
</template>
