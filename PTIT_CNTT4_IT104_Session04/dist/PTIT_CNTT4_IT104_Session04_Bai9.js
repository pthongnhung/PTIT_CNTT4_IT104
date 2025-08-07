function calculateInvoiceTotal(invoice) {
    return invoice.orders.reduce((invoiceTotal, order) => {
        const orderTotal = order.items.reduce((sum, item) => {
            return sum + item.product.price * item.quantity;
        }, 0);
        return invoiceTotal + orderTotal;
    }, 0);
}
function getUnpaidOrders(invoice) {
    return invoice.orders.filter(order => !order.isPaid);
}
function printInvoice(invoice) {
    console.log(`===== HÓA ĐƠN: ${invoice.invoiceId} =====`);
    console.log(`Ngày tạo: ${invoice.createdAt.toLocaleDateString()}`);
    console.log("Danh sách đơn hàng:");
    invoice.orders.forEach(order => {
        console.log(`\n--- Đơn hàng: ${order.orderId} ---`);
        console.log(`Khách hàng: ${order.customeName}`);
        console.log(`Địa chỉ giao hàng: ${order.deliveryAddress}`);
        console.log(`Trạng thái: ${order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}`);
        console.log("Sản phẩm:");
        order.items.forEach(item => {
            const total = item.product.price * item.quantity;
            console.log(`- ${item.product.name} × ${item.quantity} = ${total.toLocaleString()} VND`);
            if (item.note) {
                console.log(`  Ghi chú: ${item.note}`);
            }
        });
        const orderTotal = order.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);
        console.log(`Tổng đơn hàng: ${orderTotal.toLocaleString()} VND`);
    });
    const grandTotal = calculateInvoiceTotal(invoice);
    console.log(`\n>>> TỔNG TIỀN HÓA ĐƠN: ${grandTotal.toLocaleString()} VND`);
}
const invoiceSample = {
    invoiceId: "INV-2025-01",
    createdAt: new Date("2025-08-07"),
    orders: [
        {
            orderId: "ORD001",
            customeName: "Nguyễn Văn A",
            deliveryAddress: "Hà Nội",
            isPaid: true,
            items: [
                {
                    product: { id: "P01", name: "Bút bi", price: 5000 },
                    quantity: 10,
                },
                {
                    product: { id: "P02", name: "Vở học sinh", price: 12000 },
                    quantity: 5,
                    note: "Loại có kẻ ngang"
                }
            ]
        },
        {
            orderId: "ORD002",
            customeName: "Trần Thị B",
            deliveryAddress: "TP. Hồ Chí Minh",
            isPaid: false,
            items: [
                {
                    product: { id: "P03", name: "Túi xách", price: 200000 },
                    quantity: 1
                }
            ]
        }
    ]
};
printInvoice(invoiceSample);
const unpaidOrders = getUnpaidOrders(invoiceSample);
console.log("\n>>> Đơn hàng chưa thanh toán:");
unpaidOrders.forEach(order => {
    console.log(`- ${order.orderId} | ${order.customeName}`);
});
