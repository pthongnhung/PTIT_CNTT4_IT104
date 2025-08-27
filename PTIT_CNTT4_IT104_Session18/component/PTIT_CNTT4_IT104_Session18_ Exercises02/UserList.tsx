import React, { useMemo } from 'react'
type User = {
    id: number,
    name: string,
    age:number
}
export default function UserList() {
    const users: User[] = [
        { id: 1, name: "Nhung", age: 20 },
        { id: 2, name: "Minh", age: 16 },
        { id: 3, name: "An", age: 25 },
        { id: 4, name: "Thu", age: 15 },
    ]
    const filteredUsers = useMemo(() => {
        return users.filter((item)=>item.age>18)
    },[users])
  return (
    <div>
          <h2>Danh sach nguoi dung tren 18</h2>
          <ul>
              {filteredUsers.map((user) => (
                  <li key={user.id}> {user.name} - {user.age} tuổi</li>
              ))}
          </ul>
    </div>
  )
}
