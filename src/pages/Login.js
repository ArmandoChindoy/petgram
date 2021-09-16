import { useContext } from 'react'
import { UserForm } from '../components/UserForm'
import { useLogIn } from '../containers/useLogIn'
import { Context } from '../Context'
export const Login = () => {
  const { login, loading, error } = useLogIn()
  const { activateAuth } = useContext(Context)
  const onSubmit = ({ email, password }) => {
    const input = { email, password }
    const variables = { input }
    login({ variables })
      .then(({ data }) => {
        const { login } = data
        activateAuth(login)
      })
      .catch((e) => console.error('error', e))
  }
  const errorMsg = error && error.toString()
  return <UserForm onSubmit={onSubmit} loading={loading} error={errorMsg} />
}
