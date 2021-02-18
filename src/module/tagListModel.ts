const localStorageKeyName = "recordList";

type TagListModel = {
  data: string[];
  fetch: () => string[];
  create: (name: string) => "成功" | "失败";
  save: () => void;
};

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(
      window.localStorage.getItem(localStorageKeyName) || "[]"
    );
    return this.data;
  },
  create(name) {
    if (this.data.indexOf(name) >= 0) {
      return "失败";
    }
    this.data.push(name);
    this.save();
    return "成功";
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagListModel;
