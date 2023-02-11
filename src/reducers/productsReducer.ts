import { Product } from "../types/Product";
import { ReducerActionType } from "../types/ReducerActionType";
import {v4 as uuid} from "uuid";

export const productsInitialState:Product[] = [
    {
        id: "1",
        marketName: "extra",
        productName: "arroz",
        price: 25,
        year: 2022
    },
    {
        id: "2",
        marketName: "dia",
        productName: "leite",
        price: 35.50,
        year: 2021
    },
    {
        id: "3",
        marketName: "carrefour",
        productName: "leite",
        price: 35.50,
        year: 2021
    },
    {
        id: "4",
        marketName: "atacadao",
        productName: "leite",
        price: 35.50,
        year: 2021
    },

];

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