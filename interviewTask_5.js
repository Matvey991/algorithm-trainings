// Преобразовать вложенный объект в flat-структуру

const tree = {
  a: {
    b: "two",
    c: {
      d: "one",
    },
  },
};

let parentKey;

const treeFn = (tree, parentKey) => {
  let result = {};

  for (let key in tree) {
    let newKey = parentKey ? `${parentKey}.${key}` : key;

    if (typeof tree[key] === "object") {
      Object.assign(result, treeFn(tree[key], newKey));
    } else {
      result[newKey] = tree[key];
    }
  }
  console.log(result);
};
treeFn(tree, parentKey)
