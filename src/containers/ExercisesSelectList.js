import React from 'react'

class ExercisesSelectList extends React.Component  {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()

    const newValue = event.target.value
    this.props.handleSelectChange(newValue)
  }

  render() {
    return (
      <div className="ExerciseSelectList">
        <select value={this.props.exercise_id} onChange={this.handleChange}>
          {this.props.exercises.map(exercise => {
            return <option key={exercise.id} value={exercise.id}>{exercise.name}</option>
          })}
        </select>
      </div>
    )
  }
}

ExercisesSelectList.defaultProps = {
  exercises: []
}

export default ExercisesSelectList;
