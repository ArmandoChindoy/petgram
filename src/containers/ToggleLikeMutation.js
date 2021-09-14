import { gql, useMutation } from '@apollo/client'

export const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const ToggleLikeMutation = () => {
  const [mutation, { error: mutationError, loading: mutationLoading }] = useMutation(LIKE_PHOTO)
  return { mutation, mutationError, mutationLoading }
}
