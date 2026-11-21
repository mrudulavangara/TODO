
import React from 'react';

function TaskStats({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  return (
    <div className="task-stats">
      <div>
        <h2>{total}</h2>
        <p>Total Tasks</p>
      </div>

      <div>
        <h2>{completed}</h2>
        <p>Completed</p>
      </div>

      <div>
        <h2>{pending}</h2>
        <p>Pending</p>
      </div>
    </div>
  );
}

export default TaskStats;
