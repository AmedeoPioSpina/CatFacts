export const findSearchFunc = (currInputValue, fact) => {
    if(fact.search(currInputValue) !== -1){
        return fact;
    }
}