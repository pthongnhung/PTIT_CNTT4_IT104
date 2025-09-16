import React, { useEffect, useState } from 'react'
import Loading from './component/Loading'
import axios from 'axios'
interface User{
  id: number,
  name: string,
  email: string,
  age:number
}
export default function Demo() {
  const [loading, setLoading] = useState<boolean>(true)
  const [user, setUser] = useState<User[]>([])
  let result:User[];
  async function getAllUser() {
    try {
      const response = await axios.get(" http://localhost:8080/users");
      setUser([...response.data])
      result=response.data
    } catch (error) {
      
    } finally {
      setTimeout(() => {
        setLoading(false)
      },3000)
    }
  }
  useEffect(() => {
    getAllUser()
  },[])
  return (
    <div>
      <h1>Hoc API</h1>

      {loading ? (
        <Loading />
      ) : (
        <ul>
          {user.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - {item.email} - {item.age}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
