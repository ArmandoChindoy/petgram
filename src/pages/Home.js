import { ListOfCategories } from '@/components/ListOfCategories'
import { ListOfPhotoCards } from '@/containers/ListOfPhotoCards'
export const Home = (path) => {
  const id = path.match.params.id
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </>
  )
}
