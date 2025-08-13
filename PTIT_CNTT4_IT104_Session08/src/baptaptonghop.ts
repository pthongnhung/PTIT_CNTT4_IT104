//B1:tao lop book
class book{
    id: number;
    title: string;
    author: string;
    year: number;
    constructor(id: number, title: string,
        author: string,year:number
    ) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
    }
}
//B2:tao lop thu vien
class Library<T extends{id:number,name:string,author:string,year:number}> {
    //tao mang chua cac quyen sach trong thu vien
    books: T[] = [];
    //dinh nghia cac phuong thuc:
    //1.them sach vao thu vien
    addBook(book: T): void {
        this.books.push(book);//them 1 quyen sach vao trong thu vien
    }
    //2.tim sach theo id (neu co thi tra ve sach con khong co thi tra ve undefined)
    getBookById(id: number): T | undefined {
        return this.books.find(item => item.id === id)
    }
    //3.xoa sach khoi thu vien theo id
    removeBookById(id:number): void{
        let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log(`khong co sach trong thu vien`);   
        } else {
            let confirmDelete = confirm(`ban co muon xoa sach: ${this.books[index].name} hay khong`);
            if (confirmDelete) {
                this.books.splice(index, 1);
            }
        }
    }
    //4.cap nhat thong tin sach
    updateBook(id: number,new_book:T): void{
         let index = this.books.findIndex(item => item.id == id);
        if (index == -1) {
            console.log(`khong co sach trong thu vien`);   
        } else {
            let confirmDelete = confirm(`ban co muon sua sach: ${this.books[index].name} hay khong`);
            if (confirmDelete) {
                this.books[index] = new_book;
            }
        }
    }
    listBooks(): void{
        this.books.forEach((item, index)=>
        console.log(`${index+1}: ID:${item.id}, Title:${item.name}, Author:${item.author}, Nam xuat ban:${item.year}`));
        
    }
    findBooksByTitleOrAuthor(searchTerm: string): T[]{
        return this.books.filter(item => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) || 
        this.books.filter(item=>item.author.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    }
}
//B3:viet cac ham trien khai ung dung