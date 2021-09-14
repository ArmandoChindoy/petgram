import { PhotoCard } from '../PhotoCard'
export const ListOfPhotoCardsComponent = ({ photos }) => (
  <ul>
    {photos.map((photo) => (
      <PhotoCard key={photo.id} {...photo} />
    ))}
  </ul>
)
