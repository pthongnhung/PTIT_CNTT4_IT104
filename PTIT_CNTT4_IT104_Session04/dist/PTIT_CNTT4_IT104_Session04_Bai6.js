let listProduct = [
    {
        id: "1",
        name: "iPhone 14",
        price: 20000000,
        category: {
            id: "c1",
            name: "Điện thoại"
        },
        discount: 10
    },
    {
        id: "2",
        name: "MacBook ",
        price: 28000000,
        category: {
            id: "c2",
            name: "Laptop"
        }
    },
    {
        id: "3",
        name: "Tai nghe",
        price: 5500000,
        category: {
            id: "c3",
            name: "Phụ kiện"
        },
        discount: 5
    }
];
function getFinalPrice(product) {
    if (product.discount) {
        return product.price - product.price * (product.discount / 100);
    }
    return product.price;
}
function printProductInfo(product) {
    const finalPrice = getFinalPrice(product);
    console.log(`Sản phẩm: ${product.name}
           Giá: ${product.price.toLocaleString()}Vnd
           Giá sau giảm: ${finalPrice.toLocaleString()}vnd
           Danh mục: ${product.category.name}\n`);
}
listProduct.forEach(printProductInfo);
