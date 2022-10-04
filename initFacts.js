import { insertHtmlFactsFunc } from "./insertHtmlFactsFunc.js"

export const initFacts = (allFactsData) => {
    Object.values(allFactsData).map(element => {
        const fact = element.fact;
        insertHtmlFactsFunc(fact);
    })
}