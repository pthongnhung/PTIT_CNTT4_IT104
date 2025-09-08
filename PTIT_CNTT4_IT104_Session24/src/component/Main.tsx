import React, { useEffect, useState } from "react";
type Error = {
  name: string;
  address: string;
  status: string;
};
type Storage = {
  id: number;
  name: string;
  address: string;
  status: string;
};
export default function Main() {
  const [error, setError] = useState<Error>({
    name: "",
    address: "",
    status: "",
  });
  const [storage, setStorage] = useState<Storage>({
    id: -1,
    name: "",
    address: "",
    status: "",
  });
  const [storageList, setStorageList] = useState<Storage[]>(
    JSON.parse(localStorage.getItem("storageList") || "[]")
  );
  const [editId, setEditId] = useState<number>(-1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemPerPage = 3;
  const totalPage = Math.ceil(storageList.length / itemPerPage);
  const start = (currentPage - 1) * itemPerPage;
  const end = start + itemPerPage - 1;
  useEffect(() => {
    localStorage.setItem("storageList", JSON.stringify(storageList));
  }, [storageList]);
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value, name } = e.target;
    setStorage({ ...storage, [name]: value });
    setError({ ...error, [name]: "" });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (storage.name == "") {
      setError({ ...error, name: "Vui long nhap ten kho!" });
      return;
    }
    if (storage.address == "") {
      setError({ ...error, address: "Vui long nhap dia chi!" });
      return;
    }
    if (storage.status == "") {
      setError({ ...error, status: "Vui long nhap trang thai!" });
      return;
    }
    if (editId == -1) {
      setStorageList([
        ...storageList,
        {
          id:
            storageList.length == 0
              ? 1
              : storageList[storageList.length - 1].id + 1,
          name: storage.name,
          address: storage.address,
          status: storage.status,
        },
      ]);
    } else {
      const updateList = storageList.map((item) =>
        item.id == editId
          ? {
              id: item.id,
              name: storage.name,
              address: storage.address,
              status: storage.status,
            }
          : item
      );
      setStorageList(updateList);
      setEditId(-1);
    }
    setStorage({ id: -1, name: "", address: "", status: "" });
  };
  const deleteStorage = (id: number) => {
    if (confirm("Ban co chac chan muon xoa kho nay?")) {
      const updateList = storageList.filter((item) => item.id != id);
      setStorageList(updateList);
      setCurrentPage(1);
    }
  };
  const updateStorage = (id: number) => {
    const target = storageList.find((item) => item.id == id);
    setStorage(target!);
    setEditId(id);
  };
  const goBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const goForward = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };
  const goToPage = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const pagination = (totalPage: number) => {
    const list: React.ReactElement[] = [];
    for (let i = 0; i < totalPage; i++) {
      list.push(
        <div
          onClick={() => goToPage(i + 1)}
          className={
            i + 1 == currentPage
              ? "w-[40px] h-[40px] flex justify-center items-center border border-blue-500 rounded-lg"
              : "w-[40px] h-[40px] flex justify-center items-center"
          }
        >
          {i + 1}
        </div>
      );
    }
    return list;
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[1000px] rounded-lg flex flex-col gap-[20px]">
        <div className="bg-[#00968a] h-[60px] w-[100%] rounded-lg flex items-center justify-center">
          <h1 className="text-center text-white text-[26px]">Quan Ly Kho</h1>
        </div>
        <div className="w-[100%] rounded-lg border border-[#dadada] shadow-xs p-[20px]">
          <h3 className="font-bold"> + Them kho moi</h3>
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex mt-[15px] gap-[20px]"
          >
            <div>
              <input
                onChange={handleChange}
                value={storage.name}
                name="name"
                className="rounded-lg border border-[#dadada] p-[6px]"
                type="text"
                placeholder="Ten kho"
              />
              <p className="text-[15px] text-red-500 ml-[5px] font-semibold">
                {error.name}
              </p>
            </div>
            <div>
              <input
                onChange={handleChange}
                value={storage.address}
                name="address"
                className="rounded-lg border border-[#dadada] p-[6px]"
                type="text"
                placeholder="Dia chi"
              />
              <p className="text-[15px] text-red-500 ml-[5px] font-semibold">
                {error.address}
              </p>
            </div>
            <div>
              <select
                onChange={handleChange}
                value={storage.status}
                name="status"
                id=""
                className="rounded-lg border border-[#dadada] p-[7px]"
              >
                <option value="" disabled hidden>
                  Trang thai
                </option>
                <option value="inactive">Ngung hoat dong</option>
                <option value="active">Hoat dong</option>
              </select>
              <p className="text-[15px] text-red-500 ml-[5px] font-semibold">
                {error.status}
              </p>
            </div>
            <button className="w-[100px] h-[38px] bg-blue-500 rounded-[6px] text-white">
              {editId == -1 ? "Them" : "Sua"}
            </button>
          </form>
        </div>
        <div className="w-[100%] rounded-lg border border-[#dadada] shadow-xs p-[20px]">
          <h3 className="font-bold">Danh sach kho</h3>
          <table className="border border-collapse w-[100%] mt-[20px] rounded-[5px]">
            <thead className="bg-gray-100 h-[50px] ">
              <tr>
                <th className="text-left pl-[15px] border border-[#dadada]">
                  Ten kho
                </th>
                <th className="text-left pl-[15px] border border-[#dadada]">
                  Dia chi
                </th>
                <th className="text-left pl-[15px] border border-[#dadada]">
                  Trang thai
                </th>
                <th className="text-left pl-[15px] border border-[#dadada]">
                  Hanh dong
                </th>
              </tr>
            </thead>
            <tbody>
              {storageList.map((item, index) => {
                if (index <= end && index >= start) {
                  return (
                    <tr key={index} className="h-[70px]">
                      <td className="text-blue-400 pl-[15px] border border-[#dadada]">
                        {item.name}
                      </td>
                      <td className="pl-[15px] border border-[#dadada]">
                        {item.address}
                      </td>
                      <td className="pl-[15px] border border-[#dadada]">
                        {" "}
                        <button
                          className={
                            item.status == "active"
                              ? "rounded-[5px] p-[5px] h-[35px] bg-[#f6ffed] border border-[#b4ee88] text-[#73bb56] font-semibold"
                              : "rounded-[5px] p-[5px] h-[35px] bg-red-100 border border-red-500 text-red-600 font-semibold"
                          }
                        >
                          {item.status == "active"
                            ? "Hoat dong"
                            : "Ngung hoat dong"}
                        </button>
                      </td>
                      <td className="flex justify-start items-center gap-[10px] pl-[15px] border border-[#dadada] h-[70px]">
                        <button
                          className="border border-blue-600 text-blue-600 w-[50px] h-[30px]"
                          onClick={() => updateStorage(item.id)}
                        >
                          Sua
                        </button>
                        <button
                          className="border border-red-600 text-red-600 w-[50px] h-[30px]"
                          onClick={() => deleteStorage(item.id)}
                        >
                          Xoa
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
        <div className="flex gap-[10px] justify-end">
          <div
            onClick={goBack}
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            &lt;
          </div>
          <>{pagination(totalPage)}</>
          <div
            onClick={goForward}
            className="w-[40px] h-[40px] flex justify-center items-center"
          >
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
}
