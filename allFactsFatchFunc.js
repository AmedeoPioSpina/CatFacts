export const allFactsFetch = async() => {
    const allFacts = await fetch("https://catfact.ninja/facts?limit=100")
    .then((res) => res.json())
    .then((data) => data)
    .catch((e) => console.log(e));
    return allFacts;
}