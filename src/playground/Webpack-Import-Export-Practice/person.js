
export const isAdult = (x) => {
    if(x >= 18){
        return true
    }
    else{
        return false
    }
}

export const canDrive = (x) => {
    if(x >= 21){
        return true
    }
    else{
        return false
    }
}

export default (x) => x >= 65;