import React, { useState } from 'react';
import { List, Checkbox, Button, Popconfirm, Modal, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTodos } from '../hooks/useTodos';

const ToDoItem = (props) => {
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => {
    toggleTodo(props.todoItem.id, props.todoItem);
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      'Are you sure you want to delete this item?'
    );
    if (isConfirmed) {
      deleteTodo(props.todoItem.id);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleUpdate = () => {
    const update = updateTodo(props.todoItem.id, props.todoItem);
    console.log(update);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <List.Item
      className={props.todoItem.done ? 'todo-item done' : 'todo-item'}
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
        <Button type="primary" onClick={showModal} icon={<EditOutlined />} />,
      ]}
    >
      <span className={props.todoItem.done ? 'text-done' : ''}>
        {props.todoItem.text}
      </span>
      <Modal
        title="Edit Todo Item"
        visible={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleCancel}
      >
        <Input defaultValue={props.todoItem.text} />
      </Modal>
    </List.Item>
  );
};

export default ToDoItem;
