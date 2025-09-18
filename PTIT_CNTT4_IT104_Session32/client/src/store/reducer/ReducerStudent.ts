const initialState = {
    users: [
        {
            id: 1,
            name:"Minh Thu"
        },
         {
            id: 2,
            name:"Ngoc Huyen"
        },
          {
            id: 3,
            name:"Hong Nhung"
        },
    ]
}
export const reducerStudent = (state=initialState,action:any) => {
    switch (action.type) {
        case "ADD":
            return state;
         case "EDIT":
            return state;
         case "DELETE":
            return state;
        default:
            return state;
    }
}