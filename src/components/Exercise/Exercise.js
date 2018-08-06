import React from 'react';
import Tag from 'Tag/Tag';

const Exercise = (props) => {
  return (
    <div className="Exercise">
      <h3>{props.exercise.name}</h3>
      {props.exercise.tags.map((tag) => <Tag key={tag.name} name={tag.name} />)}
    </div>
  );
}

export default Exercise;
