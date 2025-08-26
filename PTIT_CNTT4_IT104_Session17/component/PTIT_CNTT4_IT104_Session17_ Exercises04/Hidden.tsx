import React, { useState } from 'react'

type Status = {
  isHidden: boolean
}

export default function Hidden() {
  const [status, setStatus] = useState<Status>({
    isHidden: true,
  })

  const changeStatus = () => {
    setStatus((prev) => ({
      ...prev,
      isHidden: !prev.isHidden,
    }))
  }

  return (
    <div>
      <button onClick={changeStatus}>
        {status.isHidden ? 'Ẩn' : 'Hiện'}
      </button>
      <p>{status.isHidden ? 'Tieu de van ban' : ''}</p>
    </div>
  )
}
