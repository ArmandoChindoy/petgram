import styled from 'styled-components'
import { FadeIn } from '../../Styles/animations'

export const Article = styled.article`
min-height: 200px;
`

export const ImageWrapper = styled.div`
border-radius: 1rem;
display: block;
height: 0;
overflow: hidden;
padding: 56.25% 0 0 0;
position: relative;
width: 100%;
`
export const Image = styled.img`
${FadeIn()}
box-shadow: 0 1rem 1.4rem rgba(0,0,0,.2);
height: 100%;
object-fit: cover;
position: absolute;
top:0;
width: 100%;
`
export const Button = styled.button`
padding-top: .8rem;
display: flex;
align-items: center;
background-color: rgba(0,0,0,0);
border:none;
& svg{
    margin-right: 0.4rem;
}
`
