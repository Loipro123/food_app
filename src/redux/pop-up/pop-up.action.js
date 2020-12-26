import {popupTypesAction} from './pop-up.types';

export const openPopup = (item) => {
    return {
        type: popupTypesAction.OPEN_ACTION,
        payload: item
    }
}

export const closePopup = () => {
    return {
        type: popupTypesAction.CLOSE_ACTION
    }
}

export const openComment = (item) => {
    return {
        type: popupTypesAction.OPEN_COMMENT_ACTION,
        payload: item
    }
}

export const closeComment = () => {
    return {
        type: popupTypesAction.CLOSE_COMMENT_ACTION
    }
}
