import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

import styled from 'styled-components'
import Button from './button'

const StyledDialogTitle = styled(DialogTitle)`
  & .MuiTypography-h6 {
    text-align: center;
    font-size: 12px
  }
`

const StyledDialogContent = styled(DialogContent)`
  & .MuiTypography-body1 {
    font-size: 12px
  }
`

const OkButton = styled(Button)`
  width: 50%;
  margin: 0 auto;
  font-size: 12px;
`

export default function Alert ({ alert: { title, text } }) {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <StyledDialogTitle id='alert-dialog-slide-title'>{title}</StyledDialogTitle>
        <StyledDialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {text}
          </DialogContentText>
        </StyledDialogContent>
        <DialogActions>
          <OkButton onClick={handleClose} color='primary'>
            OK
          </OkButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
