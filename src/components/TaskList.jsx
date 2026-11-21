
import React from 'react';

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="empty-message">
          No tasks yet. Add your first task! ✨
        </p>
      ) : (
        tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <label className={task.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              {task.text}
            </label>

            <button
              className="delete-btn"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
