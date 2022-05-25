import { useState } from 'react';
import './App.css';
import FormBox from './components/FormBox';
import data from './components/shared/data';
import Result from './components/Result';
import Header from './components/Header';

function App() {
  const [task, setTask] = useState(data);
  const [input, setInput] = useState('');
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const handleDelete = (id) => {
    console.log('working');
    if (!!id) {
      const newTask = task.filter((item) => item.id !== id);
      setTask(newTask);
    }
  };

  const handleSubmit = (item) => {
    if (item !== '') {
      const newItem = {
        id: new Date.now(),
        text: item,
      };

      setTask(...task, ...newItem);
    }
  };

  const handleEdit = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, upitem) => {
    setTask(task.map((item) => (item.id === id ? { ...item, ...upitem } : item)));
  };

  return (
    <div className='container'>
      <Header />
      <FormBox
        task={task}
        setTask={setTask}
        input={input}
        setInput={setInput}
        feedbackEdit={feedbackEdit}
        updateFeedback={updateFeedback}
      />
      <Result
        task={task}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        setTask={setTask}
        setInput={setInput}
        handleEdit={handleEdit}
        feedbackEdit={feedbackEdit}
      />
    </div>
  );
}

export default App;
