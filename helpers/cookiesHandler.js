import cookie from 'cookie'

const parseCookies = (biscuit = '') => {
  return cookie.parse(biscuit)
}

const verifyCookie = (biscuit) => {
  return Object.keys(biscuit).includes('session_login')
}

export default function handleCookie (biscuit) {
  const parsedCookie = parseCookies(biscuit)

  if (verifyCookie(parsedCookie)) {
    return parsedCookie
  }

  return null
}
