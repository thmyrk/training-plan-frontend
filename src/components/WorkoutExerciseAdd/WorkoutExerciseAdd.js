import React from 'react';
import WorkoutExerciseAddPanel from 'WorkoutExerciseAddPanel/WorkoutExerciseAddPanel'

class WorkoutExerciseAdd extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showAddExercise: false }

    this.toggleShowAddExercise = this.toggleShowAddExercise.bind(this)
  }

  toggleShowAddExercise() {
    this.setState(prevState => ({
      showAddExercise: !prevState.showAddExercise
    }))
  }

  render() {
    return (
      <div className="WorkoutExerciseAdd">
        <button onClick={this.toggleShowAddExercise}>Add new exercise</button>
        {this.state.showAddExercise &&
          <WorkoutExerciseAddPanel workout_id={this.props.workout_id} handleWorkoutExerciseNew={this.props.handleWorkoutExerciseNew} /> }
      </div>
    )
  }
}

export default WorkoutExerciseAdd;
