<style lang="less" scoped>
.layout {
    padding-bottom: 60px;
}
</style>

<template>
    <div Footer="layout">
        <div class="content">
            <router-view />
        </div>
        <Footer />
    </div>
</template>
<script>
import Footer from "./footer";
export default {
    data() {
        return {
            text: ""
        };
    },
    components: {
        Footer
    }
};
</script>
