const requiredFields = [
  'title',
  'firstName',
  'lastName',
  'email',
  'phone',
  'githubLink',
  'technologies',
  'login',
  'password'
]
const checkRequiredFields = (obj) => {
  return requiredFields.every((data) => {
    return data in obj
  })
}
const checkRequiredData = (obj) => {
  return checkRequiredFields(obj) && Object.keys(obj).every((key) => obj[key])
}

export default (req, res) => {
  if (checkRequiredData(req.body)) {
    res.status(200).json()
  } else if (checkRequiredFields(req.body) && !checkRequiredData(req.body)) {
    res.status(400).json()
  } else {
    res.status(500).json()
  }
}
