import React, { useState } from 'react';
import logo from './logo.svg';
import logo1 from './logo1.png';
import Booklist from './Booklist';

const App = () => {
  const [text, setText] = useState('Hello World');
  const [c, setColor] = useState('black');
  const [i, setImage] = useState(logo);
  const [l, setLargestInfo] = useState('');

  const [calcInput, setCalcInput] = useState('');
  const [calcResult, setCalcResult] = useState('');

  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const f1 = () => {
    setText('Hello Dharanya');
  };

  const f2 = () => {
    setColor('red');
  };

  const f3 = () => {
    setImage(logo1);
  };

  const n = [10, 45, 2, 67, 33, 98, 23];
  const lg = Math.max(...n);

  const f4 = () => {
    setLargestInfo(`Array = [${n.join(', ')}], Largest number: ${lg}`);
  };

  // Calculator functions
  const handleCalcInput = (val) => {
    setCalcInput(calcInput + val);
  };

  const handleCalcClear = () => {
    setCalcInput('');
    setCalcResult('');
  };

  const handleCalcEvaluate = () => {
    try {
      setCalcResult(eval(calcInput));
    } catch {
      alert('Invalid Expression');
    }
  };

  // To-Do functions
  const addTask = () => {
    if (taskInput.trim() === '') return;
    setTasks([...tasks, taskInput.trim()]);
    setTaskInput('');
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div style={{ fontFamily: 'Arial', padding: '20px' }}>
      <h1 style={{ color: c }}>{text}</h1>
      <img src={i} alt="logo" style={{ width: '200px', height: '200px' }} />
      <p>{l}</p>
      <button onClick={f1}>Change text</button>
      <button onClick={f2}>Change Color</button>
      <button onClick={f3}>Change Image</button>
      <button onClick={f4}>Get Large</button>

      <hr />

      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={calcInput}
        readOnly
        style={{ width: '200px', fontSize: '20px', textAlign: 'right' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => handleCalcInput('1')}>1</button>
        <button onClick={() => handleCalcInput('2')}>2</button>
        <button onClick={() => handleCalcInput('3')}>3</button>
        <button onClick={() => handleCalcInput('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleCalcInput('4')}>4</button>
        <button onClick={() => handleCalcInput('5')}>5</button>
        <button onClick={() => handleCalcInput('6')}>6</button>
        <button onClick={() => handleCalcInput('-')}>-</button>
      </div>
      <div>
        <button onClick={() => handleCalcInput('7')}>7</button>
        <button onClick={() => handleCalcInput('8')}>8</button>
        <button onClick={() => handleCalcInput('9')}>9</button>
        <button onClick={() => handleCalcInput('*')}>*</button>
      </div>
      <div>
        <button onClick={() => handleCalcInput('0')}>0</button>
        <button onClick={() => handleCalcInput('.')}>.</button>
        <button onClick={() => handleCalcEvaluate()}>=</button>
        <button onClick={() => handleCalcInput('/')}>/</button>
      </div>
      <button onClick={handleCalcClear}>Clear</button>
      <p>Result: {calcResult}</p>

      <hr />

      <h2>To-Do List</h2>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}{' '}
            <button onClick={() => removeTask(index)} style={{ marginLeft: '10px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

    </div>
  );
};

export default App;
