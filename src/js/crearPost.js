import { get, getEdit ,getAll, post, patch, del } from './firebase.js';

const resetform = document.querySelector('form')
const form = document.querySelectorAll('textarea,input');
const publish = document.querySelector('#Publish');

//createdAt: `${now.getMonth() + 1}-${now.getDate()}-${now.getFullYear()}`,
//        hoursAndMinutes: `${now.getHours()}:${now.getMinutes()}`

const validacion = (objeto) => {
    const validacionForm = Object.values(objeto).every((elemento) => !elemento == '');
    return validacionForm;
}

publish.addEventListener('click', (event) => {
    event.preventDefault();
    const now = new Date()
    let objetoPost = {
        createdAt: now.getTime()
    };
    form.forEach((elemento) =>{
        objetoPost[elemento.name] = elemento.value;
    });
    const newObject={
        title:"lo que tu quieras",
        content:"hola",
        imageURL:"IMAGN",
        comments:[],
        author:"63ffa5a9d152c2aebd289fe9"
    }
    if(true){
        post(newObject);
        alert('se creó correctamente')
    }else{
        alert(`Oye te falta completar el formulario e.e`)
    }
    resetform.reset();
});