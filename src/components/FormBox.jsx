import React, { useState } from 'react';
import Card from './shared/Card';

const FormBox = ({ setTask, task, input, setInput, feedbackEdit, updateFeedback }) => {
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Item = {
      id: Date.now(),
      text: input,
      isDone: false,
      isEdit: false,
    };
    if (input === '') {
      window.alert('Input Field is empty');
    }
    if (feedbackEdit.edit === true) {
      updateFeedback(feedbackEdit.item.id, Item);
      setInput('');
      console.log('working');
    } else {
      console.log('working');

      setTask([...task, Item]);
      setInput('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input type='text' placeholder='Write task' onChange={handleChange} value={input} />
          <button className='btn'> Go</button>
        </div>
      </form>
    </Card>
  );
};

export default FormBox;
