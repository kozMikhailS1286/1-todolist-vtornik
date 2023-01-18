import { PlaylistAddOutlined } from "@mui/icons-material"
import {FilterValuesType} from "../App"

export const FilterReducer = (state: FilterValuesType, action: changeFilterACtype)=> {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return action.payload.value
        }
    default: return state
}
}


type changeFilterACtype = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {
            value
        }
    } as const
}