//reducer ban chat la nhung cai ham, muc dich cua ham tra ve state moi dua vao action
const initialStore = {
    count: 0,
    status:true
}
export const reducerCouter = (state=initialStore, action:any) => {
    switch (action.type) {
        case "INCREMENT":
            console.log("thuc hien tang cao");
            state.count = state.count + 1
            return { ...state }
        case "DESC":
            console.log("thuc hien tang cao");
            state.count = state.count - 1
            return { ...state }
        default:
            return state
            
    }
}