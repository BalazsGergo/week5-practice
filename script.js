console.log('loaded')

const rootElement = document.querySelector("#root")

console.dir(rootElement)

const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
   // console.log(data)
    return data
}

const skeletonComponent = () =>`
    <headre></header>
    <main></main>
    <footer></footer>
`


const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

const makeDomFromData = (data, rootElement, componentFn) => {
    data.forEach(value => rootElement.insertAdjacentHTML("beforeend", componentFn(value)))
}



async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    rootElement.insertAdjacentElement("beforeend", skeletonComponent())
    const mainElement = Document.querySelector("main")

     const data = await fetchUrl("https://restcountries.com/v3.1/all")
     console.log(data)
    
     makeDomFromData(data,rootElement, countryComponent)
    
   

    const countryElements = document.querySelectorAll("div.country")
    countryElements.forEach((countryElement) => {
        countryElement.addEventListener("click", () => {
            countryElement.classList.toggle("click")
        })
    })
}

init()