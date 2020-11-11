import React, {useContext, useEffect} from 'react';
import axios from 'axios';

import { AppContext } from '../App';
import { APP_ACTIONS } from '../reducers/app';
import TodoItem from './TodoItem';


const TodoList = () => {

    const app_context = useContext(AppContext);

    console.log("An item: ",app_context.state.todoList[0])

    const todoListStyles = {
    }

    /* TODO:    1. Implement a useEffect to fetch all the todoItems from the backend
                2. Save the response data (todoList) from the backend as a global state
    **/

    useEffect(()=> {
        axios.get('/api/tasks/')
            .then(response=> app_context.dispatchState({type: APP_ACTIONS.GET_TODO_ITEMS, todoList:response.data}))
            .catch(error=> console.log(error.response))
    }, [])

    return (
        <div style={todoListStyles}>
            {
                app_context.state.todoList.map(todoItem=> (
                    <TodoItem key={todoItem.id} {...todoItem} />
                ))
            }
        </div>
    )
}


export default TodoList;