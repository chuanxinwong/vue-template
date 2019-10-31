<style lang="less" scoped>
.header {
    position: fixed;
    width: 100%;
    height: 70px;
    background-color: #eee;
    top: 0;
    left: 0;
    z-index: 5000;
    a {
        margin: 0 20px;
    }
}
</style>
<template>
    <div class="header">
        <span>带有 Header 的布局</span>
        <router-link to="/head/">footer index</router-link>
        <router-link to="/head/page1">footer page1</router-link>
        <router-link to="/head/page2">footer page2</router-link>
    </div>
</template>
