export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Laptop Dell XPS 13",
    price: "35,000,000 VND",
    description: "Laptop cao cấp cho công việc và giải trí nặng nhẹ.",
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    price: "30,000,000 VND",
    description: "Điện thoại thông minh cao cấp từ Apple.",
  },
  {
    id: 3,
    name: "Samsung Galaxy S22",
    price: "25,000,000 VND",
    description: "Smartphone mạnh mẽ với nhiều tính năng cao cấp.",
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM4",
    price: "7,000,000 VND",
    description: "Tai nghe chống ồn đỉnh cao, chất âm tuyệt vời.",
  },
  {
    id: 5,
    name: "Apple Watch Series 8",
    price: "12,000,000 VND",
    description: "Đồng hồ thông minh với nhiều tính năng sức khỏe.",
  },
];
