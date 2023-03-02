
const card = (post, difTiempo, contenido) => {

    //todo lo de abajo va dentro de articleCard
    const articleCard = document.createElement('article');//1
          articleCard.classList.add('card', 'm-3');
    const imgCardPrincipal = document.createElement('img');//1-1
          imgCardPrincipal.classList.add('card-img-top');
          imgCardPrincipal.src = post.urlImagenPrincipal;//aquiiiiiiiiiii
    const divCardBody = document.createElement('div');//1-2
          divCardBody.classList.add('card-body');
    articleCard.appendChild(imgCardPrincipal);
    articleCard.appendChild(divCardBody);
    //todo lo de abajo va dentro de divCardBody
    const divCardUserDetails = document.createElement('div');
          divCardUserDetails.classList.add('card__userDetails', 'd-flex', 'align-items-center', 'mb-2');
    const aArticleHtml = document.createElement('a');
          aArticleHtml.href = './src/article.html';
    const ulFlexWrap = document.createElement('ul');
          ulFlexWrap.classList.add('d-flex', 'flex-wrap', 'p-0', 'ms-4');
    const divCardButtons = document.createElement('div');
          divCardButtons.classList.add('card__buttons', 'd-flex', 'ms-4');
    divCardBody.appendChild(divCardUserDetails);//listo
    divCardBody.appendChild(aArticleHtml);//listo
    divCardBody.appendChild(ulFlexWrap);//listo
    divCardBody.appendChild(divCardButtons);//listo
    //todo lo de abajo va dentro de divCardUserDetails
    const imgUser = document.createElement('img');
          imgUser.src = '../Assets/Imagenes/vincent.webp';
    const divUserdetails = document.createElement('div');
          divUserdetails.classList.add('d-flex', 'flex-column');
    divCardUserDetails.appendChild(imgUser);
    divCardUserDetails.appendChild(divUserdetails)
    //todo lo de abajo va dentro de divUserdetails
    const pNameUser = document.createElement('p');
          pNameUser.classList.add('fw-bold');
          pNameUser.textContent = 'Zoy'//post.name;//aquiiiiiiiiii
    const pTime = document.createElement('p');
          pTime.classList.add('time');
          pTime.textContent = '27 feb  2023'//post.dateCreated;//aquiiiiiiiiii
    divUserdetails.appendChild(pNameUser);
    divUserdetails.appendChild(pTime);
    //todo lo de abajo va dentro de aArticleHtml
    const h3CardTtitle = document.createElement('h3');
          h3CardTtitle.classList.add('card-title', 'ms-4');
          h3CardTtitle.id =post.id
          h3CardTtitle.textContent = post.floatingTextarea;//aquiiiiiiii
    aArticleHtml.appendChild(h3CardTtitle);
    //todo lo de abajo va dentro de ulFlexWrap
    const liWeekly = document.createElement('li');
    const aWeekly = document.createElement('a');
          aWeekly.textContent = '#Weekly';
          liWeekly.appendChild(aWeekly);
    const liWeebdev = document.createElement('li');
    const aWeebdev = document.createElement('a');
          aWeebdev.textContent = '#Wedbev';
          liWeebdev.appendChild(aWeebdev);
    const liBeginners = document.createElement('li');
    const aBeginners = document.createElement('a');
          aBeginners.textContent = '#Beginners';
          liBeginners.appendChild(aBeginners);
    ulFlexWrap.appendChild(liWeekly);
    ulFlexWrap.appendChild(liWeebdev);
    ulFlexWrap.appendChild(liBeginners);
    //todo lo de abajo va dentro de divCardButtons
    const divIteractions = document.createElement('div');
          divIteractions.classList.add('interactions', 'd-flex');
    const divTools = document.createElement('div');
          divTools.classList.add('tools', 'd-flex')
    divCardButtons.appendChild(divIteractions);//listo
    divCardButtons.appendChild(divTools)
    //todo lo de abajo va dentro de divIteractions
    const divReactions = document.createElement('div');
          divReactions.classList.add('reactions', 'd-flex', 'me-4');
    const divComents = document.createElement('div');
          divComents.classList.add('comments', 'd-flex');
    divIteractions.appendChild(divReactions);
    divIteractions.appendChild(divComents);
    //todo lo de abajo va dentro de divReactions
    const imgIconolike = document.createElement('img');
          imgIconolike.src = '../Assets/iconos/like.svg';
    const pReactions = document.createElement('p');
          pReactions.textContent = '2 reactions';
    divReactions.appendChild(imgIconolike);
    divReactions.appendChild(pReactions);
    //todo lo de abajo va dentro de divComents
    const imgIconoComents = document.createElement('img');
          imgIconoComents.src = '../Assets/iconos/comment.svg';
    const pAddComents = document.createElement('p');
          pAddComents.textContent = 'Add comment';
    divComents.appendChild(imgIconoComents);
    divComents.appendChild(pAddComents);
    //todo lo de abajo va dentro de divTools
    const pTimeRead = document.createElement('p');//aquiiiiiiii
          pTimeRead.textContent = difTiempo;
    const imgIconosSave = document.createElement('img');
          imgIconosSave.src = '../Assets/iconos/save.svg';
    divTools.appendChild(pTimeRead);
    divTools.appendChild(imgIconosSave);

    articleCard.appendChild(contenido)

    return articleCard;
}

const contenido = (post) =>{
      const divCar = document.createElement('div');
      divCar.classList.add('card', 'border-0');
      const divCardContenido = document.createElement('div');
      divCardContenido.classList.add('card-body');
      const creandoP = document.createElement('p')
      creandoP.classList.add('card-text')
      creandoP.textContent = post.floatingTextarea2;
      divCar.appendChild(divCardContenido)
      divCardContenido.appendChild(creandoP)
      return divCar
}

export { card, contenido }