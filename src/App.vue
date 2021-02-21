<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import store from "@/store/index2.ts";
export default {
  name: "App",
  data() {
    return {
      store: store,
    };
  },
};
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  font-family: $font-hei;
  font-size: 16px;
  color: #333;
  background: #f5f5f5;
}
</style>
