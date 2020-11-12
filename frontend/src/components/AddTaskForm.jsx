import React, {useContext, useState} from 'react';
import axios from 'axios';

import { AppContext } from '../App';
import {APP_ACTIONS} from '../reducers/app';


const AddTaskInputForm = () => {

    const [name, setName] = useState("");

    const app_context = useContext(AppContext);

    const addInputStyle = {
        margin: "6rem 0rem",
        height: 55,
        border: "none",
        outline: "none",
        padding: "5px 12px",
        fontSize: 24,
        width: "100%",
        backgroundColor: app_context.state.dark_theme ? "var(--dark-desaturated-blue)" : "var(--white)",
        color: app_context.state.dark_theme ? "var(--white)" : "var(--dark-grayish-blue)"
    }

    const addTodoItem = e => {
        e.preventDefault();
        app_context.dispatchState({type: APP_ACTIONS.SET_LOADING, loading: true})
        const todoItem = {name: name}
        axios.post('/api/tasks/', todoItem)
        .then(response=> {
            app_context.dispatchState({type: APP_ACTIONS.ADD_TODO_ITEM, todoItem: response.data})
            app_context.dispatchState({type: APP_ACTIONS.SET_LOADING, loading: false})
        })
        .catch(error=> console.log(error.response))
        
        setName("")
    }

    return (
        <form onSubmit={addTodoItem}>
            <input value={name} onChange={e=> setName(e.target.value)} className="shadow" style={addInputStyle} type="text" />
        </form>
    )
}


export default AddTaskInputForm;