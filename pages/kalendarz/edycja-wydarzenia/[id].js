import Layout from '../../../components/layout'
import EditEvent from '../../../components/screen/edit-event'
import Error from '../../../components/screen/error/error'
import { API } from '../../../helpers/api'

export default function EditEventForm ({ event, statusCode }) {
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
        : <EditEvent event={event} />}
    </Layout>
  )
}

export async function getServerSideProps (ctx) {
  try {
    const { id } = ctx.params
    const res = await API.get(`events/event/${id}`)
    const event = res.ok ? res.body : null
    const statusCode = res.status
    return {
      props: {
        event,
        statusCode
      }
    }
  } catch {
    return {
      notFound: true
    }
  }
}
