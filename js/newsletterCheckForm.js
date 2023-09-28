function handleNewsletterSubmit(evt){

    //sélection du champ input (ou l'utilisateur saisi son mail)
    const emailInputElement = document.getElementById('subscriber-email');
    // on récupère la valeur du champ 
    const email = emailInputElement.ariaValueMax;

    //si c'est un email interdit 
    if (isForbiddenEmail(email)) {

            // on empêche le rechargement de la page 
            evt.preventDefault();

            //on affiche un message d'erreur 
            const newsletterPopUpElement = document.querySelector('.newsletter');
            messages.addMessageToElement("Merci de saisir une adresse mail valide.", newsletterPopUpElement);
            
            //setTimeout supprime le message après 3secondes

           // setTimeout(function(){newParagraphElement.remove()}, 3000);
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
