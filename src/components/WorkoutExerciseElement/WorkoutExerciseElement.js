import React from 'react';
import Exercise from 'Exercise/Exercise'

const WorkoutExerciseElement = (props) => {
  return (
    <li className="WorkoutExerciseElement" key={props.workoutExercise.exercise.name}>
      <Exercise exercise={props.workoutExercise.exercise} />
      {props.workoutExercise.sets} x {props.workoutExercise.reps}
      <button onClick={props.handleWorkoutExerciseRemove}>Remove this exercise</button>
      <button>Edit this exercise</button>
    </li>
  );
}

export default WorkoutExerciseElement;
