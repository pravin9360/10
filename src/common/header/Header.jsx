import React from 'react'
import "./Header.css"
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
    <div>
      <Head />
      <Search />
      <Navbar />
    </div>
  )
}

export default Header
