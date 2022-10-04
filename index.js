import { initFacts } from "./initFacts.js";
import { allFactsFetch } from "./allFactsFatchFunc.js";
import { keyPressFunc } from "./keysPressFunc.js";

const init = async() => {
    const fatchFacts = await allFactsFetch();
    const allFactsData = {...fatchFacts.data};
    initFacts(allFactsData);
    await keyPressFunc( allFactsData );
}

init();