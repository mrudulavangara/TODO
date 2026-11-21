
import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') return;

    onAddTask(task);
    setTask('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What needs to be done?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button type="submit">+ Add Task</button>
    </form>
  );
}

export default TaskInput;
