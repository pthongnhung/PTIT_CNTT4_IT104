class _Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    public getId(): number {
        return this.id;
    }

    public getInfo(): string {
        return `[${this.id}] Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }

    public update(title: string, author: string): void {
        if (title && title.length > 0) {
            this.title = title;
        }
        if (author && author.length > 0) {
            this.author = author;
        }
    }
}

class _Library {
    private books: _Book[] = [];

    public addBook(book: _Book): void {
        this.books.push(book);
    }

    public showBooks(): void {
        if (this.books.length === 0) {
            console.log("Không có sách trong thư viện");
        } else {
            for (let i = 0; i < this.books.length; i++) {
                console.log(`${i + 1}: ${this.books[i].getInfo()}`);
            }
        }
    }

   public updateBookById(id: number, newTitle: string, newAuthor: string): boolean {
    for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].getId() === id) {
            this.books[i].update(newTitle, newAuthor);
            console.log(`Đã cập nhật sách có id = ${id}`);
            return true;
        }
    }
    console.log(`Không tìm thấy sách với id = ${id}`);
    return false;
}

}

const _book1 = new _Book(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const _book2 = new _Book(2, "Lão Hạc", "Nam Cao");
const _book3 = new _Book(3, "Số Đỏ", "Vũ Trọng Phụng");
const _book4 = new _Book(4, "Tắt Đèn", "Ngô Tất Tố");
const _book5 = new _Book(5, "Tuổi Thơ Dữ Dội", "Phùng Quán");

const _library = new _Library();
_library.addBook(_book1);
_library.addBook(_book2);
_library.addBook(_book3);
_library.addBook(_book4);
_library.addBook(_book5);

_library.showBooks();
_library.updateBookById(3, "Truyện ma", "Nguyễn Ngọc Ngạn");
console.log("\nSau khi cập nhật:");
_library.showBooks();
