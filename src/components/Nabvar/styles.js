import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { FadeIn } from '@/Styles/animations'
export const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-around;
  z-index: 1;
  bottom: 0;
  padding: 1rem;
  background-color: #fcfcfc;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  border-top: 0.1rem solid #dcdcdc;
`
export const Link = styled(LinkRouter)`
text-decoration: none;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  color: #dcdcdc;
  position: relative;
  &[aria-current] {
    color: #000000;
    text-align:center;
    &:after {
      ${FadeIn({ time: '.5s' })};
      content: '.';
      position: absolute;
      left: 0;
      right: 0;
      width: 100%;
      bottom: 0;
      font-size: 3.4rem;
      line-height: 2rem;
    }
  }
`
