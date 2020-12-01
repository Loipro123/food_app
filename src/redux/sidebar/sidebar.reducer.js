import {SidebarActionTypes} from './sidebar.types';
import{tooggleSibebar,forcusBar} from './sidebar.untils';
const INITIAL_STATE = {
    list_food: [
    {
        id: 1,
        title: 'Main Food',
        hidden:true,
        linkUrl: 'mainfood',
        items: [
            {
                id: 0,
                name: 'Rice',
                forcus: false,
                linkUrl: 'mainfood/rice'
            },
            {
                id: 1,
                name: 'Meat',
                forcus: false,
                linkUrl: 'mainfood/meat'
            },
            {
                id: 2,
                name: 'Noodle',
                forcus: false,
                linkUrl: 'mainfood/noodle'
            },
            {
                id: 3,
                name: 'Soup',
                forcus: false,
                linkUrl: 'mainfood/soup'
            }
        ]
    },
    {
        id: 2,
        title: 'Light Food',
        linkUrl: 'lightfood',
        hidden:true,
        items: [
            {
                id: 0,
                name: 'Salad',
                forcus: false,
                linkUrl: 'lightfood/salad'
            },
            {
                id: 1,
                name: 'Shushi',
                forcus: false,
                linkUrl: 'lightfood/shushi'
            },
            {
                id: 2,
                name: 'Che',
                forcus: false,
                linkUrl: 'lightfood/che'
            }
        ]
    },
    {
        id: 3,
        title: 'Drink',
        hidden:true,
        linkUrl: 'drink',
        items: [
            {
                id: 0,
                name: 'Milk Tea',
                forcus: false,
                linkUrl: 'drink/milktea'
            },
            {
                id: 1,
                name: 'Coffee',
                forcus: false,
                linkUrl: 'drink/coffee'
            },
            {
                id: 2,
                name: 'Fruit Juice',
                forcus:false,
                linkUrl: 'drink/fruitjuice'
            }
        ]
    },
    {
        id: 4,
        title: 'Cake',
        hidden:true,
        linkUrl: 'cake',
        items: [
            {
                id: 0,
                name: 'Birthday Cake',
                forcus:false,
                linkUrl: 'cake/birthdaycake'
            },
            {
                id: 1,
                name: 'Cookies',
                forcus: false,
                linkUrl: 'cake/cookies'
            },
            {
                id: 2,
                name: 'Rice Cake',
                forcus: false,
                linkUrl: 'cake/ricecake'
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