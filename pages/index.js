import styled from 'styled-components'
import Button from '@material-ui/core/Button'

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.customPalette.colors.primary};
`

export default function Home () {
  return (
    <>
      <Title>Intivo Patronum</Title>
      <Button variant='contained' color='secondary'>
        przykładowy button z Material UI
      </Button>
    </>
  )
}
