import { useQuery } from '@apollo/client'
import { GET_PHOTOS } from '@/hoc/GET_PHOTOS'
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })
  if (loading) return 'loading'
  if (loading) return `Error! ${error.message}`

  return ListOfPhotoCardsComponent(data)
}
