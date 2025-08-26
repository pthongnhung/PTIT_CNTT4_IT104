import React, {useState } from 'react'
type Color = {
    isDark:boolean
}
export default function ChangeColor() {
    const [color, setColor] = useState<Color>({
        isDark:true
    })
    const handleChange = () => {
        setColor((prev) => ({
            ...prev,isDark:!prev.isDark
        }))
    }
  return (
    <div>
          <p style={{ color: color.isDark ? "black" : "red" }}>tieu de van ban</p>
          <button onClick={handleChange}>thay doi mau</button>
    </div>
  )
}
