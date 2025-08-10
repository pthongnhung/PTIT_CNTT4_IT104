class $Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `[${this.id}] Tiêu đề: ${this.title}, Tác giả: ${this.author}, Năm XB: ${this.year}`;
    }
    update(title, author, year) {
        if (title && title.length > 0)
            this.title = title;
        if (author && author.length > 0)
            this.author = author;
        if (typeof year === "number" && year > 0)
            this.year = year;
    }
}
class $Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        if (this.books.length === 0) {
            console.log("Không có sách trong thư viện");
        }
        else {
            for (let i = 0; i < this.books.length; i++) {
                console.log(`${i + 1}: ${this.books[i].getInfo()}`);
            }
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books[i].update(newTitle, newAuthor, newYear);
                console.log(`Đã cập nhật sách có id = ${id}`);
                return true;
            }
        }
        console.log(`Không tìm thấy sách với id = ${id}`);
        return false;
    }
    deleteBookById(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].getId() === id) {
                this.books.splice(i, 1);
                console.log(`Đã xóa sách có id = ${id}`);
                return true;
            }
        }
        console.log(`Không tìm thấy sách với id = ${id}`);
        return false;
    }
}
// Demo
const $book1 = new $Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài", 1941);
const $book2 = new $Book(2, "Lão Hạc", "Nam Cao", 1943);
const $book3 = new $Book(3, "Số Đỏ", "Vũ Trọng Phụng", 1936);
const $book4 = new $Book(4, "Tắt Đèn", "Ngô Tất Tố", 1939);
const $book5 = new $Book(5, "Tuổi Thơ Dữ Dội", "Phùng Quán", 1988);
const $library = new $Library();
$library.addBook($book1);
$library.addBook($book2);
$library.addBook($book3);
$library.addBook($book4);
$library.addBook($book5);
$library.showBooks();
$library.updateBookById(3, "Truyện ma", "Nguyễn Ngọc Ngạn", 2020);
$library.showBooks();
$library.deleteBookById(2);
$library.showBooks();
