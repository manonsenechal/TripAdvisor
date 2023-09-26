// on fait toujours commencer des gestionnaires d"évènement par handle (par convention)

function handleClickNewsletterMenu(evt){
    // on utilise le preventDefault pour eviter le rechargement auto de la page à chaque clic

    evt.preventDefault();
    
    // on recupère l'encart newsletter 
const newsletterPopUpElement = document.querySelector('.newsletter');
// on ajout la classe newsletter-on sur l'élément encart de newsletter
newsletterPopUpElement.classList.add('newsletter-on'); 

}
function handleClickCloseNewsletter(){

    // on recupère l'encart newsletter 
    const newsletterPopUpElement = document.querySelector('.newsletter');
    //on retire la classe newsletter-on sur l'élément encart newsletter
    newsletterPopUpElement.classList.remove('newsletter-on');

}
//selection de l'élément newsletter dans le menu
 const newsletterMenuItem = document.getElementById('newsletter-link');
 //ajout de l'écouteur d'evênement
 newsletterMenuItem;addEventListener('click', handleClickNewsletterMenu);
// on sélectionne l'élément croix de fermeture présent sur l'encart newsletter
const newsletterClosePopUpElement = document.querySelector('.newsletter__close');
// on ajout l'écouteur d'évènement au clic sur la croix
newsletterClosePopUpElement.addEventListener('click', handleClickCloseNewsletter);