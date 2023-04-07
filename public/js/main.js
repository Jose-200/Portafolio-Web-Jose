// Variable globales
let show = false
// constantes del DOM
const menu = document.getElementById("menu")
const view = document.getElementById("menu-view")
const path = document.querySelectorAll("a")

// Recorrido forEach para poder manipular los id del querySelectorAll
path.forEach((item) => {
    item.onclick = () => {
        // Recorrido forEach para poder desactivar todos
        path.forEach((elem) => elem.className = "inactive" )

        // Activo el boton que corresponde
        item.className = "active"

        // Desactivo el show
        if(show){
            view.classList.add("hidden")
            setTimeout(() => {
                view.classList.remove("hidden")
                view.classList.remove("show")
                show = false
            }, 1000)
        }
    }
})

// Mostrar el menu
menu.onclick = () => {
    if (!show){
        view.classList.add("show")
        show = true
    } else {
        view.classList.add("hidden")
        setTimeout(() => {
            view.classList.remove("hidden")
            view.classList.remove("show")
            show = false
        }, 1000)
    }
}

