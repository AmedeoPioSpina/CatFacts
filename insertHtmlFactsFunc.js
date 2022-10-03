export const insertHtmlFactsFunc = (searchFactResult) => {
    const main = document.querySelector("main");

    const divFact = document.createElement("div");
    divFact.className = "fact";
    divFact.textContent = searchFactResult;
    main.appendChild(divFact);
}