import {createSelector} from 'reselect';

const mainDataSelector = state => state.foodData

export const subfoodSelector = (mainfoodId,subFoodId) => (
    createSelector(
        [mainDataSelector],
        mainData => ({
            title: mainData.food[mainfoodId].title,
            items: mainData.food[mainfoodId].items[subFoodId]
        })
    )
)

export const mainfoodSelector = (mainfoodId) => (
    createSelector(
        [mainDataSelector],
        mainData => ({
            title: mainData.food[mainfoodId].title,
            items: Object.values(mainData.food[mainfoodId].items)
        })
    )
)

export const productSelector = createSelector(
    [mainDataSelector],
    mainData => mainData.product
)