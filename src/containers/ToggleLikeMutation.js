import { gql, useMutation } from '@apollo/client'

export const LIKE_PHOTO = gql`
mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
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
