import { allFactsFetch } from "./allFactsFatchFunc.js"
import { findSearchFunc } from "./findSearchFunc.js";
import { insertHtmlFactsFunc } from "./insertHtmlFactsFunc.js";

export const searchFunc = async(currInputValue) => {
    const allFacts = await allFactsFetch();
    const allFactsData = Object.values(allFacts.data);
    allFactsData.map(element => {
        const fact = element.fact;        
        let searchFactResult = findSearchFunc(currInputValue, fact);
        
        if(searchFactResult !== undefined){
            insertHtmlFactsFunc(searchFactResult);
        }
    })
    console.log("end")
}