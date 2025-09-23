import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../../store/slices/displaySlice";


const data = [1, 2, 3, 4]; 


export default function DisplaySwitcher() {
  const dispatch = useDispatch();
  const mode = useSelector((s:any) => s.display.mode);
  const isList = mode === "list";

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <button
        onClick={() => dispatch(toggleMode())}
        style={{ padding: "6px 12px", marginBottom: 16 }}
      >
        {isList ? "List mode" : "Grid mode"}
      </button>

      {isList ? (
   
        <div style={{ width: 360, margin: "0 auto" }}>
          {data.map((n) => (
            <div
              key={n}
              style={{
                background: "#ef4444",
                color: "#fff",
                height: 36,
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "12px 0",
                fontWeight: 600,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      ) : (
        
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 64px)",
            gap: 16,
            justifyContent: "center",
          }}
        >
          {data.map((n) => (
            <div
              key={n}
              style={{
                width: 64,
                height: 36,
                background: "#ef4444",
                color: "#fff",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              {n}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
