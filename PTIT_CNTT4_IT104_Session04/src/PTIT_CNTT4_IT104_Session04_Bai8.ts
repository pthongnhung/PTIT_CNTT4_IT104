type Products = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Products;
    quantity: number;
};

type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

function calculateOrderTotal(order: Order): number {
    let total = 0;
    for (const item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}

function printOrder(order: Order): void {
    console.log(`Đơn hàng: #${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);

    for (const item of order.items) {
        const name = item.product.name;
        const price = item.product.price;
        const quantity = item.quantity;
        const total = price * quantity;
        console.log(`- ${name} x ${quantity} -> ${total.toLocaleString()} VND`);
    }

    const totalAmount = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${totalAmount.toLocaleString()} VND`);

    if (order.note) {
        console.log(`Ghi chú: ${order.note}`);
    }
}

const order: Order = {
    orderId: "ORD001",
    customerName: "Nguyen Van A",
    items: [
        {
            product: {
                id: "P001",
                name: "Áo sơ mi",
                price: 250000,
            },
            quantity: 2,
        },
        {
            product: {
                id: "P002",
                name: "Quần tây",
                price: 400000,
            },
            quantity: 1,
        },
    ],
    note: "Giao sau 18h",
};

printOrder(order);
