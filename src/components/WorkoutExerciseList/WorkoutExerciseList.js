import React from 'react';
import WorkoutExerciseElement from 'WorkoutExerciseElement/WorkoutExerciseElement'

const WorkoutExerciseList = (props) => {
  return (
    <div className="WorkoutExerciseList">
      <h3>Exercises</h3>
      <ul>
        {props.workout_exercises.map((workout_exercise) =>
          <WorkoutExerciseElement key={workout_exercise.id} workout_exercise={workout_exercise} />
        )}
      </ul>
    </div>
  );
}

WorkoutExerciseList.defaultProps = {
  workout_exercises: []
}

export default WorkoutExerciseList;
