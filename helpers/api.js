const Frisbee = require('frisbee')

export const API = new Frisbee({
  baseURI: process.env.TEST_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'cors'
})
