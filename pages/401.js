import Layout from '../components/layout/'
import ErrorPage from '../components/screen/error/error'

const UnauthorizedPage = () => {
  return (
    <Layout>
      <ErrorPage
        title='Wystąpił błąd 401'
        description='Nie masz dostępu do strony o podanym adresie'
        buttonTitle='Zaloguj się'
        buttonHref='/logowanie'
        isHome
      />
    </Layout>
  )
}

export default UnauthorizedPage
