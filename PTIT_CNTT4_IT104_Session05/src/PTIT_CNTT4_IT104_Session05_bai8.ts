class MyBook {
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

    public getTitle(): string {
        return this.title;
    }

    public getInfo(): string {
        return `${this.id} Tiêu đề: ${this.title}, Tác giả: ${this.author}`;
    }
}

class MyLibrary {
    private books: MyBook[] = [];

    public addBook(book: MyBook): void {
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

    public findBooksByTitle(keyword: string): void {
        const results = this.books.filter(book =>
            book.getTitle().toLowerCase().includes(keyword.toLowerCase())
        );

        if (results.length === 0) {
            console.log(`Không tìm thấy sách với từ khóa "${keyword}"`);
        } else {
            console.log(`📚 Kết quả tìm kiếm với từ khóa "${keyword}":`);
            for (let i = 0; i < results.length; i++) {
                console.log(results[i].getInfo());
            }
        }
    }
}

const bookA = new MyBook(1, "Dế Mèn Phiêu Lưu Ký", "Tô Hoài");
const bookB = new MyBook(2, "Kiếp Đỏ Đen", "Nam Cao");
const bookC = new MyBook(3, "Số Đỏ", "Vũ Trọng Phụng");
const bookD = new MyBook(4, "Tắt Đèn", "Ngô Tất Tố");
const bookE = new MyBook(5, "Tuổi Thơ Dữ Dội", "Phùng Quán");

const libraryA = new MyLibrary();
libraryA.addBook(bookA);
libraryA.addBook(bookB);
libraryA.addBook(bookC);
libraryA.addBook(bookD);
libraryA.addBook(bookE);

libraryA.showBooks();

libraryA.findBooksByTitle("đỏ");
libraryA.findBooksByTitle("lão");
