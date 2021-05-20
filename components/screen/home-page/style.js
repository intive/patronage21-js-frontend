import styled from 'styled-components'
import Button from '../../elements/button'

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
`

export const Text = styled.p`
  font-size: 16px;
`

export const TilesContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const TileButton = styled(Button)`
  width: 47%;
  height: 160px;
  margin-bottom: 20px;
  border-radius: 20px;
  border-color: ${({ theme }) => theme.customPalette.colors.primary};
  & .MuiButton-label {
    display: flex;
    flex-direction: column;
  }
  &:hover {
    background-color: ${({ theme }) => theme.customPalette.colors.primary};
    color: ${({ theme }) => theme.palette.primary.contrastText}
  }
  @media (min-width: 1280px) {
    width: 17%;
    margin-bottom: 0;
  }
`
