// import {postComment} from './comments'
import { get, getEdit ,getAll, post, patch, del,postComment } from './firebase.js';

const columnaCentral = document.querySelector('#columnaCentral');
const editarPost = document.querySelector('#editarPost')
const eliminarPost = document.querySelector('#eliminarPost')
const url = new URLSearchParams(window.location.search);
console.log(url)
const id = url.get('persona')

get(columnaCentral, id)

editarPost.addEventListener('click', (event) => {

    event.preventDefault();
    // if(id.includes('-N')){
        window.location.href=`/src/editarPost.html?persona=${id}`
        // window.location.href = `/src/editarPost.html?persona=${id}`
    // }
})

eliminarPost.addEventListener('click', (event) => {
    event.preventDefault();
    // if(id.includes('-N')){
        del(id)
        alert('Se ha borrado correctamente',window.location.href = `/index.html`);
    // }
})


//comments
const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea');
const publish = document.querySelector('#submit');


const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

publish.addEventListener('click', (event) => {
    event.preventDefault();
    const now = new Date()
    let objetoPost = {
        posts:id,
        author:"63ffb4209ac11263fbfbff5f",
    };
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    console.log(objetoPost)
    if(validacion(objetoPost)){
        postComment(objetoPost);
        alert('se creó correctamente')
    }else{
        alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});