import { AppStateType } from "./store";
import {IsAllWorks, WorkItem} from "../types/types";

export const selectIsFetchingWorks = (state: AppStateType): boolean => {
    return state.worksSection.isFetchingWorks;
}

export const selectPhotos = (state: AppStateType): WorkItem[] => {
    return state.worksSection.photos;
}

export const selectPrints = (state: AppStateType): WorkItem[] => {
    return state.worksSection.prints;
}

export const selectDesigns = (state: AppStateType): WorkItem[] => {
    return state.worksSection.designs;
}

export const selectIsAllWorks = (state: AppStateType): IsAllWorks => {
    return state.worksSection.isAllWorks;
}