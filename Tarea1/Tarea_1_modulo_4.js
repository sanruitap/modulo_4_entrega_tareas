  
let divId =  document.getElementById('contenedor')
let divId2 =  document.getElementById('contenedor2')
let divId3 =  document.getElementById('contenedor3')
let boton = document.getElementById('boton')

boton.addEventListener('click', texto)
boton.addEventListener('click', texto2)
boton.addEventListener('click', texto3)

function texto(){
    divId.innerHTML='Primer texto agregado en div desde JS'
    divId.style.margin='100px'
    divId.style.background='yellow'
    
}

function texto2(){
    divId2.innerHTML='Segundo texto agregado en segundo div desde JS'
    divId2.style.margin='80px'
    divId2.style.background='blue'
}

function texto3(){
    divId3.innerHTML='Tercer texto agregado en tercer div desde JS'
    divId3.style.margin='50px'
    divId3.style.background='red'
}