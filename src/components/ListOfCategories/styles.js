import styled, { css } from 'styled-components'
import { FadeIn } from '@/Styles/animations'
export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  list-style: none;
  ${(props) =>
    props.fixed &&
    css`
    ${FadeIn({ time: '1s' })}
      background-color: white;
      position: fixed;
      border-radius: 5rem;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      z-index: 1;
      top: -1rem;
      left: 0;
      right: 0;
      max-width: 40rem;
      padding: 1rem;
      margin:0 auto;
      transform: scale(.8);
    `}
`
export const Item = styled.li`
  display: flex;
  padding: 0 0.8rem;
`
