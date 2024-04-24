import React from 'react'
import { Link } from 'react-router-dom'
const nav = () => {
  return (
    <div>
        <ul>
            <Link to="/"> Home</Link>
            <Link to="/login"> Login</Link>
            <Link to="/signup"> SignUp</Link>
        </ul>
    </div>
  )
}

export default nav