import styled from 'styled-components'
import Button from '../../elements/button'
import { DialogContentText } from '@material-ui/core'

export const EventsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    min-width: 600px;
    width: 40%;
    min-width: 400px;
  }
`

export const Header = styled.h2`
  font-size: 18px;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
`

export const List = styled.div`
  min-height: 50px;
`

export const EventWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Event = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`

export const EventDetails = styled.div`
  flex-basis: 70%;
`

export const Icons = styled.div`
 text-align: end;
  flex-basis: 30%;
`

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  &.grayText {
    color: ${({ theme }) => theme.customPalette.text.secondary}
  }
`
export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
`

export const Time = styled.p`
  font-size: 12px;
  padding-bottom: 2px;
  margin: 0;
`

export const Description = styled.div`
  margin-bottom: 10px;
`

export const ConfirmText = styled(DialogContentText)`
  font-size: 12px;
  color: black;
  margin-top: 10px;
`

export const ConfirmButton = styled(Button).attrs({
  color: 'primary'
})`
  margin: 20px 0;
  width: 80%;
  align-self: center;
  @media (min-width: 600px) {
    align-self: flex-start;
  }
  &.small {
    margin: 0 15px 5px;
    padding: 6px;
  }
`
