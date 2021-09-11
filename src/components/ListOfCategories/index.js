import { Category } from '../Category'
import { List, Item } from './styles'
import { data } from '../../assets/db.js'

export const ListOfCategories = () => {
  console.log('data', data)
  return (
    <List>
      {data.categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  )
}
