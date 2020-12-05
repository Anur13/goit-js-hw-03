const countProps = function (obj) {
  const countPropsKeys = Object.keys(obj)
 return countPropsKeys.length;
};


console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3