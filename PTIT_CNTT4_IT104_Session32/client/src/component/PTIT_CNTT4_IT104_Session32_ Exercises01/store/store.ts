const initialState = {
  id: "123",
  userName: "Pham Thi Hong Nhung",
  gender: "Nu",
  dateBirth: "2000-01-01",
  address: "Hà Nội",
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;