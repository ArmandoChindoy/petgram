import React from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavorite, MdAccountCircle } from 'react-icons/md'

export const Navbar = () => {
  const size = 32
  return (
    <Nav>
      <Link exact to='/'>
        <MdHome size={size} />
      </Link>
      <Link exact to='/fav'>
        <MdFavorite size={size} />
      </Link>
      <Link exact to='/account'>
        <MdAccountCircle size={size} />
      </Link>
    </Nav>
  )
}
