import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
};

const reducer = (
  state: typeof initialState,
  action: { type: string; field: string; value: string }
) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial", maxWidth: "400px" }}>
      <h2> Thông tin người dùng</h2>
      <form>
        <label>
          Tên:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
            style={{
              display: "block",
              marginBottom: "15px",
              width: "100%",
              padding: "8px",
            }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            style={{
              display: "block",
              marginBottom: "15px",
              width: "100%",
              padding: "8px",
            }}
          />
        </label>
      </form>

      <div style={{ marginTop: "20px" }}>
        <h4> Kết quả hiện tại:</h4>
        <p>
          <strong>Tên:</strong> {state.name}
        </p>
        <p>
          <strong>Email:</strong> {state.email}
        </p>
      </div>
    </div>
  );
}
