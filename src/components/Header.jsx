import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
  return (
    <div>
        <ul>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
        </ul>
    </div>
  )
}

export default Header