<template>
  <layout>
    <Tabs :dataSource="typeList" class-prefix="type" :value.sync="type" />
    <Tabs
      :dataSource="intervalList"
      class-prefix="interval"
      :value.sync="interval"
    />
    <div>
      type:{{ type }}
      <br />
      interval: {{ interval }}
    </div>
  </layout>
</template>

<script lang="ts">
import Tabs from "@/components/Tabs.vue";
import Types from "@/components/Money/Types.vue";
import Vue from "vue";
import { Component } from "vue-property-decorator";
@Component({
  components: { Types, Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = [
    { text: "按天", value: "day" },
    { text: "按周", value: "week" },
    { text: "按月", value: "month" },
  ];
  typeList = [
    { text: "支出", value: "-" },
    { text: "收入", value: "+" },
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .type-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &.selected::after {
      display: none;
    }
  }
}
::v-deep .interval-tabs-item {
  background: white;
  &.selected {
    background: #c4c4c4;
    &.selected::after {
      display: none;
    }
  }
}
</style>
