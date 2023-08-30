import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { List, Checkbox, Button, Popconfirm, Modal, Input } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { useTodos } from '../hooks/useTodos';

const ToDoItem = (props) => {
  const dispatch = useDispatch();
  const { toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState(props.todoItem.text);

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

  const handleUpdate = async () => {
    const updatedItem = {
      ...props.todoItem,
      text: inputValue,
    };

    try {
      await updateTodo(props.todoItem.id, updatedItem);
      setIsModalOpen(false);
    } catch (error) {
 
      console.error('Error updating todo item:', error);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
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
        <Button type="primary" onClick={showModal} icon={<EditOutlined />} />,
      ]}
    >
      <span className={props.todoItem.done ? 'done' : ''}>
        {props.todoItem.text}
      </span>
      <Modal
        title="Edit Todo Item"
        visible={isModalOpen}
        onOk={handleUpdate}
        onCancel={handleCancel}
      >
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      </Modal>
    </List.Item>
  );
};

export default ToDoItem;
