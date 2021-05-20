import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const StyledSpan = styled('span')`
  font-weight: 600;
`
const StyledTypography = styled(Typography).attrs({
  color: 'primary',
  variant: 'h6',
  noWrap: true
})`
  font-weight: 400;
  width: 100%;
`

const Text = styled.span`
&:hover{
  cursor: ${({ cursorType }) => cursorType};
}
`

export default function Logo ({ useLogoRedirect }) {
  const router = useRouter()

  const handleNavigation = () => {
    if (useLogoRedirect) {
      router.push('/')
    }
  }
  return (
    <StyledTypography>
      <Text onClick={handleNavigation} cursorType={useLogoRedirect ? 'pointer' : 'auto'}>
        <StyledSpan>Patron</StyledSpan>-a-<StyledSpan>tive</StyledSpan>
      </Text>
    </StyledTypography>
  )
}
