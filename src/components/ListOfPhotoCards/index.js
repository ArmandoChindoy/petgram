import { PhotoCard } from '../PhotoCard'
export const ListOfPhotoCardsComponent = ({ photos }) => {
  console.log(photos)
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
