<style lang="less" scoped>
.layout {
    padding-top: 70px;
}
</style>

<template>
    <div class="layout">
        <Header/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>
<script>
import Header from './header';
export default {
    data() {
        return {
            text: "",
        }
    },
    components: {
        Header
    },
}
</script>
