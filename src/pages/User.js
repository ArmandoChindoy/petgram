import { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SumbitButton'
import { Layout } from '../components/Layout'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <Layout title='Account 🐾'>
        <h1>Account</h1>
        <SubmitButton onClick={removeAuth}>Log out</SubmitButton>
      </Layout>
    </>
  )
}
