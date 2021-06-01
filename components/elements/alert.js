import React, { useState } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from '@material-ui/core'

import styled from 'styled-components'
import Button from './button'

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const StyledDialogTitle = styled(DialogTitle)`
    & .MuiTypography-h6 {
        text-align: center
    }
`

const OkButton = styled(Button)`
  width: 50%;
  margin: 0px auto;
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
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <StyledDialogTitle id='alert-dialog-slide-title'>{title}</StyledDialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <OkButton onClick={handleClose} color='primary'>
            OK
          </OkButton>
        </DialogActions>
      </Dialog>
    </div>
  )
}
