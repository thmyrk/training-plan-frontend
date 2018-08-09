import React from 'react';
import WorkoutExerciseElement from 'WorkoutExerciseElement/WorkoutExerciseElement'

const WorkoutExerciseList = (props) => {
  return (
    <div className="WorkoutExerciseList">
      <ul>
        {props.workoutExercises.map((workoutExercise) =>
          <WorkoutExerciseElement key={workoutExercise.id} workoutExercise={workoutExercise}
          handleWorkoutExerciseRemove={props.handleWorkoutExerciseRemove} />
        )}
      </ul>
    </div>
  );
}

WorkoutExerciseList.defaultProps = {
  workoutExercises: []
}

export default WorkoutExerciseList;
