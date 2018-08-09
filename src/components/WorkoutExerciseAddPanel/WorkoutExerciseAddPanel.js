import React from 'react';
import ExercisesSelectList from 'ExercisesSelectList'
import { exercisesFetch } from 'api/ExercisesFetch'
import { workoutExerciseCreate } from 'api/WorkoutExerciseApi'

class WorkoutExerciseAddPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise_id: "",
      exercises: [],
      reps: "",
      sets: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.addWorkoutExercise = this.addWorkoutExercise.bind(this);
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSelectChange(exercise_id) {
    this.setState({ exercise_id: exercise_id })
  }

  addWorkoutExercise(e) {
    e.preventDefault()
    const exercise = {
      workout_id: this.props.workout_id,
      exercise_id: this.state.exercise_id,
      reps: this.state.reps,
      sets: this.state.sets
    }

    workoutExerciseCreate(exercise).then(response => {
      this.props.handleWorkoutExerciseNew(response.data)
      this.setState({
        reps: "",
        sets: ""
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  componentDidMount() {
    exercisesFetch().then(exercises => {
      this.setState({
        exercises: exercises,
        exercise_id: exercises[0].id
      })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="WorkoutExerciseAddPanel">
        <form onSubmit={this.addWorkoutExercise}>
          <ExercisesSelectList exercises={this.state.exercises} exercise_id={this.state.exercise_id} handleSelectChange={this.handleSelectChange} />
          <div className="WorkoutExerciseInputFields">
            <input name="reps" value={this.state.reps} placeholder="reps" onChange={this.handleInputChange} />
            <input name="sets" value={this.state.sets} placeholder="sets" onChange={this.handleInputChange} />
          </div>
          <button type="submit">Add exercise</button>
        </form>
      </div>
    )
  }
}

export default WorkoutExerciseAddPanel;
