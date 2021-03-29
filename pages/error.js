import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'
import Image from 'next/image'

const ErrorTitle = styled.h1`
  color: ${({ theme }) => theme.customPalette.colors.secondary};
`

const StyledButton = styled(Button)`
  && {
    font-weight: bold;
    width: 250px;
    height: 50px;
    border-radius: 50px;
    color: white;
    font-size: 1.2rem;
    text-transform: none;
  }
`

export default function ErrorPage (props) {
  const router = useRouter()
  return (
    <>
      <ErrorTitle>{props.title}</ErrorTitle>
      <p>{props.description}</p>
      <StyledButton
        variant='contained'
        color='primary'
        onClick={() => router.push(props.href)}
      >
        {props.buttonTitle}
      </StyledButton>
      {props.isReturn &&
        <StyledButton
          variant='contained'
          color='secondary'
          onClick={() => router.back()}
        >
          Wróć
        </StyledButton>}
      <Image src='/patronage-error.svg' alt='patronage' width={300} height={300} />
    </>
  )
}

ErrorPage.defaultProps = {
  title: 'Wystąpił błąd',
  description: 'Wystąpił nieoczekiwany błąd.',
  buttonTitle: 'Strona główna',
  href: '/',
  isReturn: true
}
