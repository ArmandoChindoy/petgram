import { PhotoCard } from '../PhotoCard'
import { gql, useQuery } from '@apollo/client'

const GET_PHOTOS = gql`
  query getPhotos {
    photos {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

const ListOfPhotoCardsComponent = ({ photos }) => {
  console.log(photos)
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}

export const ListOfPhotoCards = () => {
  const { loading, error, data } = useQuery(GET_PHOTOS)
  if (loading) return 'loading'
  if (loading) return `Error! ${error.message}`

  return ListOfPhotoCardsComponent(data)
}
