import Layout from '../../components/layout'
import Kalendarz from '../../components/screen/calendar/calendar'
import dayjs from 'dayjs'
import { API } from '../../helpers/api'

export async function getStaticProps () {
  const firstDay = dayjs([2000]).startOf('day').format()
  const lastDay = dayjs([2100]).startOf('day').format()
  try {
    const res = await API.get(`events/list/${firstDay}/${lastDay}`)
    const events = res.ok ? res.body : []
    return {
      props: {
        events
      }
    }
  } catch (err) {
    const events = []
    return {
      props: {
        events
      }
    }
  }
}

export default function Calendar ({ events }) {
  return (
    <Layout>
      <Kalendarz events={events} />
    </Layout>
  )
}
