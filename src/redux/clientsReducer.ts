import {Client} from "../types/types";
import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {clientsAPI} from "../api/api";

const CLIENTS_RECEIVED = 'switch/clients/CLIENTS_RECEIVED';
const IS_FETCHING_CLIENTS_CHANGED = 'switch/clients/IS_FETCHING_CLIENTS_CHANGED';


let initialState = {
    clients: [] as Client[],
    isFetchingClients: true,
}

const clientsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case CLIENTS_RECEIVED:
            return _clientsReceived(state, action.newClients);
        case IS_FETCHING_CLIENTS_CHANGED:
            return _isFetchingClientsChanged(state, action.fetchingVal);
        default:
            return state;
    }
}

const _clientsReceived = (state: InitialStateType, newClients: Client[]) => {
    return {
        ...state,
        clients: [...newClients],
    }
}

const _isFetchingClientsChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingClients: fetchingVal,
    }
}


export const clientsActions = {
    clientsReceived: (newClients: Client[]) => ({type: CLIENTS_RECEIVED, newClients} as const),
    isFetchingClientsChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_CLIENTS_CHANGED, fetchingVal} as const),
}

export const getClients = (): ThunkType =>
    async (dispatch, getState) => {
        dispatch(clientsActions.isFetchingClientsChanged(true));

        const payload = clientsAPI.getClients();
        dispatch(clientsActions.clientsReceived(payload))

        dispatch(clientsActions.isFetchingClientsChanged(false));
    }

export const getAllClients = (): ThunkType =>
    async (dispatch, getState) => {
        dispatch(clientsActions.isFetchingClientsChanged(true));

        const payload = clientsAPI.getAllClients();
        dispatch(clientsActions.clientsReceived(payload))

        dispatch(clientsActions.isFetchingClientsChanged(false));
    }

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof clientsActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export default clientsReducer;