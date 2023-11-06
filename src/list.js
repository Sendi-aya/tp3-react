import React, { useState } from 'react';
import './liststyle.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, isDone: false }]);
      setTask('');
    }
  };

  const handleToggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isDone = !updatedTasks[index].isDone;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className='fv'>
      <h1 > To-Do List</h1>
        <br/>
      <input 
        type="text"
        placeholder="Ajouter une tâche pour réaliser"
        value={task}
        onChange={handleInputChange}
      />
      <button className='ajt' onClick={handleAddTask}>Ajouter</button>
      <div className='dv'>
      <table>
        {tasks.map((task, index) => (
        <tr>
          <td key={index}>
              <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
                {task.text}
              </span>
          </td>
          <td>
          <button className="add" onClick={() => handleToggleTask(index)}>
              {task.isDone ? "commencé" : 'Terminé'}
            </button>
          </td>
          <td>
          <button className="del" onClick={() => handleDeleteTask(index)}>Supprimer</button>
          </td>
        </tr>
        ))}

      </table>
      </div>

    </div>
  );
}

export default App;
