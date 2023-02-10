import {createContext, useReducer} from "react";
import { ReducerActionType } from "../types/ReducerActionType";
import { Product } from "../types/Product";
import { productsInitialState, productReducer } from "../reducers/productsReducer";


type InitialStateType = {
    products: Product[]
}

const initialState:InitialStateType = {
    products: productsInitialState
}

type ContextState = {
    state: InitialStateType,
    dispatch: React.Dispatch<any>
}

export const Context = createContext<ContextState>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state:InitialStateType, action:ReducerActionType) => ({
    products: productReducer(state.products, action)
});

export const ContextProvider = ({children}:React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

