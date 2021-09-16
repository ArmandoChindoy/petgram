import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Img, Error, CallToAction } from './styles'
import logIn from '@/assets/img/logIn.svg'
import { Link } from '@reach/router'
import { SubmitButton } from '../SumbitButton'

export const UserForm = ({ onSubmit, loading = false, error, register }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <>
      <Img src={logIn} />
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' disabled={loading} {...email} />
        <Input
          type='password'
          disabled={loading}
          placeholder='Password'
          {...password}
        />
        <SubmitButton disabled={loading}>
          {loading ? '...Loading' : register ? 'Register' : 'Sing in'}
        </SubmitButton>
      </Form>
      {register ? (
        <CallToAction>
          You have an account?<Link to='/login'>Log in</Link>
        </CallToAction>
      ) : (
        <CallToAction>
          You dont have account yet?<Link to='/register'>Create account</Link>
        </CallToAction>
      )}
      {error && <Error>{error}</Error>}
    </>
  )
}
