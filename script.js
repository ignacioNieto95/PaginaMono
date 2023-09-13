const bar = document.getElementById('barra-hamb')
const nav = document.getElementById('navbar')
const close = document.getElementById('close')
const trabajos = [
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 02", size: "550 m2 (5920 ft2)", client: "Maggie Ketchu", request: "Sketchup 3D Interior Model, Floor Plans x2, Render x1, Walkthrought x1"},
    {project: "House 03", size: "335 m2 (3605 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model; Main Floor Interior without furnitures"},
    {project: "House 04", size: "190 m2 (2045 ft2)", client: "Naomi", request: "Sketchup 3D Model without furnitures"},
    {project: "House 05", size: "730 m2 (7870 ft2)", client: "Matt Mosher", request: "Sketchup 3D Model, just architectural space"},
    {project: "House 06", size: "320 m2 (3444 ft2)", client: "Chris Zenz", request: "Autocad 2D Floor Plans x4, Elevations plans x2"},
    {project: "House 07", size: "80 m2 (860 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model Loggia & Furniture Design with AutoCAD 2D Drawings"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"},
    {project: "House 01", size: "820 m2 (8826 ft2)", client: "Lisa Ellis Desing", request: "Sketchup 3D Model, Floor Plans x3, Elevations Plans x6"}
]

if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

if (close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}


