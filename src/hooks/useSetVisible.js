import { useState, useRef, useEffect } from 'react'

export const useSetVisible = () => {
  const element = useRef(null)
  const [show, setShow] = useState(false)
  useEffect(
    () => {
      const observer = new window.IntersectionObserver((entries) => {
        const { isIntersecting } = entries[0]
        console.log(element)
        if (isIntersecting) {
          console.log('si')
          setShow(true)
          observer.disconnect()
        }
      })
      observer.observe(element.current)
    },
    [element]
  )
  return [show, element]
}
