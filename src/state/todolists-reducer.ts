import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const TodolistsReducer = (state: TodolistType[], action: tsarType): TodolistType[] => {
    switch (action.type) {
        case "REMOVE-TODOLIST": {
            return state.filter(el => el.id !== action.payload.todolistId1)
        }
        case "ADD-TODOLIST":{
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.newTodolistTitle, filter: 'all'};
            return [...state,newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE":{
            return state.map(el=>el.id===action.payload.todolistId2 ? {...el,title:action.payload.newTodolistTitle} : el);
        }
        case "CHANGE-TODOLIST-FILTER": {
            return state.map(el=>el.id === action.payload.todolistId2 ? {...el, filter: action.payload.newFilter} : el)
        }
    }
}

type tsarType = removeTodolistACType | addTodolistACType | changeTodolistTitleACType | changeFilterACType

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1
        }
    } as const
}

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            newTodolistTitle
        }

    } as const
}

type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC=(todolistId2:string,newTodolistTitle:string)=>{
    return{
        type: 'CHANGE-TODOLIST-TITLE',
        payload:{
            todolistId2, newTodolistTitle
        }
    }as const
}


type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: "CHANGE-TODOLIST-FILTER",
        payload: {
            todolistId2, newFilter
        }
    }as const
}