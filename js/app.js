      // BOM
      // Browse Objecto Model

// window.console.log('Hola soy un console.log');
// window.console.warn('Soy un warning');
// window.console.error('Soy un error');

// console.log(window.location.href)
// console.log(window.location.hostname)
// console.log(window.location.pathname)
// console.log(window.location.protocol)

// window.location.href = "https://www.w3schools.com/js/js_window.asp"

          // DOM
          // Document Object Model


// const elementosP = document.getElementsByTagName('p');

// de esta forma accedemos a los elemeto p
// console.log(elementosP);
// de esta forma accedemos al primer parrafo
// console.log(elementosP[0]);
// accedemos al contenido de la etiqueta
// console.log(elementosP[0].innerHTML);
// console.log(elementosP[0].innerText);

// elementosP[0].innerHTML = 'Este es el texto que cambio';

// Crear nodos en el documento

// ES5
// 1.- Crear el elemento
// const elemento = document.createElement('h2');
// {/* <h2></h2> */}
// // 2.- Crear el nodo de texto
// const contenido = document.createTextNode('Este es el h2');
// // 3.- Añadir el nodo al elemento
// elemento.appendChild(contenido);
// // 4.- Agregar atributos al elemento
// elemento.setAttribute('align', 'center');
// // 5.- agregar el elemento al documento
// const subtitulo = document.getElementById('subtitulo');
// // subtitulo.appendChild(elemento);
// // console.log(elemento)
// // console.log(subtitulo)

// otro ejemplo

// document.body.appendChild(elemento);


// // Agregando contenido al li
// const elemento = document.createElement('li');
// const contenido = document.createTextNode('Este es el nuevo texto');
// elemento.appendChild(contenido);

// // Agregarlo en el body
// // document.body.appendChild(elemento);

// // Agregando a la ol
// const padre = document.getElementById('padre');
// padre.appendChild(elemento);


// Manipular el contenido delprimer li

// const primero = document.getElementById('primero');

// primero.innerText = 'Nuevo texto <b>TEXTO EN NEGRITA</b>';
// primero.innerHTML = 'Nuevo texto <b>TEXTO EN NEGRITA</b>';


// Modificando estilos desde el DOM

const titulo = document.getElementById('titulo');

// esto se lo agregamos directo desde Js
// titulo.style.color = '#fff';
// titulo.style.backgroundColor = 'cyan';
// titulo.style.paddingTop = '200px';
// titulo.style.fontSize = '70px';

// Agregamos una clase existente en el Css
// titulo.className = 'titulo';

// let nombre = 'Jonh';
// console.log(nombre);
// nombre = 'Gabi';
// console.log(nombre);


// Ejemplo login ES6
// let user = prompt('Ingresa tu nombre');

// if(user === null){
//   user = 'Invitado'
// }

// const subtitulo = document.getElementById('subtitulo');
// const contentSub = `<h2 aling="center" class="subtitulo">Este es el h2 con el usuario ${user}</h2>`;
// subtitulo.innerHTML = contentSub;

// Nos ayuda a ponerle clases a nuestros nodos 
// document.getElementById('titulo').classList.add('titulo');
// document.getElementById('titulo').classList.remove('titulo');

// const myFunc = () => document.getElementById('titulo').classList.toggle('titulo')

// const myFunc = () => window.location.href = "https://www.w3schools.com/js/js_window.asp"


// const myFunc = () =>{
//   if(confirm('¿Seguro que quieres ver la imagen?')){
//     document.getElementById('img').setAttribute('src', './img.png');
//     // window.location.href = "https://www.w3schools.com/js/js_window.asp"
//   }
// }










