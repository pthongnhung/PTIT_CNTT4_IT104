class Account2 {
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

    public login(password: string): void {
        if (this.password === password) {
            this.isLogin = true;
            console.log("Đăng nhập thành công");
        } else {
            console.log("Sai mật khẩu");
        }
    }

    public logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        }
    }
}

class UserAcc2 extends Account2 {
    public status: "active" | "banned";

    constructor(
        id: number,
        userName: string,
        password: string,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, role);
        this.status = status;
    }

    public override login(password: string): void {
        if (this.status === "banned") {
            console.log("Tài khoản đã bị khóa");
            return;
        }
        super.login(password);
    }
}

class AdminAcc2 extends Account2 {
    public banUser(id: number, users: UserAcc2[]): void {
        const user = users.find((u) => u.id === id);
        if (user) {
            user.status = "banned";
            console.log(`Người dùng ${user.userName} ID: ${id} đã bị cấm`);
        } else {
            console.log(`Không tìm thấy người dùng với ID: ${id}`);
        }
    }
}

const users2: UserAcc2[] = [
    new UserAcc2(1, "nhung", "123456", "user", "active"),
    new UserAcc2(2, "hong", "abcdef", "user", "active"),
];

const admin2 = new AdminAcc2(99, "admin", "admin123", "admin");

users2[0].login("123456");
admin2.banUser(1, users2);
users2[0].login("123456");
