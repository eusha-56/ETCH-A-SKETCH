let box_range = document.querySelector("#box_range")
let current_range = document.querySelector("#current_box")
let color_picker_text = document.querySelector("#color_picker_text")
let color_picker = document.querySelector("#color_picker")
let hex_color = document.querySelector("#hex_color")
let random = document.getElementById("random")
let range = 16
let color = "#000000"
let random_color = false
box_range.value = range

color_picker.addEventListener("change",()=>{
    color = color_picker.value
    hex_color.value = color
    color_picker_text.innerHTML = "Current box color is " + color
})
hex_color.addEventListener("change",()=>{
    color = hex_color.value
    color_picker.value = color
    color_picker_text.innerHTML = "Current box color is " + color
})
box_range.addEventListener("change",()=>{
    range = box_range.value
    current_range.innerHTML = `Displaying ${range} boxes in a rox`
    document.querySelector("#box_container").innerHTML = ""
    grid_maker(range)
})

document.querySelector("#reset").addEventListener("click", () => {
    document.querySelector("#box_container").innerHTML = ""
    grid_maker(range)
    random_color = true
    onclick_random()
    color = "#000000"
    color_picker.value = color    
    hex_color.value = color
})

document.querySelector("body").addEventListener("load", grid_maker(16))

function grid_maker(n) {
    let container = document.querySelector("#box_container")
    let grid_template_columns = ""
    let boxes

    for (let i = 0; i < n; i++) {
        grid_template_columns +=" auto"
    }
    container.style.gridTemplateColumns = grid_template_columns

    for (let i = 0; i < n*n; i++) {
        var box = document.createElement("div")
        box.className = "box"
        container.appendChild(box)
    }

    boxes = document.getElementsByClassName("box")

    for (let i = 0; i < n * n; i++) {
        boxes[i].addEventListener("click", () => {
            boxes[i].style.background = color_chooser()
        })
    }
}

function color_chooser() {
    if (random_color) {
        return random_color_maker()
    }else{
        return color
    }
}
function onclick_random() {
    if (!random_color) {
        random.style.background = "#f35314"
        color_picker.style.opacity = "0.3"
        hex_color.style.opacity = "0.3"
        color_picker_text.innerHTML = "Current box color is Random"
    } else {
        random.style.background = "#5194b3"
        color_picker.style.opacity = "1"
        hex_color.style.opacity = "1"
        color_picker_text.innerHTML = "Current box color is " + color
    }
    random_color = !random_color
}
function random_color_maker() {
    var r = Math.floor(Math.random() * 255)
    var g = Math.floor(Math.random() * 255)
    var b = Math.floor(Math.random() * 255)
    return `rgb(${r}, ${g}, ${b})`
}

document.querySelector("#random").addEventListener("click",onclick_random)
