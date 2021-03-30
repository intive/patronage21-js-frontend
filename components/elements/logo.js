import Typography from '@material-ui/core/Typography'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    color: theme.palette.primary.main,
    fontWeight: 400,
    '& span': {
      fontWeight: 600
    }
  }
}))

export default function Logo () {
  const classes = useStyles()
  return (
    <Typography className={classes.title} variant='h6' noWrap>
      <span>Patron</span>-a-<span>tive</span>
    </Typography>
  )
}
