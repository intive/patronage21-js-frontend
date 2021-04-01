import { useRouter } from 'next/router'
import { ErrorScreenWrapper, StyledButton, ErrorTitle, StyledImage } from './style'
import Image from 'next/image'

export default function ErrorPage ({ title, description, buttonTitle, buttonHref, isReturn }) {
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
      <StyledImage>
        <Image src='/patronage-error.svg' alt='Patronage error' width={300} height={300} />
      </StyledImage>
    </ErrorScreenWrapper>
  )
} s
