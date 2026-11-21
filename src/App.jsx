import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false
    };

    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="app">
      <div className="todo-container">
        <h1>My Todo List</h1>
        <p className="subtitle">
          Organize your day, one task at a time.
        </p>

        <TaskStats tasks={tasks} />

        <TaskInput onAddTask={addTask} />

        <h2 className="section-title">My Tasks</h2>

        <TaskList
          tasks={tasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;