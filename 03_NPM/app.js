const arr =[
    {nombre:"Duanly"},
    {nombre:"Luna"}
]

function printNames(arr) {
    arr.forEach(element => {
        return console.log(element.nombre)
    });
}
printNames(arr)