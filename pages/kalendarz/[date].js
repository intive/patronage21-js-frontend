import { useEffect } from 'react'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import Layout from '../../components/layout'
import EventsList from '../../components/screen/events-list'
import Error from '../../components/screen/error/error'
import ProgressLoader from '../../components/screen/loader'
import { API } from '../../helpers/api'
import handleCookie from '../../helpers/cookiesHandler'

export default function ListEventsForDay ({ events, date, statusCode, parsedCookie }) {
  const hasCookie = Boolean(parsedCookie)
  const router = useRouter()

  useEffect(() => {
    if (!hasCookie) {
      handleRedirect(router.push('/401'))
    }
  }, [])

  return (
    <Layout>
      {hasCookie
        ? (statusCode !== 200
            ? <Error
                title={`Błąd ${statusCode}`}
                description='Przepraszamy. Coś poszło nie tak. Spróbuj ponownie za chwilę.'
                buttonTitle='Strona główna'
                buttonHref='/'
                isReturn
              />
            : <EventsList events={events} date={date} />)
        : <ProgressLoader />}
    </Layout>
  )
}

const handleRedirect = async (route) => await route

export async function getServerSideProps (ctx) {
  const { req: { headers: { cookie } } } = ctx
  const parsedCookie = handleCookie(cookie)

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
        statusCode,
        parsedCookie
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
