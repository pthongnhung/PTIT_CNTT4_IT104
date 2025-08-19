import React from 'react'

export default function FormatName() {
    interface User{
        firstName: string;
        lastName: string;
    }
    const user:User = {
            firstName: "Nguyen Van",
          lastName:"Nam"
    }
    function FormatName(u:User):string {
        return `ho va ten: ${u.firstName} ${u.lastName}`
    }
    return (
        <div>
            <h2>{ FormatName(user)}</h2>
    </div>
  )
}
