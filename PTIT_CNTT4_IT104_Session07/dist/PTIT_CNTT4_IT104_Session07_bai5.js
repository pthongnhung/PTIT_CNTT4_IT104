class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password) {
        if (this.password == password) {
            this.isLogin = true;
            console.log(`dang nhap thanh cong`);
        }
        else {
            console.log(`sai mat khau`);
        }
    }
    logount() {
        if (this.isLogin) {
            console.log(`dang xuat thanh cong`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = this.status;
    }
    login(password) {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
        super.login(password);
    }
}
const user1 = new userAcc(1, "trung", "123456", "user", "active");
user1.login("123456");
user1.logount();
