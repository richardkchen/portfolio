import React from 'react'
import { NavBar } from './nav-bar'
import { SnackBar } from './snack-bar'

export const Layout = ({
  children,
  headerVisible,
  handleNavLink,
  showSnackBar
}) => {
  return (
    <div className='App'>
      <NavBar visible={headerVisible} handleNavLink={handleNavLink} />
      <main className='content'>{children}</main>
      <SnackBar show={showSnackBar} />
    </div>
  )
}