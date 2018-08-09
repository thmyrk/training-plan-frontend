import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import api from 'api'

class ExerciseCreator extends Component  {
  componentDidMount() {
    api.post('/exercises/', {
      id: uuidv4()
      name: this.props.exercise.name
    }).then((response) => {
      this.setState({ workout: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
  }
}

export default WorkoutProvider;
