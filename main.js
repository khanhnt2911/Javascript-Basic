const obj1 = [
  { tienkhanh: "1", khanh1: "khanhaa" },
  { tienkhanh: "2", khanh1: "1" },
  { tienkhanh: "3", khanh1: "khanh1" },
  { tienkhanh: "4", khanh1: "khanh" },
];

const arr1 = {
  khanh: "khanh1",
  khanh2: "khanh2",
  khanh3: "khanh3",
  khanh4: "khanh4",
  khanh5: "khanh5",
};

const obj2 = {};
for (let i = 0; i < obj1.length; i++) {
  obj2[i] = obj1[i];
  console.log(obj2);
}

console.log(Object.keys(arr1).concat(Object.values(arr1)));
