import React from 'react'
import { Anchor, Image } from './styels'

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => {
  console.log('cover', cover)
  return (
    <Anchor href={path}>
      <Image src={cover} alt='?' />
      {emoji}
    </Anchor>
  )
}
