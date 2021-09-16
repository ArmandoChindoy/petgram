import { gql } from '@apollo/client'

export const GET_FAVS = gql`
query getFavs {
    favs{
        id
        categoryId
        src
        likes
        userId
    }
}
`
