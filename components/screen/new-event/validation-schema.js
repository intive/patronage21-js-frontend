import * as yup from 'yup'

const dayjs = require('dayjs')

export const validationSchema = () => yup.object().shape({
  title: yup.string()
    .required('Wpisz tytuł')
    .min(3, 'Tytuł musi mieć minimalnie 3 znaki')
    .max(50, 'Tytuł może mieć maksymalnie 50 znaków'),
  dateEvent: yup.string()
    .required('Wybierz datę'),
  startTime: yup.string()
    .required('Wybierz godzinę rozpoczęcia'),
  endTime: yup.string()
    .required('Wybierz godzinę zakończenia')
    .test('is-greater', 'Czas zakończenia musi być po czasie rozpoczęcia', (value, context) => {
      const { dateEvent, startTime } = context.parent
      return dayjs(dateEvent + ' ' + value).isAfter(dayjs(dateEvent + ' ' + startTime))
    }),
  description: yup.string()
    .max(200, 'Opis wydarzenia może mieć maksymalnie 200 znaków')
})
