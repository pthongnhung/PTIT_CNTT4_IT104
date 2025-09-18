

export interface RandomState {
  numbers: number[];
}

const initialState: RandomState = {
  numbers: [],
};

const randomReducer = (state = initialState, action: any): RandomState => {
  switch (action.type) {
    case "ADD_RANDOM_NUMBER":
      return {
        ...state,
        numbers: [...state.numbers, action.payload],
      };
    default:
      return state;
  }
};

export default randomReducer;