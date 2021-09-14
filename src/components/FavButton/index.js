import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { Button } from './styles'

export const FavButton = ({ liked = false, likes = 0, onClick } = {}) => {
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Button onClick={() => onClick(!liked)}>
      <Icon size='32px' />
      <span>{likes}</span>
    </Button>
  )
}
