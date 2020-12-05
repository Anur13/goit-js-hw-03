const findBestEmployee = function (employees) {
  let mostTasks = 0
  let bestEmployee
  for (const key in employees) {
    // console.log(key)
    // console.log(employees[key])

    if (employees[key] > mostTasks) {
      // console.log(employees[key])

      mostTasks = employees[key]
      bestEmployee = key
    }
  }
  return `${bestEmployee} : ${mostTasks}`
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
) // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
) // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
)
