import * as yup from 'yup'

export const validationSchema = () => yup.object().shape({

  title: yup.string()
    .oneOf(['Pan', 'Pani']),

  firstName: yup.string()
    .min(3, 'Imię jest za krótkie')
    .max(20, 'Imię jest za długie')
    .required('Wpisz imię'),

  lastName: yup.string()
    .min(2, 'Nazwisko jest za krótkie')
    .max(20, 'Nazwisko jest za długie')
    .required('Wpisz nazwisko'),

  email: yup.string()
    .email('Niepoprawny adres e-mail')
    .required('Wpisz adres e-mail'),

  phone: yup.string()
    .matches(/^[0-9]{9}$/, 'Niepoprawny numer telefonu')
    .required('Wpisz numer telefonu'),

  githubLink: yup.string()
    .matches(/((https?):\/\/)?(www.)?github.com\/[0-9a-zA-Z.-]+$/, 'To nie jest link do konta GitHub')
    .required('Wpisz link do konta GitHub'),

  technologies: yup.array()
    .min(1, 'Musisz wybrać przynajmniej jedną technologię.')
    .max(3, 'Można wybrać tylko 3 technologie.'),

  login: yup.string()
    .min(2, 'Login jest za krótki')
    .max(15, 'Login jest za długi')
    .required('Wpisz login'),

  password: yup.string()
    .min(8, 'Hasło jest za krótkie - min. 8 znaków')
    .matches(/[A-Z]+/, 'Hasło musi mieć przynajmniej jedną dużą literę')
    .matches(/[!@#$%^&*()-+]+/, 'Hasło musi mieć przynajmniej jeden znak specjalny')
    .required('Wpisz hasło'),

  passwordConfirm: yup.string().oneOf(
    [yup.ref('password'), null], 'Hasła nie zgadzają się')
    .required('Powtórz hasło'),

  regulations: yup.boolean()
    .oneOf([true], 'Musisz zaakceptować regulamin.'),

  information: yup.boolean()
})
