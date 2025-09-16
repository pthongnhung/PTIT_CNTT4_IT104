export async function getAllProduct() {
  try {
    const response = await fetch("http://localhost:8080/product");
    if (!response.ok) {
      throw new Error("Lỗi lấy dữ liệu");
    }
    return await response.json();
  } catch (error) {
    console.error(" API error:", error);
    return [];
  }
}
