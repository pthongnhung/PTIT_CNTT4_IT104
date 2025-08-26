import React,{useState} from 'react'

export default function CounText() {
    const [value, setValue] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
    <div>
          <input type="text" onChange={ handleChange} value={value}/>
          <p>So ky tu {value.length}</p>
    </div>
  )
}
