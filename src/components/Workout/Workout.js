import React from 'react';
import WorkoutTopBar from 'WorkoutTopBar/WorkoutTopBar'
import WorkoutExerciseList from 'WorkoutExerciseList/WorkoutExerciseList'
import WorkoutExerciseAdd from 'WorkoutExerciseAdd/WorkoutExerciseAdd'
import { workoutFetch } from 'api/WorkoutFetch'

class Workout extends React.Component  {
  constructor(props) {
    super(props)

    this.state = {
      workout: { workoutExercises: [] }
    }

    this.handleWorkoutExerciseNew = this.handleWorkoutExerciseNew.bind(this)
  }

  handleWorkoutExerciseNew(workoutExercise) {
    this.setState(prevState => ({
      workout: {
        ...prevState.workout,
        workout_exercises: [...prevState.workout.workout_exercises, workoutExercise]
      }
    }))
  }

  handleWorkoutExerciseRemove(workoutExerciseId) {
  }

  componentDidMount() {
    workoutFetch().then(response => {
      this.setState({
        workout: response.data
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="Workout">
        <WorkoutTopBar name={this.state.workout.name} />
        <WorkoutExerciseList workoutExercises={this.state.workout.workout_exercises} handleWorkoutExerciseRemove={this.handleWorkoutExerciseRemove} />
        <WorkoutExerciseAdd workout_id={this.state.workout.id} handleWorkoutExerciseNew={this.handleWorkoutExerciseNew} />
      </div>
    )
  }
}

export default Workout;
