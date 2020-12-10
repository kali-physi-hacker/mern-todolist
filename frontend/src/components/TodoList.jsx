import React, {useContext, useEffect} from 'react';
import axios from 'axios';

import { AppContext } from '../App';
import { APP_ACTIONS } from '../reducers/app';
import TodoItem from './TodoItem';
import Loader from './Loader';


const TodoList = () => {

    const app_context = useContext(AppContext);

    const todoListStyles = {
    }

    useEffect(()=> {
        axios.get("/api/todos")
        .then(response=> {
            app_context.dispatchState({type: APP_ACTIONS.GET_TODO_ITEMS, todoList: response.data})
        })
        .catch(error=> {
            console.log(error)
        })
    }, [])

    return (
        <div style={todoListStyles}>
            {
                app_context.state.loading ? <Loader /> :
                app_context.state.todoList.length === 0 ? <h2 style={{textAlign: "center"}}>Yay have no tasks 😑</h2> :
                app_context.state.todoList.map(todoItem=> (
                    <TodoItem key={todoItem._id} {...todoItem} />
                ))
            }
        </div>
    )
}


export default TodoList;