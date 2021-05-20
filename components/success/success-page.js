import { SuccessPageWrapper, Title, Description, SuccessButton, StyledImage } from './style.js'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Patrocat from '../elements/patrocat'

export default function SuccessPage ({ title, description, buttonLabel, buttonRedirect }) {
  return (
    <SuccessPageWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={buttonRedirect} passHref>
        <SuccessButton variant='contained' color='primary'>{buttonLabel}</SuccessButton>
      </Link>
      <StyledImage>
        <Patrocat />
      </StyledImage>
    </SuccessPageWrapper>
  )
}

SuccessPage.propTypes = {
  title: PropTypes.string.isRequired
}
SuccessPage.defaultProps = {
  buttonLabel: 'Zamknij',
  buttonRedirect: '/'
}
