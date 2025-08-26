import React, { useState } from 'react'

export default function Select() {
    const [city, setCity] = useState<string>("");
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCity(e.target.value)
    }
    return (
        <div>
            <p>Thanh pho :{city}</p>
            <select name="" id="" value={city} onChange={handleChange}>
                <option value="">--Chon thanh pho--</option>
                <option value="Ha Noi">Ha Noi</option>
                <option value="Ha Nam">Ha Nam</option>
                <option value="Nam Dinh">Nam Dinh</option>
                <option value="Nghe An">Nghe An</option>
                <option value="Thanh Hoa">Thanh Hoa</option>
            </select>
     </div>
  )
}
