import React from 'react';

const WorkoutTopBar = (props) => {
  return (
    <div className="WorkoutTopBar">
      <h3>{props.name}</h3>
      <a>Remove this workout</a>
    </div>
  );
}

export default WorkoutTopBar;
