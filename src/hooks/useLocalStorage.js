import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(`${key}`)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
    }
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (e) {
      console.error(e)
    }
  }

  return [value, setLocalStorage]
}
