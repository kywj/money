<template>
  <div class="nav-wrapper">
    <div class="content">
      Labels.vue
    </div>
    <Nav />
  </div>
</template>

<script>
export default {
  name: "Labels",
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  border: 1px solid blue;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
  overflow: auto;
}
</style>
