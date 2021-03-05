<template>
  <div>
    <label class="form-item">
      <span class="name">{{ this.fieldName }}</span>
      <template v-if="type === 'date'">
        <input
          :type="type || 'text'"
          :placeholder="placeHolder"
          :value="x(value)"
          @input="onValueChanged($event.target.value)"
        />
      </template>
      <template v-else>
        <input
          :type="type || 'text'"
          :placeholder="placeHolder"
          :value="value"
          @input="onValueChanged($event.target.value)"
        />
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
import dayjs from "dayjs";

@Component
export default class FormItem extends Vue {
  @Prop({ required: true }) fieldName!: string;
  @Prop() placeHolder?: string;
  @Prop({ default: "" }) readonly value!: string;
  @Prop() type?: string;

  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
  x(isoString: string) {
    return dayjs(isoString).format("YYYY-MM-DD");
  }
}
</script>

<style lang="scss" scoped>
.form-item {
  display: block;
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    line-height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>
