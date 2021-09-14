import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md'

export const Navbar = () => {
  const size = 32
  return (
    <Nav>
      <Link to='/'>
        <MdHome size={size} />
      </Link>
      <Link to='/favs'>
        <MdFavorite size={size} />
      </Link>
      <Link to='/user'>
        <MdAccountCircle size={size} />
      </Link>
    </Nav>
  )
}
