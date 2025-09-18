export interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeReducer = (state = initialState, action: any): ThemeState => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { darkMode: action.payload };
    default:
      return state;
  }
};

export default themeReducer;