import React, {useContext} from 'react';
import axios from 'axios';

import {APP_ACTIONS } from '../reducers/app';
import { AppContext } from '../App';


const TodoItem = props => {

    const app_context = useContext(AppContext);

    const todoItemStyles = {
        transition: "all 0.2s ease-in-out",
        width: "100%",
        margin: "25px auto",
        padding: "2rem",
        borderTop: "5px solid var(--border-top)",
        borderBottomRightRadius: 40,
        backgroundColor: app_context.state.dark_theme ? "var(--dark-desaturated-blue)" : "var(--light-grayish-blue)",
    }

    const taskStyle = {
        fontSize: 24
    }

    const checkBoxStyle = {
        width: 20,
        height: 20,
        marginRight: 35
    }


    const updateTodo = e => {
        app_context.dispatchState({type: APP_ACTIONS.SET_LOADING, loading: false})
        axios.put(`/api/tasks/${props._id}`, {completed: !props.completed})
        .then(response=> {
            app_context.dispatchState({type: APP_ACTIONS.UPDATE_TODO_ITEM, todoItem: response.data})
            app_context.dispatchState({type: APP_ACTIONS.SET_LOADING, loading: false})
        })
        .catch(error=> console.log(error.response))
    }


    return (
        <div className="shadow" style={todoItemStyles}>
            <p style={taskStyle}><input onChange={updateTodo} checked={props.completed} style={checkBoxStyle} type="checkbox" /> 
                {
                    props.completed ? (<strike>{props.name}</strike>) : props.name
                } 
            </p>
        </div>
    )
}


export default TodoItem;