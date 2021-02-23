<template>
  <layout>
    <Tabs :dataSource="recordTypeList" class-prefix="type" :value.sync="type" />
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
import Vue from "vue";
import { Component } from "vue-property-decorator";
import intervalList from "@/constants/intervalList.ts";
import recordTypeList from "@/constants/recordTypeList.ts";

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="scss" scoped>
::v-deep {
  .type-tabs-item {
    background: white;
    &.selected {
      background: #c4c4c4;
      &.selected::after {
        display: none;
      }
    }
  }
  .interval-tabs-item {
    height: 48px;
  }
}
</style>
