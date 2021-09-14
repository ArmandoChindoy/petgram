import { ListOfCategories } from '@/components/ListOfCategories'
import { ListOfPhotoCards } from '@/containers/ListOfPhotoCards'
export const Home = (path) => {
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={path.detailId} />
    </>
  )
}
