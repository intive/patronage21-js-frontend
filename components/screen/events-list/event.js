import { useState } from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import {
  Dialog,
  DialogActions,
  DialogContent,
  IconButton
} from '@material-ui/core'
import Delete from '@material-ui/icons/DeleteOutlineOutlined'
import Notes from '@material-ui/icons/Notes'
import Edit from '@material-ui/icons/EditOutlined'
import { API } from '../../../helpers/api'
import Alert from '../../elements/alert'
import {
  ConfirmText,
  ConfirmButton,
  Description,
  Event,
  EventDetails,
  Icons,
  Text,
  Time,
  Title
} from './style'

export default function EventItem ({
  id,
  title,
  description,
  startDate,
  endDate,
  deleteEvent
}) {
  const [visible, setVisible] = useState(false)
  const [confirmDeletion, setConfirmDeletion] = useState(false)
  const [alert, setAlert] = useState({})

  const startTime = dayjs(startDate).format('HH:mm')
  const endTime = dayjs(endDate).format('HH:mm')

  const openDeleteConfirmation = () => {
    setConfirmDeletion(true)
  }

  const closeDeleteConfirmation = () => {
    setConfirmDeletion(false)
  }

  const handleDeleteEvent = async (id) => {
    setAlert({})
    try {
      const res = await API.delete(`events/delete/${id}`)
      if (res.ok) {
        deleteEvent(id)
      } else {
        setAlert({
          title: 'BŁĄD',
          text: res.body.general[0]
        })
      }
    } catch {
      setAlert({
        title: 'BŁĄD',
        text: 'Nieudało się usunąć wydarzenia'
      })
    }
    closeDeleteConfirmation()
  }

  const showDescription = () => setVisible(!visible)
  const descriptionText = !description
    ? <Text className='grayText'>Brak opisu</Text>
    : <Text>{description}</Text>

  return (
    <>
      <Event>
        <EventDetails>
          <Title>{title}</Title>
          <Time>
            {startTime} - {endTime}
          </Time>
        </EventDetails>
        <Icons>
          <IconButton size='small' onClick={showDescription}>
            <Notes fontSize='small' />
          </IconButton>
          <Link href={`/kalendarz/edycja-wydarzenia/${id}`}>
            <IconButton size='small'>
              <Edit fontSize='small' />
            </IconButton>
          </Link>
          <IconButton size='small' onClick={openDeleteConfirmation}>
            <Delete fontSize='small' />
          </IconButton>
          <Dialog open={confirmDeletion} onClose={closeDeleteConfirmation}>
            <DialogContent>
              <ConfirmText>
                Czy na pewno chcesz usunąć wydarzenie z kalendarza?
              </ConfirmText>
            </DialogContent>
            <DialogActions>
              <ConfirmButton
                onClick={closeDeleteConfirmation}
                className='small'
              >
                Nie
              </ConfirmButton>
              <ConfirmButton
                onClick={() => handleDeleteEvent(id)}
                className='small'
                autoFocus
              >
                Tak
              </ConfirmButton>
            </DialogActions>
          </Dialog>
        </Icons>
      </Event>
      {visible && <Description>{descriptionText}</Description>}
      {Object.keys(alert).length !== 0 && <Alert alert={alert} />}
    </>
  )
}
