import React from 'react'
import { Image, ImageWrapper, Button, Article } from './styles'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useSetVisible } from '../../hooks/useSetVisible'
import { useLocalStorage } from '../../hooks/useLocalStorage'
const DefaultImage =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DefaultImage }) => {
  const [show, element] = useSetVisible()
  const [liked, setLiked] = useLocalStorage(`like-${id}`, false)
  const Icon = liked ? MdFavorite : MdFavoriteBorder
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} alt='' />
            </ImageWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='32px' />{' '}
            <span>{likes}</span>
          </Button>
        </>
      )}
    </Article>
  )
}
