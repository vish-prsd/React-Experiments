import React,{useState} from 'react';

function TodoList(){

  const [tasks,setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask( e.target.value );
  }
  
  const addTask = () => {
    if(newTask.trim() !== ''){
      setTasks((t) => [...t,newTask])
      setNewTask('');
    }
    
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
    console.log('Delete Task');
  }

  const moveTaskUp = (index) => {
    const moveUp = [...tasks];
    if(index>0){
      [moveUp[index], moveUp[index-1]] = [moveUp[index-1], moveUp[index]]
    }
    setTasks(moveUp);
  }

  const moveTaskDown = (index) => {
    const moveDown = [...tasks];
    if(index<moveDown.length-1){
      [moveDown[index], moveDown[index+1]] = [moveDown[index+1], moveDown[index]]
    }
    setTasks(moveDown);
  }

  return(
    <div className='to-do-list'>
      <h1>To-Do-List</h1>
      
      <div>
        <input 
        type="text" 
        placeholder='Enter a task...'
        value={newTask} 
        onChange={handleInputChange}/>

        <button 
        className='add-button'
        onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task,index) => 
        <li key = {index}>
          <span className='text'>{task}</span>

          <button 
          className='delete-task'
          onClick={() => deleteTask(index)}>
            Delete
          </button>

          <button 
          className = 'move-task' 
          onClick={() => moveTaskUp(index)}>
            ⬆︎
          </button>

          <button 
          className = 'move-task' 
          onClick={() => moveTaskDown(index)}>
            ⬇︎
          </button>
        </li>)}
      </ol>
    </div>
  );

}

export default TodoList;