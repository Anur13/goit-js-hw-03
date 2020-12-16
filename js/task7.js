const Transaction = {
    DEPOSIT: "deposit",
    WITHDRAW: "withdraw",
}
let idValue = 0

const account = {
    balance: 0,

    transactions: [],

    createTransaction(amount, type) {
        idValue += 1
        let transaction = {
            type,
            amount,
            id: idValue,
        }
        return transaction
    },

    deposit(amount) {
        this.balance += amount
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT))
    },

    withdraw(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW))
        if (amount > this.getBalance) {
            return `снятие такой суммы не возможно, недостаточно средств.`
        }
        this.balance -= amount
    },

    getBalance() {
        return this.balance
    },

    getTransactionDetails(id) {
        for (let transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction
            }
        }
        return `такой транзакции нет`
    },

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
console.log(account.getBalance())
// console.log(account.getTransactionDetails(4))
// console.log(account.transactions[0])
// console.log(account.getTransactionTotal(`deposit`))
// console.log(account.getTransactionTotal(`withdraw`))

// console.log(account.transactions)
// console.log(account.createTransaction(500, `withdraw`))
