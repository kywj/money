<template>
  <layout>
    <div>
      <Icon name="left" />
      <span>编辑页面</span>
    </div>
    <FormItem fieldName="标签名" placeHolder="请输入标签名" />
    <Button>删除标签</Button>
  </layout>
</template>

<script lang="ts">
import tagListModel from "@/module/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormItem from "@/components/Money/FormItem.vue";
import Button from "@/components/Button.vue";
@Component({
  components: { Button, FormItem },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped></style>
