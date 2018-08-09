import api from 'api/api'

function exercisesFetch() {
  return api.get('/exercises/').then((response) => {
    return response.data
  }).catch((error) => {
    throw new Error(error.response ? error.response.data.errors : error.message)
  })
}

export { exercisesFetch }
