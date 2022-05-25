import React from 'react';

const List = ({ item }) => {
  return item.isDone ? <s>{item.text}</s> : <li>{item.text} </li>;
};

export default List;
