type Action = {
    type: string,
    payLoad:any
}
const initialState = {
    cart: [
        {
            id: 1,
            title: "Cake",
            price: 30,
            quantity:15
        },
         {
            id: 2,
            title: "Hamburger",
            price: 32,
            quantity:12
        }
    ]
}
export const reducerCart = (state = initialState, action: Action) => {
    switch (action.type) {
        case "ADD":
            
            return state;
        default:
            return state;
    }
}