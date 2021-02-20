type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number; // 数据类型
  createAt?: Date; // 类 / 构造函数
};

type Tag = {
  id: string;
  name: string;
};

type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated";
  update: (id: string, name: string) => "success" | "not found" | "duplicated";
  remove: (id: string) => boolean;
  save: () => void;
};

interface Window {
  tagList: Tag[];
  recordList: RecordItem[];
  createTag: (name: string) => void;
  findTag: (id: string) => Tag | undefined;
  removeTag: (id: string) => boolean;
  updateTag: (
    id: string,
    name: string
  ) => "success" | "not found" | "duplicated";
  createRecord: (record: RecordItem) => void;
}
