import {TasksStateType} from '../App';
import {v1} from "uuid";
import {addTodolistACType} from "./todolists-reducer";


export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleType = ReturnType<typeof changeTaskTitleAC>
export type removeTodolistActionType = ReturnType<typeof RemoveTodolistAC>
export type AddTodolistActionType = ReturnType<typeof AddTodolistAC>


type ActionsType = RemoveTaskActionType | AddTaskActionType | ChangeTaskStatusType | ChangeTaskTitleType |
    removeTodolistActionType | AddTodolistActionType
| addTodolistACType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        case 'ADD-TASK':
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case 'CHANGE-TASK-STATUS':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map((t => t.id === action.taskId ? {...t, isDone: action.isDone}: t))
            }
        case 'CHANGE-TITLE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map((t => t.id === action.taskId ? {...t, title: action.newTitle}: t))
            }
        case 'REMOVE-TODOLIST':
            // const copyState = {...state}
            // delete copyState[action.todolistId]
            const {[action.todolistId]: [], ...rest} = {...state}
            return rest
        case 'ADD-TODOLIST':
            return {
                ...state,
                [action.todolistId]: []
            }
        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return { type: 'REMOVE-TASK', taskId, todolistId} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'ADD-TASK', title, todolistId} as const
}

export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string) => {
    return {type: "CHANGE-TASK-STATUS", taskId, isDone, todolistId} as const
}

export const changeTaskTitleAC = (taskId: string, newTitle: string, todolistId: string) => {
    return {type: "CHANGE-TITLE-TASK", taskId, newTitle, todolistId} as const
}

export const RemoveTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', todolistId} as const
}

export const AddTodolistAC = (todolistId: string) => {
    return {type: 'ADD-TODOLIST', todolistId} as const
}