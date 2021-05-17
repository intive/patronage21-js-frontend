import dayjs from 'dayjs'
import Layout from '../../components/layout'
import EventsList from '../../components/screen/events-list'
import Error from '../../components/screen/error/error'
import { API } from '../../helpers/api'

export default function ListEventsForDay ({ events, date, statusCode }) {
  return (
    <Layout>
      {statusCode !== 200
        ? <Error
            title={`Błąd ${statusCode}`}
            description='Przepraszamy. Coś poszło nie tak. Spróbuj ponownie za chwilę.'
            buttonTitle='Strona główna'
            buttonHref='/'
            isReturn
          />
        : <EventsList events={events} date={date} />}
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  try {
    const { date } = ctx.params
    const dateTime = dayjs(date).startOf('day').format()
    const res = await API.get(`events/list/${dateTime}`)
    const events = res.ok ? res.body : null
    const statusCode = res.status
    return {
      props: {
        date,
        events,
        statusCode
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
