import Layout from '../components/layout/'
import ErrorPage from '../components/screen/error/error'

const NotFoundPage = () => {
  return (
    <Layout withNavigation={false}>
      <ErrorPage
        title='Wystąpił błąd 404'
        description='Strona o podanym adresie nie została odnaleziona'
        buttonTitle='Strona główna'
        buttonHref='/'
        isReturn
      />
    </Layout>
  )
}

export default NotFoundPage
