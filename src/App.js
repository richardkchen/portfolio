import './App.css'
import {
  HomePage,
  WorksPage,
  AboutPage,
  ContactPage,
} from './pages'
import { Layout } from './components/layout'
import { useEffect, useRef, useState } from 'react'
import { useScrollPosition } from './hooks/useScrollPosition'
import { aboutData } from './static/aboutData'
import { contactData } from './static/contactData'
import { worksData } from './static/worksData'


function App() {

  const pages = ['home', 'works', 'about', 'contact']
  const homePageRef = useRef(null)
  const worksPageRef = useRef(null)
  const aboutPageRef = useRef(null)
  const contactPageRef = useRef(null)

  const sectionRefs = [
    homePageRef,
    worksPageRef,
    aboutPageRef,
    contactPageRef,
  ]

  const [scrollPosition, setScrollPosition] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)
  const [headerVisible, setHeaderVisible] = useState(true)
  const [pageEnd, setPageEnd] = useState(false)
  const [showSnackBar, setShowSnackBar] = useState(false)

  const getPagePosition = (position) => {
    let page = 0
    for (let i = 0; i < sectionRefs.length - 1; i++) {
      if (
        position >= sectionRefs[i].current.offsetTop &&
        position < sectionRefs[i + 1].current.offsetTop
      ) {
        page = i
      }
    }
    return page
  }

  const handleNextPage = (e) => {
    const calculatedPage = getPagePosition(scrollPosition)
    const page =
      calculatedPage < sectionRefs.length - 1 ? calculatedPage + 1 : 0
    setCurrentPage(page)
  }

  const handleScrollToTop = (e) => {
    setCurrentPage(0)
  }

  const handleNavLink = ({ target }) => {
    const { name } = target
    if (pages.includes(name)) {
      setCurrentPage(pages.indexOf(name))
    }
  }

  const handleEmailClick = (e) => {
    navigator.clipboard.writeText(contactData.email)
    setShowSnackBar(true)
    setTimeout(() => {
      setShowSnackBar(false)
    }, 3000)
  }

  useScrollPosition(({ previous, current }) => {
    const yPosition = current.y === 0 ? 0 : -current.y
    const scrollingDown = current.y > previous.y
    setScrollPosition(yPosition)
    setHeaderVisible(scrollingDown)
  })

  useEffect(() => {
    sectionRefs[currentPage].current.scrollIntoView()
    setPageEnd(currentPage === sectionRefs.length - 1)
  }, [currentPage])

  return (
    <>
      <Layout
        headerVisible={headerVisible}
        handleNavLink={handleNavLink}
        showSnackBar={showSnackBar}
      >
        <HomePage propRef={homePageRef} />
        <WorksPage propRef={worksPageRef} worksData={worksData} />
        <AboutPage propRef={aboutPageRef} aboutData={aboutData} />
        <ContactPage
          propRef={contactPageRef}
          handleEmailClick={handleEmailClick}
          contactData={contactData}
        />
      </Layout>

      {pageEnd ? (
        <a className='expand-more' onClick={handleScrollToTop}>
          <img src='images/keyboard-return.png' alt='scroll to top' />
        </a>
      ) : (
        <a className='expand-more' onClick={handleNextPage}>
          <img src='images/chevron-down.png' alt='next' />
        </a>
      )}
    </>
  )
}

export default App
