export async function GetAllStudent() {
  try {
    const response = await fetch("http://localhost:8080/student");
    if (!response.ok) {
      throw new Error("Khong the lay du lieu");
    }
    return await response.json();
  } catch (error) {
    console.error("API error", error);
    return [];
  }
}
