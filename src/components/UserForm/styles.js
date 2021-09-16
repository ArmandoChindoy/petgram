import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0 auto;
  width: 40px;
`

export const Img = styled.img`
  width: 100%;
  margin-bottom: 3rem;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2rem 0;
`
export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  max-width: 80%;
  margin: 0 auto;
  border-radius: 1rem;
  border: none;
  /* border-bottom: .1rem solid #efefef; */
  box-shadow: 0 0.1rem 0.5rem 0.2rem #efefef;
`

export const Error = styled.span`
border-radius: 1rem;
display: flex;
font-size: 1.4rem;
width: 80%;
margin: 0 auto;
padding: 1rem;
color: red;
background-color: lightpink;
`
export const CallToAction = styled.span`
display: flex;
width: 80%;
font-size: 1.2rem;
margin: 0 auto;
`
