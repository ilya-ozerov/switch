import {AppStateType, InferActionTypes} from "./store";
import {ThunkAction} from "redux-thunk";
import {IsAllWorks, WorkItem, Works} from "../types/types";
import {worksAPI} from "../api/api";

const WORKS_RECEIVED = 'switch/works/WORKS_RECEIVED';
const IS_FETCHING_WORKS_CHANGED = 'switch/works/IS_FETCHING_WORKS_CHANGED';
const MORE_WORKS_RECEIVED = 'switch/works/MORE_WORKS_RECEIVED';
const CLIENT_PAGE_SIZE_INCREMENTED = 'switch/works/CLIENT_PAGE_SIZE_INCREMENTED';

const IS_ALL_WORKS_CHANGED = 'switch/works/IS_ALL_WORKS_CHANGED';


const defaultPageSize = 12;
const incrementStepClientPageSize = defaultPageSize;

let initialState = {
    photos: [] as WorkItem[],
    designs: [] as WorkItem[],
    prints: [] as WorkItem[],
    clientPageSize: defaultPageSize,
    isFetchingWorks: true,

    isAllWorks: {
        prints: false,
        photos: false,
        designs: false,
    } as IsAllWorks,
}

const worksReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case WORKS_RECEIVED:
            return _worksReceived(state, action.newWorks);
        case MORE_WORKS_RECEIVED:
            return _moreWorksReceived(state, action.newWorks);
        case CLIENT_PAGE_SIZE_INCREMENTED:
            return _clientPageSizeIncremented(state);
        case IS_FETCHING_WORKS_CHANGED:
            return _isFetchingWorksChanged(state, action.fetchingVal);
        case IS_ALL_WORKS_CHANGED:
            return _isAllWorksChanged(state, action.isAll);
        default:
            return state;
    }
}

const _isAllWorksChanged = (state: InitialStateType, isAll: IsAllWorks) => {
    return {
        ...state,
        isAllWorks: isAll,
    }
}

const _moreWorksReceived = (state: InitialStateType, newWorks: Works) => {
    return {
        ...state,
        photos: [...state.photos , ...newWorks.photography],
        designs: [...state.designs , ...newWorks.design],
        prints: [...state.prints , ...newWorks.print],
    }
}

const _worksReceived = (state: InitialStateType, newWorks: Works) => {
    return {
        ...state,
        photos: [...newWorks.photography],
        designs: [...newWorks.design],
        prints: [...newWorks.print],
    }
}

const _isFetchingWorksChanged = (state: InitialStateType, fetchingVal: boolean) => {
    return {
        ...state,
        isFetchingWorks: fetchingVal,
    }
}

const _clientPageSizeIncremented = (state: InitialStateType) => {
    return {
        ...state,
        clientPageSize: state.clientPageSize + incrementStepClientPageSize,
    }
}


export const worksActions = {
    worksReceived: (newWorks: Works) => ({type: WORKS_RECEIVED, newWorks} as const),
    moreWorksReceived: (newWorks: Works) => ({type: MORE_WORKS_RECEIVED, newWorks} as const),
    clientPageSizeIncremented: () => ({type: CLIENT_PAGE_SIZE_INCREMENTED} as const),
    isFetchingWorksChanged: (fetchingVal: boolean) => ({type: IS_FETCHING_WORKS_CHANGED, fetchingVal} as const),
    isAllWorksChanged: (isAll: IsAllWorks) => ({type: IS_ALL_WORKS_CHANGED, isAll} as const),
}

export const getWorks = (): ThunkType =>
    async (dispatch) => {
        dispatch(worksActions.isFetchingWorksChanged(true));

        const payload = worksAPI.getWorks(0, defaultPageSize);
        dispatch(worksActions.worksReceived(payload));

        let isAll: IsAllWorks = {
            photos: payload.photography.length < defaultPageSize ? true : false,
            designs: payload.design.length < defaultPageSize ? true : false,
            prints: payload.print.length < defaultPageSize ? true : false,
        }

        dispatch(worksActions.isAllWorksChanged(isAll))

        dispatch(worksActions.isFetchingWorksChanged(false));
    }

export const getMoreWorks = (): ThunkType =>
    async (dispatch, getState) => {
        dispatch(worksActions.isFetchingWorksChanged(true));

        const payload = worksAPI.getWorks(getState().worksSection.clientPageSize, defaultPageSize);
        dispatch(worksActions.moreWorksReceived(payload));
        dispatch(worksActions.clientPageSizeIncremented());

        let isAll: IsAllWorks = {
            photos: payload.photography.length < defaultPageSize ? true : false,
            designs: payload.design.length < defaultPageSize ? true : false,
            prints: payload.print.length < defaultPageSize ? true : false,
        }

        dispatch(worksActions.isAllWorksChanged(isAll))

        dispatch(worksActions.isFetchingWorksChanged(false));
    }

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof worksActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;

export default worksReducer;