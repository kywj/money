const localStorageKeyName = "recordList";

type Tag = {
  id: string;
  name: string;
};

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
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
    // this.data = [{id: '1', name: '1'}, {id: '2', name: '2' }]
    const names = this.data.map((item) => item.name);
    if (names.indexOf(name) >= 0) {
      return "失败";
    }
    this.data.push({ id: name, name: name });
    this.save();
    return "成功";
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
};

export default tagListModel;
