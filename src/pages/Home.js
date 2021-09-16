import React from 'react'
import { ListOfCategories } from '@/components/ListOfCategories'
import { ListOfPhotoCards } from '@/containers/ListOfPhotoCards'
import { Layout } from '../components/Layout'

const HomePage = ({ id }) => (
  <>
    <Layout
      title='Your pet photo app 🐾'
      subtitle='With petgram you can find nice domestic animals pics'
    >
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  </>
)

export const Home = React.memo(
  HomePage,
  (prevProps, props) => prevProps.id === props.id
)
