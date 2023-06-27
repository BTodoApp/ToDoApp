import React, { useEffect, useState } from 'react'
import { getUsersBoards } from '../services/BoardServices'
import { Route, useNavigate } from 'react-router-dom'
import Board from './Board'

const Profile = ({ authenticated, user }) => {
    
    const [boards, setBoards] = useState([])

    const navigate = useNavigate()
    
    const handleBoards = async () => {
        const data = await getUsersBoards(user.id)
        setBoards(data)
        console.log(data)
        return data
    }

    const handleClick = (e, data) => {
        console.log(data)
        navigate('/boardPage')
    }
    
    useEffect(()=>{
        handleBoards()
    },[])
    
    if (!authenticated) return
    
  return (
    <div>
      <div className='Boards-main'>
        Boards
      </div>
      <div className='boards'>
        {boards.map((board) => {
            return (
                <div className='board-catalog' key={board.id}>
                    <div className='board-title'  onClick={((e) => handleClick(e, board.id))} >
                        {board.title}
                    </div>
                    <Board data={board.id} />
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Profile
