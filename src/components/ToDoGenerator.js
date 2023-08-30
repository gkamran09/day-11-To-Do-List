import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './toDoSlice';

const ToDoGenerator = () => {
    const [itemInput, setItemInput] = useState("");
    const dispatch = useDispatch();

    const onItemChange = (event) => {
        setItemInput(event.target.value);
    };

    const addItem = () => {
        if (isValidInput()) {
            dispatch(
                addTodo({
                    id: Date.now().toString(),
                    text: itemInput,
                    done: false,
                })
            );
            setItemInput("");
        } else {
            alert("Please enter a text");
        }
    };

    const isValidInput = () => {
        return itemInput.trim() !== "";
    };

    return (
        <div>
            <input
                type="text"
                value={itemInput}
                onChange={onItemChange}
                className="item-input"
                placeholder="What are you going to do today?"
                id="itemInput"
            />
            <button onClick={addItem} className="add-button">
                Add
            </button>
        </div>
    );
};

export default ToDoGenerator;
