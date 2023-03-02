import { get, getEdit ,getAll, post, patch, del } from './firebase.js';

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');

const url = new URLSearchParams(window.location.search);
const id = url.get('persona')

getEdit(form, id)

const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

publish.addEventListener('click', (event) => {
    event.preventDefault();
    let objetoPost = {};
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    console.log(objetoPost, id)
    if(validacion(objetoPost)){
        patch(objetoPost, id);
        console.log('ok')
        alert('se actualizó correctamente',window.location.href = `../index.html`)
    }else{
        return alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});