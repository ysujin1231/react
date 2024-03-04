import React from "react";
import TodoItem from "./TodoItem"; // Correct import statement

function TodoBoard(props) {
    return (
        <div className="input-container">
            {props.todoList.map((item, index) => ( // added index for deletion
                <TodoItem 
                    key={index} // added key prop
                    item={item} 
                    index={index} // added index prop
                    onDelete={props.onDelete} // pass onDelete function
                />
            ))}
        </div>
    )
}

export default TodoBoard;
