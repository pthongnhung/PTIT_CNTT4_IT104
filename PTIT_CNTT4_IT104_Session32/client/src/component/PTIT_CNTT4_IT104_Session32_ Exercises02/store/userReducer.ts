

export interface User {
  id: number;
  userName: string;
  gender: string;
  dateBirth: string;
  address: string;
}

const initialState: User[] = [
  {
    id: 1,
    userName: "Nguyen Van B",
    gender: "Nam",
    dateBirth: "888",
    address: "Hà Nội",
  },
  {
    id: 2,
    userName: "Nguyen Thi A",
    gender: "Nữ",
    dateBirth: "111",
    address: "Nam Dinh",
  },
];

const userReducer = (state = initialState, action: any): User[] => {
  switch (action.type) {
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "EDIT_USER":
      return state.map((user) =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user
      );
    default:
      return state;
  }
};

export default userReducer;