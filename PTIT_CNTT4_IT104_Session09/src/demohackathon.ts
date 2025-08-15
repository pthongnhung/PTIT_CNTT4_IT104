class Customer {
    private static nextId: number = 1;
    readonly id: number;
    name: string;
    email: string;
    shippingAddress: string;
    constructor( name: string, email: string, shippingAddress: string) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails(): string{
        return `Ma khach hang: ${this.id}, Ten khach hang:${this.name} Email:${this.email}`;
        
    }
    getId(): number{
        return this.id;
    }
}
abstract class Product{
    private static nextId: number = 1;
    protected id: number;
    name: string;
    price: number;
    stock: number;
    constructor(name: string, price: number, stock: number) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    //giam so luong ton kho
    sell(quantity: number):void {
        if (quantity <= 0) {
            console.log(`so luong ban phai lon hon 0`);
            return;
        }

        if (quantity >= this.stock) {
            console.log(`sO luong ton kho chi con ${this.stock}`);
            return;
        }

        this.stock -= quantity;
        console.log(`da giam so luong ton kho thanh cong. con lai ${this.stock}`);
        
    }
    //tang so luong ton kho
    restock(quantity: number) : number{
        if (quantity <= 0) {
            console.log(`so luong nhap hang phai >=0`);
            return;
        } 
        this.stock += quantity;
      return this.stock;
        
    }
    getId(): number{
        return this.id;
    }
    //tra ve thong tin dac thu cua san pham
    abstract getProductInfo(): string;
    //tinh toan chi phi van chuyen
    abstract getShippingCost(distance: number): number;
    //tra ve danh muc san pham
    abstract getCategory(): string;
}
class ElectronicsProduct extends Product{
    warrantyPeriod: number;
  
    constructor( name: string, price: number,
        stock: number,warrantyPeriod:number
    ) {
        super( name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getShippingCost(distance: number): number {
        if (distance < 5) {
            return 50000;
        } 
        return 50000 + (distance-5) * 2;
    }
    getCategory(): string {
        return `ElectronicsProduct`
    }
      getProductInfo(): string {
        const priceStr = this.price.toLocaleString("vi-VN");
        return `Ma san pham: ${this.id}, Ten: ${this.name}, Gia: ${priceStr}đ, Ton kho: ${this.stock}, Bao hanh: ${this.warrantyPeriod} thang, Danh muc: ${this.getCategory()}`;
    }
}

const laptop = new ElectronicsProduct("Laptop Dell", 15000000, 10, 24);
console.log(laptop.getProductInfo());
console.log("Phí ship 8km:", laptop.getShippingCost(8).toLocaleString("vi-VN"), "đ");

class ClothingProduct extends Product{
    size: string;
    color: string;
    constructor( name: string, price: number,
        stock: number,size:string,color:string) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getCategory(): string {
        return `ClothingProduct`
    }
    getShippingCost(distance: number): number {
        if (distance < 5) {
            return 25000;
        }
        return 25000 + (distance - 5) * 2;
    }
    getProductInfo(): string {
         const priceStr = this.price.toLocaleString("vi-VN");
         return `Ma san pham: ${this.id}, Ten: ${this.name}, Gia: ${priceStr}đ, Ton kho: ${this.stock}, Danh muc: ${this.getCategory()},Kich co:${this.size}, Mau sac ${this.color}`;
    }
}
const aoThun = new ClothingProduct("Áo thun nam", 250000, 50, "L", "Đen");
console.log(aoThun.getProductInfo());
console.log("Phí ship 10km:", aoThun.getShippingCost(10).toLocaleString("vi-VN"), "đ");
type orderItem={ product: Product; quantity: number };
class Order{
    private static nextId: number = 1;
    readonly orderId: number;
    customer: Customer;
    products: orderItem[];
    totalAmount: number;
    constructor(customer: Customer,items:orderItem[]) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = items;
        this.totalAmount = items.reduce((sum, value) => sum + value.product.price * value.quantity, 0);
    }
   getDetails(): string {
  const lines = this.products
    .map((it, idx) =>
      `${idx + 1}. ${it.product.name} x${it.quantity} = ${(it.product.price * it.quantity).toLocaleString("vi-VN")}đ`
    )
    .join("\n");

  return `Đơn hàng #${this.orderId}
Khách: ${this.customer.getDetails()}
Sản phẩm:
${lines}
Tổng tiền hàng: ${this.totalAmount.toLocaleString("vi-VN")}đ`;
}

}
const kh1 = new Customer("Nguyễn Văn A", "a@example.com", "Hà Nội");
const items: orderItem[] = [
  { product: laptop, quantity: 1 },
  { product: aoThun, quantity: 3 }
];
const order1 = new Order(kh1, items);
console.log(order1.getDetails());



class Store{
    products: Product[]=[];
    customers: Customer[]=[];
    orders: Order[]=[];
    constructor(products: Product[], customers: Customer[], orders: Order[]) {
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }
    addProduct(product: Product): void{
        this.products.push(product);
    }
    addCustomer(customer: Customer): void{
        this.customers.push(customer);
    }
    cancelOrder(Id: number): void{
        const index = this.orders.findIndex(item => item.orderId === Id);
        if (index == -1) {
            console.log(`khong ton tai don hang`);
        }
        const order = this.orders[index];
        order.products.forEach(item => item.product.restock(item.quantity))
        this.orders.splice(index, 1);
        console.log(`da huy thanh cong don hang ${Id}`);
    }
    listAvailableProducts(customerId: number): void{
        const available = this.products.filter(item => item.stock > 0)
        if (available.length == 0) {
            console.log(`khong con san pham nao con hang`);
            return;
        }
        available.forEach(item => console.log(item.getProductInfo())
        );
    }
    listCustomerOrders(customerId: number): void {
    const list = this.orders.filter(o => o.customer.getId() === customerId);
    if (list.length === 0) {
      console.log("Khách này chưa có đơn hàng nào.");
      return;
    }
    list.forEach(o => console.log(o.getDetails()));
    }
    calculateTotalRevenue(): number {
    return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    updateProductStock(productId: number, newStock: number): void {
    const idx = this.products.findIndex(p => p.getId() === productId);
    if (idx === -1) {
      console.log("Không tìm thấy sản phẩm.");
      return;
    }
    if (newStock < 0) {
      console.log("newStock phải >= 0.");
      return;
    }
    this.products[idx].stock = newStock;
    console.log(`Đã cập nhật tồn kho SP#${productId} = ${newStock}`);
  }
}

