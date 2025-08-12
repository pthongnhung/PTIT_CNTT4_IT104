class Account{
    public id: number;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;
    constructor(id: number, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login(password: string): void{
        if (this.password == password) {
            this.isLogin = true;
            console.log(`dang nhap thanh cong`);
        } else {
            console.log(`sai mat khau`);
        }
    }
    logount(): void{
        if (this.isLogin) {
            console.log(`dang xuat thanh cong`);
            this.isLogin = false;
        }
    }
}
class userAcc extends Account{
    public status: "active" | "banned";
    constructor(id: number, userName: string, password: string, role: string,status:"active" | "banned") {
        super(id, userName, password, role);
        this.status = this.status;
    }
     public override login(password: string): void {
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


 