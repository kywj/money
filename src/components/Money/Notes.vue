<template>
  <div>
    <label class="notes">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" :placeholder="this.placeHolder" v-model="value" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class Notes extends Vue {
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeHolder?: string;
  value = "";
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
}
</script>

<style lang="scss" scoped>
.notes {
  background: #eeeeee;
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    line-height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
