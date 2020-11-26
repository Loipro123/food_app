import {SidebarActionTypes} from './sidebar.types';
import{tooggleSibebar,forcusBar} from './sidebar.untils';
const INITIAL_STATE = {
    list_food: [
    {
        id: 1,
        title: 'Main Food',
        hidden:true,
        items: [
            {
                id: 0,
                name: 'Rice',
                forcus: false
            },
            {
                id: 1,
                name: 'Meat',
                forcus: false
            },
            {
                id: 2,
                name: 'Noodle',
                forcus: false
            },
            {
                id: 3,
                name: 'Soup',
                forcus: false
            }
        ]
    },
    {
        id: 2,
        title: 'Light Food',
        hidden:true,
        items: [
            {
                id: 0,
                name: 'Salad',
                forcus: false
            },
            {
                id: 1,
                name: 'Shushi',
                forcus: false
            },
            {
                id: 2,
                name: 'Che',
                forcus: false
            }
        ]
    },
    {
        id: 3,
        title: 'Drink',
        hidden:true,
        items: [
            {
                id: 0,
                name: 'Milk Tea',
                forcus: false
            },
            {
                id: 1,
                name: 'Coffe',
                forcus: false
            },
            {
                id: 2,
                name: 'Fruit Juice',
                forcus:false
            }
        ]
    },
    {
        id: 4,
        title: 'Cake',
        hidden:true,
        items: [
            {
                id: 0,
                name: 'Birthday Cake',
                forcus:false
            },
            {
                id: 1,
                name: 'Cookies',
                forcus: false
            },
            {
                id: 2,
                name: 'Rice Cake',
                forcus: false
            }
        ]
    }
]
}

export const sibebarReducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SidebarActionTypes.TOOGGLE_SIDEBAR:
            return {
                ...state,
                list_food: tooggleSibebar(state.list_food,action.payload)
            }
        case SidebarActionTypes.FOCUS_SIDEBAR:
            return {
                ...state,
                list_food: forcusBar(state.list_food,action.payload),
            }
        default:
            return state;
    }
}