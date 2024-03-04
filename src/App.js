import React, { useState } from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';
import addIcon from './images/add_circle.png';


function App() {

  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    if (inputValue.trim() !== '') { // Check if input value is not empty or whitespace
      setTodoList([...todoList, inputValue]);
      setInputValue(''); // Clear input field after adding
    }
  };

  const deleteItem = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList.splice(index, 1); // Remove item at the given index
    setTodoList(updatedTodoList);
  };

  return (
    <main>
      <h1 style={{ fontFamily: 'Montserrat, sans-serif' }}>TODO LIST</h1>
      <div className="input-container">
      <div>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)} />
      </div>
      <div>
        <img src = {addIcon} alt='addIcon' onClick={addItem} className='addIcon'/>
      </div>
      <TodoBoard todoList={todoList} onDelete={deleteItem} />
      </div>
    </main>
  );
}

export default App;
