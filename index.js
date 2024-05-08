let contenedorPadre = document.querySelector("#listaTareas");
let inputTarea = document.getElementById('inputTarea');

function agregarTarea(event) {
    event.preventDefault();

    let textoInput = inputTarea.value;

    //div
    let nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add("d-flex", "justify-content-around", "text-light", "mb-4");
    
    //input    
    let nuevoInput = document.createElement('input');
    nuevoInput.type = "checkbox"
    nuevoInput.addEventListener("change", function() {
        if (this.checked) {
            nuevoH3.innerHTML = "<strike>" + nuevoH3.innerHTML + "</strike>";
        } else {
            nuevoH3.innerHTML = textoInput;
        }
    });
    
    //h3
    let nuevoH3 = document.createElement('h3');
    nuevoH3.classList.add("mt-5", "text-center");
    nuevoH3.textContent = textoInput;
    

    //boton
    let nuevoBoton = document.createElement('button');
    nuevoBoton.classList.add('boton');
    nuevoBoton.textContent = "❌";
    nuevoBoton.addEventListener("click", function() {
        nuevoInput.remove();
        nuevoH3.remove();
        nuevoBoton.remove();
    });

    nuevoDiv.appendChild(nuevoInput)
    nuevoDiv.appendChild(nuevoH3)
    nuevoDiv.appendChild(nuevoBoton)

    contenedorPadre.appendChild(nuevoDiv);
    inputTarea.value = ""; 

}