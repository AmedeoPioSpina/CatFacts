import { deleteFactsFunc } from "./deleteFactsFunc.js";
import { searchFunc } from "./searchFunc.js";

export const keyPressFunc = async() => {

    const searchBar = document.querySelector(".searchBar")
    
    searchBar.onkeypress = async(e) => {
        e.stopImmediatePropagation();
        if(e.key === "Enter"){searchBar.value = ""}
        deleteFactsFunc();
        const oldInputValue = searchBar.value
        const currInputValue = oldInputValue + e.key;
        console.log(currInputValue);
        await searchFunc(currInputValue);
    }
    
    searchBar.onkeydown = async(e) => {
        e.stopImmediatePropagation();
        if(e.key === "Backspace" && searchBar.value.slice(0, -1) !== ""){
            deleteFactsFunc();
            const oldInputValue = searchBar.value
            const currInputValue = oldInputValue.slice(0, -1);
            console.log(currInputValue);
            await searchFunc(currInputValue);
        }
        else if(e.key === "Backspace" && searchBar.value.slice(0, -1) === ""){
            deleteFactsFunc();
        }
    }
}