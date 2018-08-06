import React from 'react';
import WorkoutTopBar from 'WorkoutTopBar/WorkoutTopBar'
import WorkoutExerciseList from 'WorkoutExerciseList/WorkoutExerciseList'

const Workout = (props) => {
  return (
    <div className="Workout">
      <WorkoutTopBar name={props.workout.name} />
      <WorkoutExerciseList workout_exercises={props.workout.workout_exercises} />
    </div>
  );
}

export default Workout;
