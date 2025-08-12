class AccountV3 {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount}  Số dư: ${this.balance}`);
        }
        else {
            console.log("Số tiền nạp không hợp lệ");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: ${amount}  Số dư: ${this.balance}`);
        }
        else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư");
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((h) => console.log(h));
    }
}
class CheckingAccountV3 extends AccountV3 {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log("Số tiền rút không hợp lệ");
            return;
        }
        const projected = this.balance - amount;
        if (projected >= -this.overdraftLimit) {
            this.balance = projected;
            this.history.push(`Rút: -${amount} Số dư: ${this.balance}`);
        }
        else {
            console.log(`Vượt quá hạn mức thấu chi. Tối đa có thể rút: ${this.balance + this.overdraftLimit}`);
        }
    }
}
const myCheckingV3 = new CheckingAccountV3("987654321", 1000, 500);
myCheckingV3.deposit(300);
myCheckingV3.withdraw(1500);
myCheckingV3.withdraw(400);
myCheckingV3.deposit(250);
myCheckingV3.showHistory();
