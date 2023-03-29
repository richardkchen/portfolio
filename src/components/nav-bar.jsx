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
                <button name='home' onClick={handleNavLink}>
                  home
                </button>
              </li>
              <li>
                <button name='works' onClick={handleNavLink}>
                  works
                </button>
              </li>
              <li>
                <button name='about' onClick={handleNavLink}>
                  about
                </button>
              </li>
              <li>
                <button name='contact' onClick={handleNavLink}>
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  )

}