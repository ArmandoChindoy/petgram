import { Layout } from '../components/Layout'
import { useGetFavs } from '../containers/GetFavorites'
export default () => {
  return (
    <Layout title='Your favorites ❤' subtitle='here you can see your liked posts'>
      {useGetFavs()}
    </Layout>
  )
}
