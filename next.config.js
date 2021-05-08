const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const isProd = phase === PHASE_PRODUCTION_BUILD

  const env = {
    TEST_API_URL: (() => {
      if (isDev) return 'http://localhost:8080/api/'
      if (isProd) return 'https://api-patronage21.herokuapp.com/api/'
      return 'http://localhost:8080/api/'
    })()
  }

  return {
    env
  }
}
