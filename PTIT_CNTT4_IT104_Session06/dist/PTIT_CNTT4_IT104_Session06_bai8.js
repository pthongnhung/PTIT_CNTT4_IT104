class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
    setStock(stock) {
        this.stock = stock;
    }
    setStatus(status) {
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.lendedBooks = [];
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContact() {
        return this.contact;
    }
    getLendedBooks() {
        return this.lendedBooks;
    }
    getStatus() {
        return this.status;
    }
    addLendedBook(book) {
        this.lendedBooks.push(book);
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    getMemberId() {
        return this.memberId;
    }
    getBookId() {
        return this.bookId;
    }
    getDueDate() {
        return this.dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
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
