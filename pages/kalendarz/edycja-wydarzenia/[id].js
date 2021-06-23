import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../../components/layout'
import EditEvent from '../../../components/screen/edit-event'
import Error from '../../../components/screen/error/error'
import ProgressLoader from '../../../components/screen/loader'
import { API } from '../../../helpers/api'
import handleCookie from '../../../helpers/cookiesHandler'

export default function EditEventForm ({ event, statusCode, parsedCookie }) {
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
        ? (
            statusCode !== 200
              ? <Error
                  title={`Błąd ${statusCode}`}
                  description='Przepraszamy. Coś poszło nie tak. Spróbuj ponownie za chwilę.'
                  buttonTitle='Strona główna'
                  buttonHref='/'
                  isReturn
                />
              : <EditEvent event={event} />)
        : <ProgressLoader />}
    </Layout>
  )
}

const handleRedirect = async (route) => await route

export async function getServerSideProps (ctx) {
  const { req: { headers: { cookie } } } = ctx
  const parsedCookie = handleCookie(cookie)

  try {
    const { id } = ctx.params
    const res = await API.get(`events/event/${id}`)
    const event = res.ok ? res.body : null
    const statusCode = res.status
    return {
      props: {
        event,
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
