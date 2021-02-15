<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Types",
  props: ["xxx"],
  data() {
    return {
      type: "-", // - 表示支出，+ 表示收入
    };
  },
  mounted() {
    console.log(this.xxx);
  },
  methods: {
    selectType(type) {
      if (type !== "-" && type !== "+") {
        throw new Error("type is unknown");
      }
      this.type = type; // type 只能是 - 和 +
    },
  },
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
