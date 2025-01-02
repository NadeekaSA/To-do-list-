import React, { useState } from 'react';

function App() {
  const [name, setName] = useState(''); // State to hold the user's name
  const [submittedName, setSubmittedName] = useState(''); // State to track if the name is submitted
  const [tasks, setTasks] = useState([]); // State to hold tasks
  const [input, setInput] = useState(''); // State to hold input value
  const [error, setError] = useState(''); // State to hold error message

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]); // Add task if input is valid
      setInput(''); // Clear input field
      setError(''); // Clear error
    } else {
      setError('Please enter a task!'); // Set error message
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove task by index
  };

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(name); // Set the submitted name
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {!submittedName ? (
        // Input form for the user's name
        <form onSubmit={handleNameSubmit}>
          <h1>Welcome to the To-Do List App!</h1>
          <label htmlFor="name">Enter Your Name :  </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
            style={{ padding: '5px', width: '200px', marginRight: '10px' }}
          />
          <button type="submit" style={{ padding: '5px 10px' }}>Submit</button>
        </form>
      ) : (
        // Main To-Do List functionality
        <div>
          <h1>Welcome, {submittedName}!</h1>
          <h2>Simple React To-Do List</h2>
          <input
            type="text"
            placeholder="Enter a task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ padding: '5px', width: '200px', marginRight: '10px' }}
          />
          <button onClick={addTask} style={{ padding: '5px 10px' }}>Add Task</button>
          {error && <p style={{ color: 'yellow', marginTop: '10px' }}>{error}</p>} {/* Display error message */}
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {tasks.map((task, index) => (
              <li key={index} style={{ margin: '10px 0' }}>
                {task}
                <button
                  onClick={() => removeTask(index)}
                  style={{ marginLeft: '10px', color: 'yellow' }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
