import { useMutation, gql } from '@apollo/client'

const REGISTER = gql`
mutation singinup($input:UserCredentials!){
    signup(input: $input)
}
`
export const RegisterMutation = () => {
  const [register, { loading, error, data }] = useMutation(REGISTER)
  return { register, loading, error, data }
}
