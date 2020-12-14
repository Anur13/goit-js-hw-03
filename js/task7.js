/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
}
let idValue = 0

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
            id: (idValue += 1),
        }
        return transaction
    },

    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, `deposit`))
    },

    withdraw(amount) {
        this.transactions.push(this.createTransaction(amount, `withdraw`))
        if (amount > this.balance) {
            return `снятие такой суммы не возможно, недостаточно средств.`
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
        for (let transaction of this.transactions) {
            // console.log(transaction.id)
            if (transaction.id === id) {
                return transaction
            }
        }
        return `такой транзакции нет`
    },
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0

        for (let key of this.transactions) {
            if (key.type === type) {
                total += key.amount
            }
        }
        return total
    },
}
account.deposit(500)
// console.log(account.createTransaction(500, `withdraw`))

// console.log(account.transactions)

account.deposit(1500)

account.deposit(500)
account.withdraw(400)
account.withdraw(400)

// console.log(account.balance)
// console.log(account.transactions)
// console.log(account.getBalance())
console.log(account.getTransactionDetails(7))
// console.log(account.transactions[0])
// console.log(account.getTransactionTotal(`deposit`))
// console.log(account.getTransactionTotal(`withdraw`))

console.log(account.transactions)
// console.log(account.createTransaction(500, `withdraw`))
