import { keyframes, css } from 'styled-components'

const fadeInKeyFrames = keyframes`
from{
    filter:blur(1);
    opacity:0;
}
to{
    filter:blur(0);
    opacity:1;
}
`

export const FadeIn = ({ time = '2s', type = 'ease-in' } = {}) => css`
  animation: ${fadeInKeyFrames} ${time} ${type};
`
