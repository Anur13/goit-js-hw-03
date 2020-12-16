const findBestEmployee = function (employees) {
    let bestEmployee
    let keys = Object.keys(employees)
    let mostTasks = employees[keys[0]]
    let values = Object.values(employees)
    for (let i = 0; i < keys.length; i++) {
        if (values[i] > mostTasks) {
            mostTasks = values[i]
            bestEmployee = keys[i]
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
