export const APP_ACTIONS = {
    TOGGLE_THEME: "TOGGLE_THEME",
    ADD_TODO_ITEM: "ADD_TODO_ITEM",
    GET_TODO_ITEMS: "GET_TODO_ITEMS",
    UPDATE_TODO_ITEM: "UPDATE_TODO_ITEM",
    SET_LOADING: "SET_LOADING"
}


export const THEME = {
    DARK: 0,
    LIGHT: 1
}

export const initialAppState = {
    dark_theme: false,
    todoList: [],
    loading: false
}


export const reducer = (state, action) => {
    switch (action.type) {
        case APP_ACTIONS.TOGGLE_THEME:
            return {
                ...state,
                dark_theme: action.theme
            }
        case APP_ACTIONS.GET_TODO_ITEMS:
            return {
                ...state,
                todoList: action.todoList
            }
        case APP_ACTIONS.ADD_TODO_ITEM:
            return {
                ...state,
                todoList: [...state.todoList, action.todoItem]
            }
        case APP_ACTIONS.UPDATE_TODO_ITEM:
            const todoList = state.todoList.filter(todoItem=> todoItem._id !== action.todoItem._id);
            return {
                ...state,
                todoList: [...todoList, action.todoItem]
            }
        case APP_ACTIONS.SET_LOADING:
            return {
                ...state,
                loading: action.loading
            }

        default:
            return initialAppState;
    }
}