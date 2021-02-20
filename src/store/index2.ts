import tagListModel from "@/module/tagListModel";
import recordListModel from "@/module/recordListModel";

const store = {
  // record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  },

  // tag store
  tagList: tagListModel.fetch(),
  createTag: (name: string) => {
    const message = tagListModel.create(name);
    if (message === "success") {
      window.alert("添加成功");
    } else if (message === "duplicated") {
      window.alert("标签名重复");
    }
  },
  findTag(id: string) {
    return this.tagList.filter((t) => t.id === id)[0];
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id);
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name);
  },
};

export default store;
