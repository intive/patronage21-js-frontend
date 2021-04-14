import Layout from '../components/layouts/home'
import Content from '../components/elements/content'
import Head from 'next/head'
import Success from '../components/success/success-page'
import AppBar from '../components/elements/appBar'

export default function weryfikacja () {
  const title = 'Rejestracja - Sukces'
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
        <title>{title}</title>
      </Head>
      <Layout>
        <AppBar />
        <Content>
          <Success
            title='Twoja rejestracja przebiegła pomyślnie!'
            description='Teraz jesteś członkiem programu patronage!'
            buttonLabel='Strona główna'
            buttonRedirect='/'
          />
        </Content>
      </Layout>
    </>
  )
};
