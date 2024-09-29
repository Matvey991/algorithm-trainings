// Вернуть объект с ключами type, а значение - объект
// вида {count: количество, weight: суммарный вес}

const arr = [
  { type: "banana", weight: 32 },
  { type: "apple", weight: 24 },
  { type: "kiwi", weight: 55 },
  { type: "banana", weight: 44 },
  { type: "orange", weight: 5 },
];

const groupByType = (arr) => {
  const result = {};
  arr.forEach((item) => {
    const { type, weight } = item;

    if (result[type]) {
      result[type].count++;
      result[type].weight += weight;
    } else {
      result[type] = { count: 1, weight };
    }
  });
  console.log(result);
};
groupByType(arr)
