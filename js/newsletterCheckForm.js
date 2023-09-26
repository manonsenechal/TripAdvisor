function handleNewsletterSubmit(evt){
    // on empêche le rechargement de la page 
    evt.preventDefault();

    //sélection du champ input (ou l'utilisateur saisi son mail)
    const emailInputElement = document.getElementById('subscriber-email');
    // on récupère la valeur du champ 
    const email = emailInputElement.ariaValueMax;

    //si c'est un email interdit 
    if (isForbiddenEmail(email)) {
            //on affiche un message d'erreur donc on crée un élément paragraphe
            const newParagraphElement = document.createElement('p');
            //on ajoute la classe message 
            newParagraphElement.classList.add('message');
            //on modofie le contenu interne
            newParagraphElement.textContent = "les adresses jetables ne sont pas autorisées.";
            // on selectionne l'élément dans lequel on veut ajouter le paragraphe
            const newsletterPopUpElement = document.querySelector('.newsletter');
            newsletterPopUpElement.append(newParagraphElement);
        }
}

//on créer la fonction qui vérifie le mail fourni en paramètre 
function isForbiddenEmail(emailToCheck){
    // on parcour la liste des domaines interdit et on vérifie pour chacun si l'email en fait partie
    for (const singleDomain of forbiddenDomains){
        //la fonction includes permet de savoir si la chaine de caracteres emailToCheck contient la valeur fournie en argument d'includes (singleDomain)
        if (emailToCheck.includes(singleDomain)){
            return true;
        }
    }

    //si on arrive après la boucle c'est que l'email n'appartient pas au domaine interdit 
     return false; 
}

const forbiddenDomains = [
    '@yopmail.com',
    '@yopmail.fr',
    'yopmail.net',
    '@cool.fr.nf',
     '@jetable.fr.nf',
     '@courriel.fr.nf',
     '@moncourrier.fr.nf',
     '@monemail.fr.nf',
     '@monmail.fr.nf',
     '@hide.biz.st',
     '@mymail.infos.st',
];

//selection du form
const newsletterFormElement = document.querySelector('.newsletter form');
// ajout de l'écouteur d'évènement
newsletterFormElement.addEventListener('submit', handleNewsletterSubmit);
