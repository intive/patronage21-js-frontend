import { withRouter } from 'next/router'
import Layout from '../components/layout'
import EmailVerification from '../components/screen/email-verification/email-verification'

function Home ({ router }) {
  return (
    <Layout>
      <EmailVerification email={router.query.email || ''} />
    </Layout>
  )
}

export default withRouter(Home)
