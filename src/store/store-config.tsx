import { createStore, compose, AnyAction } from 'redux';
import { install, combineReducers, StoreCreator } from 'redux-loop';
import initReducer, { initialInitState } from '../modules/init/reducers/init.reducer';

export const enhancedCreateStore: StoreCreator = createStore;

// TODO: We have to create interface for rootReducer.
export const rootReducer = combineReducers<any, AnyAction>({
    initState: initReducer
});

export const initialState: any = {
    initState: initialInitState
};

 export let enhancer: any = compose(install());

export const store = enhancedCreateStore(rootReducer, initialState, enhancer);
