import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { atom, useRecoilState } from 'recoil'

const ErrorTitle = styled.h1`
    color: ${({ theme }) => theme.customPalette.colors.secondary};
`
const ErrorDescripiton = styled.p`
font-weight: bold;
`
const ErrorButton = styled(Button)`
&&  {
    font-weight: bold;
    width: 250px;
    height: 50px;
    border-radius: 50px;
    color: white;
    font-size:1.2rem;
    text-transform: none;
}
`

const errorTitleState = atom({
  default: 'Wystąpił Błąd',
  key: 'errorTitleState'
})

const errorDescriptionState = atom({
  default: 'Wystąpił nieoczekiwany błąd',
  key: 'errorDescriptionState'
})

const errorButtonTitleState = atom({
  default: 'Strona główna',
  key: 'errorButtonTitleState'
})

export default function ErrorPage () {
  const title = useRecoilState(errorTitleState)
  const buttonTitle = useRecoilState(errorButtonTitleState)
  const description = useRecoilState(errorDescriptionState)

  return (
    <>
      <ErrorTitle>{title}</ErrorTitle>
      <ErrorDescripiton>{description}</ErrorDescripiton>
      <ErrorButton variant='contained' color='primary'>
        {buttonTitle}
      </ErrorButton>
      <ErrorButton variant='contained' color='secondary'>wróć</ErrorButton>
    </>
  )
}
