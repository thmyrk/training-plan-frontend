import React from 'react';
import Exercise from 'Exercise/Exercise'

const WorkoutExerciseElement = (props) => {
  return (
    <li className="WorkoutExerciseElement" key={props.workout_exercise.exercise.name}>
      <Exercise exercise={props.workout_exercise.exercise} />
      {props.workout_exercise.sets} x {props.workout_exercise.reps}
    </li>
  );
}

export default WorkoutExerciseElement;
