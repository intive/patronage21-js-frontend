import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import Kalendarz from '../../components/screen/calendar/calendar'
import ProgressLoader from '../../components/screen/loader'
import handleCookie from '../../helpers/cookiesHandler'

export default function Calendar (props) {
  const hasCookie = Boolean(props.parsedCookie)
  const router = useRouter()

  useEffect(() => {
    if (!hasCookie) {
      handleRedirect(router.push('/401'))
    }
  }, [])

  return (
    <Layout>
      {hasCookie ? <Kalendarz /> : <ProgressLoader />}
    </Layout>
  )
}

const handleRedirect = async (route) => await route

export const getServerSideProps = async ({ req: { headers: { cookie } } }) => {
  const parsedCookie = handleCookie(cookie)
  return {
    props: {
      parsedCookie
    }
  }
}
