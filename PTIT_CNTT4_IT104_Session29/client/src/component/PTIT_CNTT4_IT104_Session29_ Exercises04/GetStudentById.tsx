import axios from "axios";

export async function getStudentById(id: number) {
  try {
    const res = await axios.get(`http://localhost:8080/student/${id}`);
    console.log("Sinh vien ma ban tim kiem", res.data);
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.log("Khong tim du lieu ma ban muon tim kiem");
    } else {
      console.log("Loi khong the lay api");
    }
  }
}
