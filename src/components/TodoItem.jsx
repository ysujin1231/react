import React from "react";
import deleteIcon from '../images/delete.png';


function TodoItem(props) {
  const handleDelete = () => {
    if (props.onDelete) {
      props.onDelete(props.index);
    }
  };

  return (
    <div className="todo-item">
      <p style={{ fontFamily: 'Montserrat, sans-serif' }}>{props.item}</p>
        <img src = {deleteIcon} alt="deleteIcon" onClick={handleDelete} className="deleteIcon"/>
    </div>
  );
}

export default TodoItem;
