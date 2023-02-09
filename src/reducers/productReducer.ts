import { Product } from "../types/Product";
import { ReducerActionType } from "../types/ReducerActionType";
import {v4 as uuid} from "uuid";

export const productInitialState:Product[] = [];

export const productReducer = (state:Product[], action:ReducerActionType) => {

    switch(action.type) {
        case "ADD_PRODUCT":
            return [...state, {...action.payload, id: uuid()}];
        break;
        case "REMOVE_PRODUCT": 
            return [...state.filter(value => value.id !== action.payload.id)];
        break;
        case "EDIT_PRODUCT":
            return [...state.map(value => {

                if(value.id === action.payload.id) {
                    return {...value, ...action.payload.data}
                }

                return value;
            })];
        break;
    }

    return state;
}