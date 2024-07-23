import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({ name: '', description: '' });
  const [errors, setErrors] = useState({ name: '', description: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!task.name) newErrors.name = 'Task name is required';
    if (!task.description) newErrors.description = 'Task description is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addTask(task);
      setTask({ name: '', description: '' });
      setErrors({ name: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name</label>
        <input
          type="text"
          name="name"
          value={task.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label>Task Description</label>
        <input
          type="text"
          name="description"
          value={task.description}
          onChange={handleChange}
        />
        {errors.description && <p>{errors.description}</p>}
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;