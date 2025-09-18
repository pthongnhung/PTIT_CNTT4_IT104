interface AuthState {
  email: string;
  password: string;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  email: "",
  password: "",
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action: any) {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
}