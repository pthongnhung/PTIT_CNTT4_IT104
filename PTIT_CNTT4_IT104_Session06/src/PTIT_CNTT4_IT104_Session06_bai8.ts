class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getStock(): number {
        return this.stock;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    public setStatus(status: string): void {
        this.status = status;
    }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[] = [];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getContact(): string {
        return this.contact;
    }

    public getLendedBooks(): LendedBook[] {
        return this.lendedBooks;
    }

    public getStatus(): string {
        return this.status;
    }

    public addLendedBook(book: LendedBook): void {
        this.lendedBooks.push(book);
    }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: Date;

    constructor(memberId: number, bookId: number, dueDate: Date) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }

    public getMemberId(): number {
        return this.memberId;
    }

    public getBookId(): number {
        return this.bookId;
    }

    public getDueDate(): Date {
        return this.dueDate;
    }
}

class Library {
    private books: Book[] = [];
    private members: Member[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(book => {
            console.log(`ID: ${book.getId()} | Tiêu đề: ${book.getTitle()} | Tác giả: ${book.getAuthor()} | Số lượng: ${book.getStock()} | Trạng thái: ${book.getStatus()}`);
        });
    }
}

const library = new Library();

const book1 = new Book(1, "Lập trình Java", "Nguyễn Văn A", 5, "Còn hàng");
const book2 = new Book(2, "Học TypeScript", "Trần Thị B", 2, "Còn hàng");
const book3 = new Book(3, "Cấu trúc dữ liệu", "Lê Văn C", 0, "Hết hàng");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.showBooks();