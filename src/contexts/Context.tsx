import {createContext, useReducer} from "react";
import { Product } from "../types/Product";
import { productInitialState, productReducer } from "../reducers/productReducer";
import { ReducerActionType } from "../types/ReducerActionType";

type InitialStateType = {
    product: Product[]
}

const initialState:InitialStateType = {
    product: productInitialState
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
    product: productReducer(state.product, action)
});

export const ContextProvider = ({children}:React.PropsWithChildren) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

