import React,{useState} from 'react'

export default function Checkbox() {
    const [ hobbies, setHobbies ]= useState<string[]>([])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setHobbies([...hobbies,value])
        } else {
            setHobbies(hobbies.filter((hobby)=>hobby!==value))
        }
    }
  return (
      <div>
          <p>so thich :[{hobbies.join(",")}]</p>
          <label htmlFor="">
               <input type="checkbox" value="di choi" name="" id="" onChange={handleChange} />di choi
          </label> <br />
          <label htmlFor="">
               <input type="checkbox"  name="" id="" value="code" onChange={handleChange}/>code
          </label> <br />
          <label htmlFor="">
               <input type="checkbox" name="" id="" value="boi loi" onChange={handleChange}/>boi loi
         </label> <br />
         <label htmlFor="">
               <input type="checkbox"name="" id="" value="nhay day" onChange={handleChange}/>nhay day
          </label>
         
    </div>
  )
}
