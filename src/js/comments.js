import { card, contenido } from './card.js'

const urlFirebase = 'https://jobinderapi-production.up.railway.app/api/v1'
//const urlFirebase = 'https://<dominio>/api/v1' //


const parseInfo = (info) => {
    const list = Object.entries(info);
    const newList = list.map((elemento) => {
        const infoParsed = {
            id: elemento[0],
            ...elemento[1],
        }
        return infoParsed
    })
    return newList;
}

const tiempoTranscurrido = (createdAt) =>{
    const ahora = new Date().getTime();
    const diferenciaMilisegundos = ahora - createdAt;
    const minutos = Math.floor(diferenciaMilisegundos/60000);
    const horas = Math.floor(minutos/60)
    const dias = Math.floor(horas/24)
    if(minutos < 60){
        return `${minutos} min read`
    }else if(horas < 24 && horas > 1){
        return `${horas} hour read`
    }
    else if(horas > 24){
        return `${dias} day read`
    }
}

const filtrado = (arreglo, palabraClave) => {
    return arreglo.filter( objeto => objeto.title.includes(palabraClave))
}

const get = async (contenedor,id) => {
    try {
        let response = await fetch(`${urlFirebase}/comments/${id}`) //
        const result = await response.json();
        const difTiempo = tiempoTranscurrido(result.createdAt)
        contenedor.appendChild(card(result, difTiempo,contenido(result)))
    } catch (error) {
        console.log('get', error);
    }
}

const getEdit = async (form,id) => {
    try {
        let response = await fetch(`${urlFirebase}/comments/${id}`)
        const result = await response.json();
        Object.entries(result)
        console.log(Object.entries(result))
        Array.from(form).forEach((elemento) =>{
            Object.entries(result).forEach((ele) =>{
            if(elemento.name === ele[0]){
              elemento.value = ele[1];
                }
            })
           })
           
    } catch (error) {
        console.log('get', error);
    }
}

const getAll = async (contenedor, boolean, palabraClave) => {
    try {

        let response = await fetch(`${urlFirebase}/comments/`)// ('urlFirebase/posts')
        const result = await response.json();
        const data = parseInfo(result);
        console.log(data)
        if(boolean){
            data.forEach((personaje) => {
                const difTiempo = tiempoTranscurrido(personaje.createdAt)
                contenedor.insertAdjacentElement("afterbegin", card(personaje, difTiempo,contenido('')));
             })
        }else if(!boolean){
            let fil = filtrado(Array.from(data), palabraClave)
            console.log(fil)
            contenedor.innerHTML='';
            fil.forEach((personaje) => {
                const difTiempo = tiempoTranscurrido(personaje.createdAt)
                contenedor.insertAdjacentElement("afterbegin", card(personaje, difTiempo,contenido('')));
             })
        }
    } catch (error) {
        console.log('get', error);
    }
}

const postComment = async (formulario) => {
    try {
        // const response = await fetch(`${urlFirebase}/.json`,{
        const response = await fetch(`${urlFirebase}/posts/`,{
        method: 'POST',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify(formulario),
        });
        console.log(formulario)
    } catch (error) {
        console.log('post:', error)
    }
}

const patch = async (persona,id) => {
    try {
        const response = await fetch(`${urlFirebase}/comments/${id}`,{
        method: 'PATCH',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        body: JSON.stringify({
            title: persona.title,
            content: persona.content,
            imageURL: persona.imageURL,
            author:"63ffa9357217497eb9b64bd4"
        })
    })
    console.log(body)

    } catch (error) {
        console.log('patch:', error)
    }
}

const del = async (id) => {
    try {
        const response = await fetch(`${urlFirebase}/comments/${id}`,{
        method: 'DELETE',
        headers : { 'Content-Type': 'application/json;charset=UTF-8'},
        });
    } catch (error) {
        console.log('delete:', error)
    }
}
export { get, getEdit ,getAll, postComment, patch, del }