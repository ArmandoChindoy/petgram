import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { GlobalStyles } from './Styles/GlobalStyles'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId)
  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId
        ? <PhotoCardWithQuery id={detailId} />
        : (
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={6} />
          </>
          )}
    </>
  )
}
