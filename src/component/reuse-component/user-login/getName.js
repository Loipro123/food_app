export const getName = (name) => {
    let firstName, lastName;
    if(!name) return "";
    if(name.split(' ').length>1){
        let subName = name.trim().split(" ");
        let len = subName.length;
        lastName = subName[len-1].charAt(0);
        firstName = subName[0].charAt(0);
    }
    else{
        firstName = name;
    }
    return firstName  + lastName;
}