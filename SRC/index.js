const arr = [1, 1, 2, 2, 2, 44, 4, "qwe", "qwe"];

function getSet(params) {
  let mySet = {};

  params.forEach((el) => {
    if (mySet[el]) {
      mySet[el] = mySet[el] + 1;
    } else {
      mySet[el] = 1;
    }
  });
  return mySet;
}

const q = getSet(arr);
console.log(q);
