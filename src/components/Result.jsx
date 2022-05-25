import React from 'react';
import Card from './shared/Card';
import List from './List';
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { MdVerified } from 'react-icons/md';
import { useEffect } from 'react';

const Result = ({ task, handleDelete, setTask, setInput, feedbackEdit, handleEdit }) => {
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setInput(feedbackEdit.item.text);
    }
  }, [feedbackEdit]);
  const handleIsDone = (id) => {
    setTask(task.map((item) => (item.id === id ? { ...item, isDone: !item.isDone } : item)));
  };

  return (
    <div>
      {task.map((item) => (
        <Card key={item.id}>
          <div className='list'>
            <List key={item.id} item={item} />
            <div className='button'>
              <button className='btn-icon' onClick={() => handleEdit(item)}>
                <AiFillEdit />
              </button>
              <button className='btn-icon' onClick={() => handleDelete(item.id)}>
                <AiFillDelete />
              </button>
              <button className='btn-icon' onClick={() => handleIsDone(item.id)}>
                <MdVerified />
              </button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Result;
