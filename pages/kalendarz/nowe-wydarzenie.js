import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import FormNewEvent from '../../components/screen/new-event/new-event'
import ProgressLoader from '../../components/screen/loader'
import handleCookie from '../../helpers/cookiesHandler'

export default function NewEvent (props) {
  const hasCookie = Boolean(props.parsedCookie)
  const router = useRouter()

  useEffect(() => {
    if (!hasCookie) {
      handleRedirect(router.push('/401'))
    }
  }, [])

  return (
    <Layout>
      {hasCookie ? <FormNewEvent /> : <ProgressLoader />}
    </Layout>
  )
};

const handleRedirect = async (route) => await route

export const getServerSideProps = async ({ req: { headers: { cookie } } }) => {
  const parsedCookie = handleCookie(cookie)
  return {
    props: {
      parsedCookie
    }
  }
}
