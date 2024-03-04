import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props) {
    return (
        <div className="todo-list">
            {props.todoList.map((item, index) => (
                <TodoItem 
                    key={index} 
                    item={item} 
                    index={index} 
                    onDelete={props.onDelete} 
                    onEdit={props.onEdit}
                />
            ))}
        </div>
    )
}

export default TodoBoard;
