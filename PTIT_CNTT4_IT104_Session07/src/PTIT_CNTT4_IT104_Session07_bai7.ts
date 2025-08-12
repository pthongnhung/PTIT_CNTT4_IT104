class AccountV2 {
    public accountNumber: string;
    protected balance: number;
    protected history: string[];
    protected status: "active" | "inactive";

    constructor(accountNumber: string, initialBalance: number) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }

    public deposit(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền nạp không hợp lệ");
        }
    }

    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        } else {
            console.log("Số tiền rút không hợp lệ hoặc vượt quá số dư");
        }
    }

    public showHistory(): void {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((h) => console.log(h));
    }
}

class SavingAccountV2 extends AccountV2 {
    public interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    public override withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        } else if (amount > this.balance) {
            console.log("Không thể rút quá số dư. Số dư hiện tại: " + this.balance);
        } else {
            console.log("Số tiền rút không hợp lệ");
        }
    }
}

const mySavingAccV2 = new SavingAccountV2("123456789", 5000, 0.05);
mySavingAccV2.deposit(2000);
mySavingAccV2.withdraw(1000);
mySavingAccV2.withdraw(7000);
mySavingAccV2.withdraw(6000);
mySavingAccV2.showHistory();
