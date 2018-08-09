import uuidv4 from 'uuid/v4'
import api from 'api/api'

function workoutExerciseCreate(workout_exercise) {
  return api.post('/workout_exercises/', {
    id: uuidv4(),
    workout_id: workout_exercise.workout_id,
    exercise_id: workout_exercise.exercise_id,
    sets: workout_exercise.sets,
    reps: workout_exercise.reps
  }).then((response) => {
    return response
  }).catch((error) => {
    throw new Error(error.response ? error.response.data.errors : error.message)
  })
}

function workoutExerciseDelete(workout_exercise) {
  return api.post('/workout_exercises/', {
    id: uuidv4(),
    workout_id: workout_exercise.workout_id,
    exercise_id: workout_exercise.exercise_id,
    sets: workout_exercise.sets,
    reps: workout_exercise.reps
  }).then((response) => {
    return response
  }).catch((error) => {
    throw new Error(error.response ? error.response.data.errors : error.message)
  })
}

export { workoutExerciseCreate, workoutExerciseDelete }
