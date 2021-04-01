import Layout from '../components/layouts/home'
import Content from '../components/elements/content'
import Head from 'next/head'
import FormRegistration from '../components/screen/registration/form-registration'

export default function Registration () {
  const title = 'Rejestracja'
  return (
    <div>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Head>
      <Layout>
        <Content>
          <FormRegistration />
        </Content>
      </Layout>
    </div>
  )
};
