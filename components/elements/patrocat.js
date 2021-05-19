import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const StyledImage = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 25px;
`

export default function Patrocat ({ width = 300, height = 300, isSad }) {
  return (
    <StyledImage>
      {isSad
        ? <Image src='/logo-error.svg' alt='Patrocat error' width={width} height={height} />
        : <Image src='/logo.svg' alt='Patrocat' width={width} height={height} />}
    </StyledImage>
  )
};
