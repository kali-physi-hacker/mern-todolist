import React, {useReducer} from 'react';

import {reducer, initialAppState} from './reducers/app';
import ToggleButton from './components/ToggleButton';
import AddTaskInputForm from './components/AddTaskForm';

import './App.css';
import TodoList from './components/TodoList';


export const AppContext = React.createContext();

const App = () => {

  const [state, dispatchState] = useReducer(reducer, initialAppState);


  const mainStyles = {
    backgroundColor: state.dark_theme ? "var(--very-dark-blue)" : "var(--white-bg)"
  }

  const topStyles = {
    backgroundColor: state.dark_theme ? "var(--very-dark-blue-top)" : "var(--very-pale-blue-top)"
  }

  const appStyles = {
    color: state.dark_theme ? "var(--white)" : "var(--dark-grayish-blue)"
  }

  return (
    <div style={mainStyles} id="main">
      <AppContext.Provider value={{state: state, dispatchState: dispatchState}}>
        <div style={topStyles} className="top-pattern"></div>
        <div style={appStyles} className="app">
          <div className="top">
            <div className="left">
              <h1>Kali Todo List</h1>
              <span>Create tasks and complete easily</span>
            </div>
            <ToggleButton />
          </div> 
          <AddTaskInputForm />
          <TodoList />
        </div>
      </AppContext.Provider>
    </div>
  )
}

export default App;
