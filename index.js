import { get, getAll, post, patch, del } from './src/js/firebase.js';

const articles = document.querySelector('#articles');
const button_addon2 = document.querySelector('#button-addon2')

getAll(articles,true,'')

articles.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.id.includes('-N')){
        window.location.href = `./src/article.html?persona=${event.target.id}`
    }
})


button_addon2.addEventListener('click', (event) => {
    event.preventDefault();
    const searchMain = document.querySelector('#searchMain');
    getAll(articles, false, searchMain.value)
   
})


