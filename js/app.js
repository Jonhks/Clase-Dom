// BOM Browser Object Model
//  console.log
//  console.warn
//  console.error
//  console.info
//  console.dir

// window.location.href returns the href (URL) of the current page
// window.location.hostname returns the domain name of the web host
// window.location.pathname returns the path and filename of the current page
// window.location.protocol returns the web protocol used (http: or https:)
// window.location.assign() loads a new document



// const emelementosP = document.getElementsByTagName('p');

// console.log(emelementosP)
// console.log(emelementosP[0])
// console.log(emelementosP[0].innerHTML)
// console.log(emelementosP[0].innerText)

// emelementosP[0].innerHTML = 'Este es el primer parrafo' 

// --------
// const segundoP = document.getElementById('segundo')

// console.log(segundoP)

// Crear nodos en el dom

// 1.- Crear el elemento
// const elemento = document.createElement('h2')
// 2.- Crear un nodo de texto
// const contenido = document.createTextNode('Este es nuestro h2')
// 3.- Añadir el nodo de texto al elemento
// elemento.appendChild(contenido)
// 4.- agregar atributos al elemento
// elemento.setAttribute('align', 'center')
// 5.- agregar el elemento al documento
// crear el div bajo el h1 
// const subtitulo = document.getElementById('subtitulo')
// subtitulo.appendChild(elemento)

// otro ejemplo 
// lo pone al final de nuestro doc
// document.body.appendChild(elemento)


// Agregando contenido al li

// const elemento = document.createElement('li')
// const contenido = document.createTextNode('Nuevo Texto')
// elemento.appendChild(contenido)

// agregarlo a donde nosotros querramos
// document.body.appendChild(elemento)

// ejemplo de agregarlo al padre ponerle id al ol

// const padre = document.getElementById('padre')
// padre.appendChild(elemento)


// Modificar el contenido de nuestro html

// const primero = document.getElementById('primero')
// primero.innerText = 'Nuevo Texto <b>TEXTO NEGRITA</b>'
// primero.innerHTML = 'Nuevo Texto <b>TEXTO NEGRITA</b>'


// modificando estilos con DOM



// const titulo = document.getElementById('titulo')
// titulo.style.color = 'navy'
// titulo.style.color = '#fff'
// titulo.style.background = 'navy'
// titulo.style.paddingTop = '200px'
// titulo.style.fontSize = '70px'
// agregar clases a nodos de js
// titulo.className = 'titulo'

// let user  = prompt('Ingresa el nombre');


// if(user === null){
//   user = 'Invitado'
// }


// const subtitulo = document.getElementById('subtitulo')
// const contentSub = `<h2 class="subtitulo" >Este es un subtitulo con el nombre de usuario ${user}</h2>`

// subtitulo.innerHTML = contentSub

// const subtitulo = document.getElementById('subtitulo')
// const contentSub = `<h2 class="subtitulo" >Este es un subtitulo con el nombre de usuario <span class="span">${user}</span></h2>`

// subtitulo.innerHTML = contentSub


// console.log(
//   document.querySelector('p')
// )
// console.log(
//   document.querySelector('#subtitulo')
// )
// console.log(
//   document.querySelector('.subtitulo')
// )
// console.log(
//   document.querySelectorAll('p')
// )


// document.getElementById('titulo').classList.add('titulo')
// document.getElementById('titulo').classList.remove('titulo')

// const myFunc = () => document.getElementById('titulo').classList.toggle('titulo')


// console.log(document.getElementById('titulo').classList.contains('titulo'))

// document.getElementById('anchor').setAttribute('href', 'https://www.facebook.com/')

// document.getElementById('img').setAttribute('src', './img.png')