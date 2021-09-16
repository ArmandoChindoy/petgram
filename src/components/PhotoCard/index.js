import React from 'react'
import { Image, ImageWrapper, Article } from './styles'
import { FavButton } from '@/components/FavButton'
import { useSetVisible } from '../../hooks/useSetVisible'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'

import PropTypes from 'prop-types'
const DefaultImage =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, liked, src = DefaultImage }) => {
  const [show, element] = useSetVisible()
  const { mutation } = ToggleLikeMutation()
  const HandleFavClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    })
  }
  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImageWrapper>
              <Image src={src} alt='' />
            </ImageWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={HandleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.prototypes = {
  id: PropTypes.number.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName) => {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }
    if (propValue < 0) {
      return new Error(`${propName} value must be greater than or equal to 0`)
    }
  }
}