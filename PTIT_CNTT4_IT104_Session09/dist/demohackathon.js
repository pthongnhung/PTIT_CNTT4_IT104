class Customer {
    constructor(name, email, shippingAddress) {
        this.id = Customer.nextId++;
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    getDetails() {
        return `Ma khach hang: ${this.id}, Ten khach hang:${this.name} Email:${this.email}`;
    }
    getId() {
        return this.id;
    }
}
Customer.nextId = 1;
class Product {
    constructor(name, price, stock) {
        this.id = Product.nextId++;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    //giam so luong ton kho
    sell(quantity) {
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
    restock(quantity) {
        if (quantity <= 0) {
            console.log(`so luong nhap hang phai >=0`);
            return;
        }
        this.stock += quantity;
        return this.stock;
    }
    getId() {
        return this.id;
    }
}
Product.nextId = 1;
class ElectronicsProduct extends Product {
    constructor(name, price, stock, warrantyPeriod) {
        super(name, price, stock);
        this.warrantyPeriod = warrantyPeriod;
    }
    getShippingCost(distance) {
        if (distance < 5) {
            return 50000;
        }
        return 50000 + (distance - 5) * 2;
    }
    getCategory() {
        return `ElectronicsProduct`;
    }
    getProductInfo() {
        const priceStr = this.price.toLocaleString("vi-VN");
        return `Ma san pham: ${this.id}, Ten: ${this.name}, Gia: ${priceStr}đ, Ton kho: ${this.stock}, Bao hanh: ${this.warrantyPeriod} thang, Danh muc: ${this.getCategory()}`;
    }
}
const laptop = new ElectronicsProduct("Laptop Dell", 15000000, 10, 24);
console.log(laptop.getProductInfo());
console.log("Phí ship 8km:", laptop.getShippingCost(8).toLocaleString("vi-VN"), "đ");
class ClothingProduct extends Product {
    constructor(name, price, stock, size, color) {
        super(name, price, stock);
        this.size = size;
        this.color = color;
    }
    getCategory() {
        return `ClothingProduct`;
    }
    getShippingCost(distance) {
        if (distance < 5) {
            return 25000;
        }
        return 25000 + (distance - 5) * 2;
    }
    getProductInfo() {
        const priceStr = this.price.toLocaleString("vi-VN");
        return `Ma san pham: ${this.id}, Ten: ${this.name}, Gia: ${priceStr}đ, Ton kho: ${this.stock}, Danh muc: ${this.getCategory()},Kich co:${this.size}, Mau sac ${this.color}`;
    }
}
const aoThun = new ClothingProduct("Áo thun nam", 250000, 50, "L", "Đen");
console.log(aoThun.getProductInfo());
console.log("Phí ship 10km:", aoThun.getShippingCost(10).toLocaleString("vi-VN"), "đ");
class Order {
    constructor(customer, items) {
        this.orderId = Order.nextId++;
        this.customer = customer;
        this.products = items;
        this.totalAmount = items.reduce((sum, value) => sum + value.product.price * value.quantity, 0);
    }
    getDetails() {
        const lines = this.products
            .map((it, idx) => `${idx + 1}. ${it.product.name} x${it.quantity} = ${(it.product.price * it.quantity).toLocaleString("vi-VN")}đ`)
            .join("\n");
        return `Đơn hàng #${this.orderId}
Khách: ${this.customer.getDetails()}
Sản phẩm:
${lines}
Tổng tiền hàng: ${this.totalAmount.toLocaleString("vi-VN")}đ`;
    }
}
Order.nextId = 1;
const kh1 = new Customer("Nguyễn Văn A", "a@example.com", "Hà Nội");
const items = [
    { product: laptop, quantity: 1 },
    { product: aoThun, quantity: 3 }
];
const order1 = new Order(kh1, items);
console.log(order1.getDetails());
class Store {
    constructor(products, customers, orders) {
        this.products = [];
        this.customers = [];
        this.orders = [];
        this.products = products;
        this.customers = customers;
        this.orders = orders;
    }
    addProduct(product) {
        this.products.push(product);
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    cancelOrder(Id) {
        const index = this.orders.findIndex(item => item.orderId === Id);
        if (index == -1) {
            console.log(`khong ton tai don hang`);
        }
        const order = this.orders[index];
        order.products.forEach(item => item.product.restock(item.quantity));
        this.orders.splice(index, 1);
        console.log(`da huy thanh cong don hang ${Id}`);
    }
    listAvailableProducts(customerId) {
        const available = this.products.filter(item => item.stock > 0);
        if (available.length == 0) {
            console.log(`khong con san pham nao con hang`);
            return;
        }
        available.forEach(item => console.log(item.getProductInfo()));
    }
    listCustomerOrders(customerId) {
        const list = this.orders.filter(o => o.customer.getId() === customerId);
        if (list.length === 0) {
            console.log("Khách này chưa có đơn hàng nào.");
            return;
        }
        list.forEach(o => console.log(o.getDetails()));
    }
    calculateTotalRevenue() {
        return this.orders.reduce((sum, o) => sum + o.totalAmount, 0);
    }
    updateProductStock(productId, newStock) {
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
