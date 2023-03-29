import React from 'react'

export const NavBar = ({visible, handleNavLink}) => {

  return (
    <>
      {visible && (
        <header className='main-header'>
          <a className='nav-logo' href='index.html'>
            <img src='images/logo.png' alt='rch3n' />
          </a>
          <nav className='nav'>
            <ul>
              <li>
                <a name='home' onClick={handleNavLink}>
                  home
                </a>
              </li>
              <li>
                <a name='works' onClick={handleNavLink}>
                  works
                </a>
              </li>
              <li>
                <a name='about' onClick={handleNavLink}>
                  about
                </a>
              </li>
              <li>
                <a name='contact' onClick={handleNavLink}>
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  )

}