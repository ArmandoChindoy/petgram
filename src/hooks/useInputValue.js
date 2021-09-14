import { useState } from 'react'

export const useInputValue = (initialValue) => {
  const [value, setvalue] = useState(initialValue)
  const onChange = (e) => setvalue(e.target.value)
  return [value, onChange]
}
