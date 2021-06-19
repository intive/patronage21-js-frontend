import * as yup from 'yup'

export const validationSchema = () => yup.object().shape({
  login: yup.string()
    .required('Wpisz login'),
  password: yup.string()
    .required('Wpisz hasło')
})
