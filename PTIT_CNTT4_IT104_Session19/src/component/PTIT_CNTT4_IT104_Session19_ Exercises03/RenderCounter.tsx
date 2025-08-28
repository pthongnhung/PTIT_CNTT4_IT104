import React,{useRef,useState} from 'react'
export default function RenderCounter() {
    const [inPut, setInput] = useState("");
    const renderCount = useRef(0);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value); 
        renderCount.current++
    };
  return (
    <div>
          <h2>Component Render Counter</h2>
          <label htmlFor="">
              Input: <input type="text" value={inPut} onChange={handleChange}/>
          </label>
          <p>Component da render: {renderCount.current} lan </p>
    </div>
  )
}
