import Layout from '../components/layout'
import Success from '../components/success/success-page'

export default function weryfikacja () {
  return (
    <Layout withNavigation={false}>
      <Success
        title='Twoja rejestracja przebiegła pomyślnie!'
        description='Teraz jesteś członkiem programu patronage!'
        buttonLabel='Strona główna'
        buttonRedirect='/'
      />
    </Layout>
  )
};
