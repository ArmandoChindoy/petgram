import { PhotoCard } from '@/components/PhotoCard'
import { GET_SINGLE_PHOTO } from '../hoc/GET_SINGLE_PHOTO'

import { useQuery } from '@apollo/client'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
    variables: {
      id: id
    }
  })
  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>Error</h2>
  return (
    <PhotoCard {...data.photo} />
  )
}
