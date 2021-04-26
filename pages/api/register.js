export default (req, res) => {
  if (res.ok) {
    res.status(200).json()
  } else if (res.status === 400) {
    res.status(400).json()
  } else {
    res.status(500).json()
  }
}
