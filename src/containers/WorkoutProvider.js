import React, { Component } from 'react'
import Workout from 'Workout/Workout'
import api from 'api'

class WorkoutProvider extends Component  {
  constructor(props) {
    super(props)
    this.state = { workout: {} }
  }

  componentDidMount() {
    api.get('/workouts/93dc0eca-9d82-423f-aec8-0e36cd51517e').then((response) => {
      this.setState({ workout: response.data })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    return <Workout workout={this.state.workout} />
  }
}

export default WorkoutProvider;
