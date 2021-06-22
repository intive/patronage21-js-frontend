import { useRouter } from 'next/router'
import { ErrorScreenWrapper, StyledButton, ErrorTitle, StyledImage } from './style'
import Patrocat from '../../elements/patrocat'

export default function ErrorPage ({ title, description, buttonTitle, buttonHref, isReturn, isHome }) {
  const router = useRouter()
  return (
    <ErrorScreenWrapper>
      <ErrorTitle>{title}</ErrorTitle>
      <p>{description}</p>
      <StyledButton
        variant='contained'
        color='primary'
        onClick={() => router.push(buttonHref)}
      >
        {buttonTitle}
      </StyledButton>
      {isReturn &&
        <StyledButton
          variant='contained'
          color='secondary'
          onClick={() => router.back()}
        >
          Wróć
        </StyledButton>}
      {isHome &&
        <StyledButton
          variant='contained'
          color='secondary'
          onClick={() => router.push('/')}
        >
          Strona główna
        </StyledButton>}
      <StyledImage>
        <Patrocat isSad />
      </StyledImage>
    </ErrorScreenWrapper>
  )
}
