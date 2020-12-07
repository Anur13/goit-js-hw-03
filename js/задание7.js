/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
}

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        let transaction = {
            type,
            amount,
            id: this.transactions.length,
        }
        return transaction
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму транзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.createTransaction(amount, `deposit`), (this.balance += amount)
        this.transactions.push(this.createTransaction(amount, `deposit`))
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.createTransaction(amount, `withdraw`), this.transactions.push(this.createTransaction(amount, `withdraw`))
        if (amount > this.balance) {
            console.log(`снятие такой суммы не возможно, недостаточно средств.`)
        }
        this.balance -= amount
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        return account.transactions[id]
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0

        for (let key of this.transactions) {
            // console.log(key.amount)
            if (key.type === type) {
                total += key.amount
            }
        }
        console.log(total)
    },
}
console.log(account.deposit(500))
console.log(account.deposit(1500))

console.log(account.deposit(500))
console.log(account.withdraw(400))
console.log(account.withdraw(400))

// console.log(account.balance)
// console.log(account.transactions)
console.log(account.getBalance())
// console.log(account.getTransactionDetails(0))
// console.log(account.transactions[0])
console.log(account.getTransactionTotal(`deposit`))
