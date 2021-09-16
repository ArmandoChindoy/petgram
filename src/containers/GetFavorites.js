import { useQuery } from '@apollo/client'
import { GET_FAVS } from '../hoc/GET_FAVS'
import { ListOfFavs } from '../components/ListOfFav'

export const useGetFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS, { fetchPolicy: 'cache-and-network' })
  if (loading) return <h2>...Loading</h2>
  if (error) return <h2>...error</h2>
  console.log(data)
  const { favs } = data
  if (favs.length < 1) return <h2>No tienes favoritos guardados todavia</h2>
  return (
    <ListOfFavs favs={favs} />
  )
}
