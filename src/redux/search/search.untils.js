export const findSearchArray = (mainArray,name) => {
    return mainArray.filter(item => item.title.toLowerCase().includes(name.toLowerCase()));
}