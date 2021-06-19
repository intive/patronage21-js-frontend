import { useState } from 'react'
import { useRouter } from 'next/router'
import { API } from '../../helpers/api'
import PersonIcon from '@material-ui/icons/Person'
import Tooltip from '@material-ui/core/Tooltip'
import { IconButton } from '@material-ui/core'
import Alert from './alert'

export default function ArrowTooltips () {
  const [alert, setAlert] = useState({})

  const router = useRouter()

  const logOut = async () => {
    setAlert({})
    try {
      const res = await API.get('signOut')
      if (res.ok) router.push('/logowanie')
      else {
        setAlert({
          title: 'BŁĄD',
          text: res.body.general[0]
        })
      }
    } catch (err) {
      setAlert({
        title: 'BŁĄD',
        text: 'Wlogowanie nie powiodło się'
      })
    }
  }

  return (
    <>
      <IconButton onClick={logOut}>
        <Tooltip title='WYLOGUJ' arrow>
          <PersonIcon />
        </Tooltip>
      </IconButton>
      {Object.keys(alert).length !== 0 && <Alert alert={alert} />}
    </>
  )
}
