export default (req, res) => {
  const { email } = req.body

  console.log(email)

  res.status(200).json({ message: 'Nowy kod został wysłany pomyślnie' })
}
