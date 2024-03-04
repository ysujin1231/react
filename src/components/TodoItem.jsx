import React, {useState} from "react";
import deleteIcon from '../images/delete.png';
import editIcon from '../images/edit.png';
import saveIcon from '../images/check_circle.png';



function TodoItem(props) {
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(props.item);

  const handleDelete = () => {
      if (props.onDelete) {
          props.onDelete(props.index);
      }
  };

  const handleEdit = () => {
      setEditMode(true); 
  };

  const handleSave = () => {
      setEditMode(false); 
      props.onEdit(props.index, editValue);
  };

  const handleInputChange = (e) => {
      setEditValue(e.target.value);
  };

  return (
      <div className="todo-item">
          <input 
              type="text" 
              value={editValue} 
              readOnly={!editMode}
              onChange={handleInputChange} 
              style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: editMode ? 'white' : 'transparent',
              }}
          />
          <div className="btnArea">
              {!editMode ? (
                  <button onClick={handleEdit} className="editBtn"><img src={editIcon} alt="editIcon"/></button>
              ) : (
                  <button onClick={handleSave} className="saveBtn"><img src={saveIcon} alt="saveIcon"/></button>
              )}
              <button onClick={handleDelete} className="delBtn"><img src={deleteIcon} alt="deleteIcon"/></button>
          </div>
      </div>
  );
}

export default TodoItem;
