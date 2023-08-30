import React from 'react';
import { useDispatch } from 'react-redux';
import { List, Checkbox, Button, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useTodos } from '../hooks/useTodos';

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  const { toggleTodo, deleteTodo } = useTodos();

  const handleToggle =  () => {
     toggleTodo(props.todoItem.id, props.todoItem);
  };

  const handleDelete =  () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (isConfirmed) {
      deleteTodo(props.todoItem.id);
    }
  };

  return (
    <List.Item
      actions={[
        <Checkbox checked={props.todoItem.done} onChange={handleToggle}>
          Done
        </Checkbox>,
        <Popconfirm
          title="Are you sure you want to delete this item?"
          onConfirm={handleDelete}
        >
          <Button type="danger" icon={<DeleteOutlined />} />
        </Popconfirm>,
      ]}
    >
      <span className={props.todoItem.done ? 'done' : ''}>
        {props.todoItem.text}
      </span>
    </List.Item>
  );
};

export default ToDoItem;
