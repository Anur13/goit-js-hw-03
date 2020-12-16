const products = [
    { name: "Радар", price: 1300, quantity: 4 },
    { name: "Сканер", price: 2700, quantity: 3 },
    { name: "Дроид", price: 400, quantity: 7 },
    { name: "Захват", price: 1200, quantity: 2 },
]
// вариант 1

// const getAllPropValues = (arr, prop) => arr.filter((user) => user.hasOwnProperty(prop)).map((user) => user[prop])

// const getAllPropValues = function (arr, prop) {
//     let category = []

//     for (let key of arr) {
//         let values = Object.entries(key)
//         // console.log(values)
//         for (let value of values) {
//             if (value[0] === prop) {
//                 category.push(value[1])
//             }
//         }
//     }
//     return category
// }

// console.log(getAllPropValues(products, "name")) // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")) // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "price")) // []

// вариант 2

// const getAllPropValues = function (arr, prop) {
//     let category = []

//     for (let i = 0; i < arr.length; i++) {
//         let values = Object.entries(arr[i])
//         // console.log(values)
//         for (let j = 0; j < values.length; j++) {
//             let value = values[j]
//             // console.log(value)
//             if (value[0] === prop) {
//                 category.push(value[1])
//             }
//         }
//     }
//     return category
// }

// console.log(getAllPropValues(products, "name")) // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")) // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "price")) // []

// вариант 3

// const getAllPropValues = function (arr, prop) {
//     let category = []
//     for (let product of arr) {
//         if (product[prop]) {
//             category.push(product[prop])
//         }
//     }
//     return category
// }

// console.log(getAllPropValues(products, "name")) // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")) // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "price")) // []

// вариант 4

const getAllPropValues = function (arr, prop) {
    let category = []
    for (let product of arr) {
        if (product.hasOwnProperty(prop)) {
            category.push(product[prop])
        }
    }
    return category
}

console.log(getAllPropValues(products, "name")) // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity")) // [4, 3, 7, 2]

console.log(getAllPropValues(products, "price")) // []
