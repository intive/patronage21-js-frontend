const SAMPLE_CODE = 12345678

export default (req, res) => {
  const { email, code } = req.body

  console.log(email)

  if (code === SAMPLE_CODE) {
    res.status(200).json({ message: 'Podany kod został poprawnie zweryfikowany' })
  } else {
    res.status(400).json({ message: 'Podany kod jest nieprawidłowy' })
  }
}
