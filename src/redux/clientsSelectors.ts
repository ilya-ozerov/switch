import { AppStateType } from "./store";
import {Client} from "../types/types";

export const selectIsFetchingClients = (state: AppStateType): boolean => {
    return state.clientsSection.isFetchingClients;
}

export const selectClients = (state: AppStateType): Client[] => {
    return state.clientsSection.clients;
}