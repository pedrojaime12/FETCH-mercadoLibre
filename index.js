function mostrarResultados(results){
    const contenedor = document.querySelector(".results");
    const template = document.querySelector("#result-item-template")
    
    for(let variable of results){
        console.log(variable)
        
        const titleEl = template.content.querySelector(".result-item-title")
        titleEl.textContent = variable.title
        
        const conditionEl = template.content.querySelector(".result-item-condition")
        conditionEl.textContent = variable.condition
        
        const priceEl = template.content.querySelector(".result-item-price")
        priceEl.textContent = variable.price
        const clone = document.importNode(template.content, true);
        contenedor.appendChild(clone)
    }
}

function main(){
    const formEl = document.querySelector(".search-form")
    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        const palabraABuxcar = e.target.buscar.value
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuxcar)
        .then(response => response.json())
        .then(data => mostrarResultados(data.results))
    })

}
 main();
