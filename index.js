function suma(a,b){
  return a+b
}

function resta(a,b){
  return a-b
}
function multiplicacion(a,b){
  return a*b
}
function division(a, b){
  return a / b
}
function operate(a,b, operador){
  if(operador === "+"){
    return suma(a,b)
  }
  else if(operador === "-"){
    return resta(a,b)
  }
  else if(operador === "*"){
    return multiplicacion(a,b)
  }
  else{
    return division(a,b)
  }
}
const input = document.querySelector('#inputParaMostrarOperacion')
const inputParaMostrarResultado = document.querySelector('#inputParaMostrarResultado')
let operacionRealizada = true

function agregarNumeroAlInput (event, numero){
  event.preventDefault()
  if(input.value === "+" || input.value === "-" || input.value === "*" || input.value === "/")
    input.value = ""
  input.value = input.value + numero
  operacionRealizada = false
}

const botones = document.querySelectorAll('.numero')
botones.forEach( boton =>{
  boton.addEventListener('click', e => agregarNumeroAlInput(e, boton.textContent))
})

let numeroAnterior = 0
let operador = ""
let resultado = 0
function ejecutarOperacion(){
  let numeroIngresado = parseInt(input.value) 
  resultado = operate(numeroAnterior, numeroIngresado, operador)
  numeroAnterior = resultado
  inputParaMostrarResultado.value = "= "+resultado
}
function agregarOperadorALaOperacion (event, operadorPresionado){
  event.preventDefault()
  if(operador!== ""){
    ejecutarOperacion()
  }
  else{
    numeroAnterior = parseInt(input.value)
    resultado = numeroAnterior
  }
  operador = operadorPresionado
  input.value = operadorPresionado
  operacionRealizada = true
}

const botonesDeOperacion = document.querySelectorAll('.botonOperacion')
botonesDeOperacion.forEach(boton =>{
  boton.addEventListener('click', e => agregarOperadorALaOperacion(e, boton.textContent))
})

const botonResultado = document.getElementById('botonResultado')
botonResultado.addEventListener('click', e=>{
  e.preventDefault()
  if(!operacionRealizada){
    ejecutarOperacion()
    operacionRealizada = true
    operador = ""
  }
  input.value = resultado
  inputParaMostrarResultado.value = ""
  numeroAnterior = resultado

})

function Limpiar (){
  numeroAnterior = 0
  operador = ""
  resultado = 0
  inputParaMostrarResultado.value = ""
  input.value = ""
  operacionRealizada = true
}

const botonLimpiar = document.querySelector('#botonLimpiar')
botonLimpiar.addEventListener('click', (e)=>{
  e.preventDefault()
  Limpiar()
})