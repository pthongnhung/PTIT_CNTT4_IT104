class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getInfo() {
        return `Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length == 0) {
            console.log(`khong co sach trong thu vien`);
        }
        else {
            for (let i = 0; i < this.books.length; i++) {
                console.log(`${i + 1}: ${this.books[i].getInfo()}`);
            }
        }
    }
}
const book1 = new Book("Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const book2 = new Book("Lão Hạc", "Nam Cao");
const book3 = new Book("Số Đỏ", "Vũ Trọng Phụng");
const book4 = new Book("Tắt Đèn", "Ngô Tất Tố");
const book5 = new Book("Tuổi Thơ Dữ Dội", "Phùng Quán");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.showBooks();
