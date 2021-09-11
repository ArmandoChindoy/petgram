import React from 'react'
import { Image, ImageWrapper, Article } from './styles'
import { FavButton } from '@/components/FavButton'
import { useSetVisible } from '../../hooks/useSetVisible'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
const DefaultImage =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DefaultImage }) => {
  const key = `liked-${id}`
  const [show, element] = useSetVisible()
  const [liked, setLiked] = useLocalStorage(key)
  const { mutation } = ToggleLikeMutation()
  const HandleFavClick = () => {
    !liked &&
      mutation({
        variables: {
          input: { id }
        }
      })
    setLiked(!liked)
  }
  // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImageWrapper>
              <Image src={src} alt='' />
            </ImageWrapper>
          </a>
          <FavButton liked={liked} likes={likes} onClick={HandleFavClick} />
        </>
      )}
    </Article>
  )
}
