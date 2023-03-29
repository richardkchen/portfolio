import { useRef, useLayoutEffect } from 'react';

const getScrollPosition = ({ element, useWindow }) => {
  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top}
}

export const useScrollPosition = (
  effect,
  deps = [],
  element,
  useWindow,
  wait = 300
) => {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const current = getScrollPosition({ element, useWindow })
    effect({ previous: position.current, current })
    position.current = current
    throttleTimeout = null
  }

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}