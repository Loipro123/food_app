import {SidebarActionTypes} from './sidebar.types';

export const ToogleSidebar = (itemId) => ({
    type: SidebarActionTypes.TOOGGLE_SIDEBAR,
    payload: itemId
})

export const FocusSidebar = (itemId,itemName) => ({
    type:SidebarActionTypes.FOCUS_SIDEBAR,
    payload: {
        id: itemId,
        title: itemName
    }
})