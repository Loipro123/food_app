export const executiveSlide = (mainArray,idex) => {
    const arrayLength = mainArray.length;
    const indexCompare = idex + 4; 
    if(indexCompare <=  arrayLength) {
        return {
            slide: mainArray.slice(indexCompare-4,indexCompare),
            index: idex+1
        };
    }else if(indexCompare - 1 === arrayLength){
        return {
            slide: [...mainArray.slice(indexCompare-4,arrayLength),mainArray[0]],
            index: 1
        };
    }else if(indexCompare - 2 === arrayLength){
        return {
            slide: [...mainArray.slice(indexCompare-4,arrayLength),...mainArray.slice(0,2)],
            index: 2
        };
    }else if(indexCompare - 3 === arrayLength){
        return {
            slide: [...mainArray.slice(indexCompare-4,arrayLength),...mainArray.slice(0,3)],
            index: 3
        };
    }
}