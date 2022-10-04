import { findSearchFunc } from "./findSearchFunc.js";
import { insertHtmlFactsFunc } from "./insertHtmlFactsFunc.js";

export const searchFunc = async(currInputValue, allFactsData) => {
    Object.values(allFactsData).map(element => {
        const fact = element.fact;        
        let searchFactResult = findSearchFunc(currInputValue, fact);
        
        if(searchFactResult !== undefined){
            insertHtmlFactsFunc(searchFactResult);
        }
    })
}