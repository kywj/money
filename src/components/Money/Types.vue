<template>
  <div>
    <ul class="types">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Types",
};
</script>

<style lang="scss" scoped>
.types {
  background: #ddd;
  display: flex;
  text-align: center;
  font-size: 24px;
  > li {
    width: 50%;
    line-height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected::after {
      content: "";
      display: block;
      position: absolute;
      height: 3px;
      background: #333;
      bottom: 0;
      left: 0;
      width: 100%;
    }
  }
}
</style>
