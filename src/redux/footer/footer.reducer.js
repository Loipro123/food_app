const INITIAL_DATA = {
    footer_data: [
        {
            id: 1,
            title: 'About',
            items: [
                {
                    id: 1,
                    name: 'Home'
                },
                {
                    id: 2,
                    name: 'Service'
                },
                {
                    id: 3,
                    name: 'Event'
                },
                {
                    id: 4,
                    name: 'Help'
                }
            ]
        },
        {
            id: 2,
            title: 'Product',
            items: [
                {
                    id: 1,
                    name: 'Main Food'
                },
                {
                    id: 2,
                    name: 'Light Food'
                },
                {
                    id: 3,
                    name: 'Drink'
                },
                {
                    id: 4,
                    name: 'Cake'
                }
            ]
        },
        {
            id: 4,
            title: 'Contact',
            items: [
                {
                    id: 1,
                    name: 'Phone'
                },
                {
                    id: 2,
                    name: 'Email'
                },
                {
                    id: 2,
                    name: 'Social'
                }
               
            ]
        },
    ]
}

export const footerReducer = (state=INITIAL_DATA,action) => {
    switch(action.type){
        default:
            return {
                ...state
            }
    }
}