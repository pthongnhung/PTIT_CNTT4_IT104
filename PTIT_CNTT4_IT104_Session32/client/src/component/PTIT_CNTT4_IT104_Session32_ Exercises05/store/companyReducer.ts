export interface CompanyState {
  company: string;
}

const initialState: CompanyState = {
  company: "Rikkei Academy",
};

const companyReducer = (state = initialState, action: any): CompanyState => {
  switch (action.type) {
    case "CHANGE_COMPANY":
      return {
        ...state,
        company: "RikkeiSoft",
      };
    default:
      return state;
  }
};

export default companyReducer;