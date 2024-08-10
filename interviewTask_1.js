const arr = [
    { type: "banana", weight: 32 },
    { type: "apple", weight: 24 },
    { type: "kiwi", weight: 55 },
    { type: "banana", weight: 44 },
    { type: "orange", weight: 5 },
  ];

const groupByType = (arr) => {
    const result = {}
    arr.forEach((item) => {
        const {type, ...rest} = item

        if(result[type]) {
            result[type].push(rest)
        } else {
            result[type] = [rest]
        }
    });
    console.log(result);
    
}
groupByType(arr)