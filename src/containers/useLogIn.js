import { gql, useMutation } from '@apollo/client'

const LOGIN = gql`
mutation login($input:UserCredentials!){
    login(input:$input)
}
`

export const useLogIn = () => {
  const [login, { loading, error, data }] = useMutation(LOGIN)
  return { login, loading, error, data }
}
