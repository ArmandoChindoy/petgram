import { Link as RouterLink } from '@reach/router'
import styled from 'styled-components'

export const Grid = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
gap: 1rem;
padding: 1rem;
`
export const Link = styled(RouterLink)`
border-radius: 2rem;
overflow: hidden;
object-fit: cover;
`
export const Image = styled.img`
width: 100%;
height: 100%;
`
