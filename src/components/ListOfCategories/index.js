import { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { data } from '../../assets/db.js'

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      newShowFixed !== showFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  return (
    <List fixed={showFixed}>
      {data.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} path={`/pet/${category.id}`} />
        </Item>
      ))}
    </List>
  )
}
