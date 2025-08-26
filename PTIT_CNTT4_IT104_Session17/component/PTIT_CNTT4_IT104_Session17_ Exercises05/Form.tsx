import React,{useState} from 'react'
export default function Form() {
    const [value, setValue] = useState<string>("")
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
  return (
    <div>
          <input placeholder="Nhap noi dung" onChange={handleChange} value={value}></input>
          <p>{value}</p>
    </div>
  )
}
