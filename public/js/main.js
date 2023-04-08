// Variable globales
let show = false
// constantes del DOM
const menu = document.getElementById("menu")
const view = document.getElementById("menu-view")
const path = document.querySelectorAll("a")

// Recorrido forEach para poder manipular los id del querySelectorAll
path.forEach((item) => {
    item.onclick = () => {
        // Recorrido forEach para poder desactivar todos y activar el correspondido
        if(item.id != "continue" && item.id != "moreabout"){
            path.forEach((elem) => elem.className = "inactive" )
            item.className = "active"
        } else if (item.id == "continue") {
            path.forEach((elem) => elem.className = "inactive" )
            path.forEach((elem) => {
                if(elem.id == "vtec") { elem.className = "active" }
            })
        } else if (item.id == "moreabout") {
            path.forEach((elem) => elem.className = "inactive" )
            path.forEach((elem) => {
                if(elem.id == "vabo") { elem.className = "active" }
            })
        }

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


