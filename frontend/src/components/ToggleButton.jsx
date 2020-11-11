import React, { useContext } from 'react';

import {AppContext} from '../App';

import {APP_ACTIONS} from '../reducers/app';


const ToggleButton = () => {

    const app_context = useContext(AppContext)

    const toggleStyles = {
        display: "inline-flex",
        alignItems: "center"
    }

    const toggleContainerStyles = {
        marginLeft: 15,
        position: "relative",
        display: "inline-block",
        width: 65,
        height: 30,
        background: "var(--toggle-dark)",
        borderRadius: 15,
    }

    const toggleBallStyles =  {
        position: "absolute",
        width: 26,
        height: 26,
        top: 2,
        left: app_context.state.dark_theme ? 36 : 4,
        backgroundColor: app_context.state.dark_theme ? "var(--very-dark-blue-top)" : "var(--white)",
        borderRadius: "50%",
        transition: "all 0.2s ease-out"
      }

    const toggleDarkMode = e => {
        app_context.dispatchState({type: APP_ACTIONS.TOGGLE_THEME, theme: !app_context.state.dark_theme })
    }

    return (
        <p style={toggleStyles} onClick={toggleDarkMode}>
            Dark Mode <span style={toggleContainerStyles}><span style={toggleBallStyles}></span></span>
        </p>
    )
}


export default ToggleButton;