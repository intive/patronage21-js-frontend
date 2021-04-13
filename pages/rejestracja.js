import Layout from '../components/layout'
import FormRegistration from '../components/screen/registration/form-registration'

export default function Registration () {
  return (
    <Layout withNavigation={false}>
      <FormRegistration />
    </Layout>
  )
};
