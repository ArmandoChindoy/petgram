import { useContext } from 'react'
import { UserForm } from '@/components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { Context } from '../Context'
export const Register = () => {
  const { register, loading, error } = RegisterMutation()
  const { activateAuth } = useContext(Context)

  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    register({ variables })
      .then(({ data }) => {
        const { signup } = data
        console.log('sing', signup)
        activateAuth(signup)
      })
      .catch((e) => console.error('error', e))
  }
  const errorMsg = error && error.toString()

  return (
    <UserForm
      onSubmit={onSubmit}
      loading={loading}
      error={errorMsg}
      title='Register'
      register
    />
  )
}
