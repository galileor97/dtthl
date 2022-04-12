import React from 'react'
import Menus from './menus'

function Layout({ children }) {
  return (
    <div className='content'>
        {children}
        <Menus/>
    </div>
  )
}

export default Layout