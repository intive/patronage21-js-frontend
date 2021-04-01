import styled from 'styled-components'
import Button from '../../elements/button'

import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  MenuItem
} from '@material-ui/core'

export const LogoContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  @media (min-width: 1280px) {
    position: absolute;
    width: 40%;
    top: 30px;
    right: 20px;
  }
`
export const Logo = styled.img`
  margin: 0 auto;
  width: 50%;
  height: 50%;
  display: block;
`

export const StyledFormControl = styled(FormControl)`
  margin: 10px 0;
  width: 100%;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
  @media (min-width: 1280px) {
    width: 40%;
  }
`

export const StyledFormGroup = styled(FormGroup)`
  margin: 10px 0;
  width: 100%;
`

export const StyledFormControlLabel = styled(FormControlLabel)`
  margin: 10px 0;
  width: 100%;
`

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  padding: 5px;
  &:hover,
  &:active,
  &.Mui-selected:hover {
    background-color: ${({ theme }) => theme.customPalette.colors.secondary};
  }
  &:active,
  &.Mui-selected {
    background-color: white;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.customPalette.colors.secondary};
`

export const Text = styled.p`
  font-size: 16px;
`

export const Span = styled.span`
  font-size: 15px;
  margin-top: 10px;
`

export const StyledCheckbox = styled(Checkbox)`
  padding-left: 0px;
`

export const SubmitButton = styled(Button)`
  width: 80%;
  margin: 20px auto;
  &.Mui-disabled{
    color: white;
  }
  @media (min-width: 1280px) {
    width: 40%;
    margin: 20px 0;
  }
`
