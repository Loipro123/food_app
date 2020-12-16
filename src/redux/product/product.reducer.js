import {product_main} from './product.data';
import {productActionTypes} from './product.type';
import {executiveSlide} from './product.untils';
const INITIAL_DATA = {
    main_data: product_main,
    slide_data: [
    {
            id: 'M10',
            title: 'Bo luc lac',
            price: 27,
            urlImage: 'https://i.ibb.co/W0tgcZP/bo-luc-lac.jpg',
            urlLink: 'mainfood/meat/boluclac'
    }
    ,{
        id: 'CG01',
        title: 'Com ga xe',
        price: 8,
        urlImage: 'https://i.ibb.co/s1ryyhC/com-ga.jpg',
        urlLink: 'mainfood/rice/comgaxe'
    },
    {
        id: 'CG02',
        title: 'Com ga nuong',
        price: 9,
        urlImage: 'https://i.ibb.co/qkqcxdS/com-ga-nuong.jpg',
        urlLink: 'mainfood/rice/comganuong'
    },
    {
        id: 'CG03',
        title: 'Com ga chat',
        price: 9.5,
        urlImage: 'https://i.ibb.co/GP32WNb/com-ga-chat.jpg',
        urlLink: 'mainfood/rice/comgachat'
    },
   ],
    index: 0
}

export const productReducer = (state=INITIAL_DATA,action) => {
    switch(action.type){
        case productActionTypes.SLIDE_ACTION:
            const objectSlide = executiveSlide(state.main_data,state.index)
            return {
                ...state,
                slide_data: objectSlide.slide,
                index: objectSlide.index,
            }
        case productActionTypes.RESET_ACTION:
            return{
                 ...state,
                 slide_data: [
                    {
                            id: 'M10',
                            title: 'Bo luc lac',
                            price: 27,
                            urlImage: 'https://i.ibb.co/W0tgcZP/bo-luc-lac.jpg',
                            urlLink: 'mainfood/meat/boluclac'
                    }
                    ,{
                        id: 'CG01',
                        title: 'Com ga xe',
                        price: 8,
                        urlImage: 'https://i.ibb.co/s1ryyhC/com-ga.jpg',
                        urlLink: 'mainfood/rice/comgaxe'
                    },
                    {
                        id: 'CG02',
                        title: 'Com ga nuong',
                        price: 9,
                        urlImage: 'https://i.ibb.co/qkqcxdS/com-ga-nuong.jpg',
                        urlLink: 'mainfood/rice/comganuong'
                    },
                    {
                        id: 'CG03',
                        title: 'Com ga chat',
                        price: 9.5,
                        urlImage: 'https://i.ibb.co/GP32WNb/com-ga-chat.jpg',
                        urlLink: 'mainfood/rice/comgachat'
                    },
                   ],
                index: 0
            }
        default:
            return {
                ...state
            }
    }
}