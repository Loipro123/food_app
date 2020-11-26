export const tooggleSibebar = (state,itemId) => {
    const itemSide = state.find(item => item.id === itemId);
    if(!itemSide){
        return
    }
    // if(itemSide.hidden){
    //     return state.map(item => {
    //         if(item.id === itemSide.id){
    //             return {
    //                 ...item,
    //                 hidden: false
    //             }
    //         }
    //         return {
    //             ...item,
    //             hidden: true
    //         }
    //     })
    // }else{
        return state.map(item => {
            if(item.id === itemSide.id){
                return {
                    ...item,
                    hidden: !item.hidden,
                    items: item.items.map(subitem => ({
                        ...subitem,
                        forcus:false
                    }))
                }
            }
            return {
                ...item
            }
        })
    
}

export const forcusBar = (state, newItem) => {
       return state.map(item => {
           if(item.title === newItem.title){
               return {
                   ...item,
                   items: item.items.map(subitem => {
                       if(subitem.id === newItem.id){
                           return {
                               ...subitem,
                               forcus: true
                           }
                       }
                       return{
                           ...subitem,
                           forcus:false
                       }
                   })
               }
           }
           
        return {
            ...item,
            items: item.items.map(subitem=>{
                return {
                    ...subitem,
                    forcus:false
                }
            })
        }
       })
}