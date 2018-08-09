import api from 'api/api'

function workoutFetch() {
  return api.get('/workouts/93dc0eca-9d82-423f-aec8-0e36cd51517e').then((response) => {
    return response
  }).catch((error) => {
    throw new Error(error.response ? error.response.data.errors : error.message)
  })
}

export { workoutFetch }
