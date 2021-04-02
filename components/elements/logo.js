import React from 'react'
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

export default function Logo () {
  return (
    <StyledTypography>
      <StyledSpan>Patron</StyledSpan>-a-<StyledSpan>tive</StyledSpan>
    </StyledTypography>
  )
}
