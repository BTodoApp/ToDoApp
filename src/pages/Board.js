import React, { useEffect, useState } from 'react'
import { CheckSession } from '../services/auth'
import { getListsForBoards } from '../services/BoardServices'

const Board = ({ authenticated, user, data }) => {

    const [lists, setLists] = useState('')

    useEffect(() => {
        getListsForBoards(data.id)
    })

    if (!user || !authenticated) return

  return (
    <div>
      <h1>Hi</h1>
    </div>
  )
}

export default Board
