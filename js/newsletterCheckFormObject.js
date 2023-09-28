const newsletterCheckFormObject = {
    forbiddenDomains: [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    init: function() {
        // On sélectionne l'élément <form> situé dans l'encart newsletter
        const newsletterFormElement = document.querySelector('.newsletter form');

        // On lui ajoute l'écouteur d'évènement
        newsletterFormElement.addEventListener('submit', newsletterCheckFormObject.handleNewsletterSubmit);
    },

    handleNewsletterSubmit: function(evt) {
  
        // On sélectionne le champ input qui permet à l'utilisateur de saisir son email
        const emailInputElement = document.getElementById('subscriber-email');

        // On récupère la valeur du champ input
        const email = emailInputElement.value;

        // Si c'est un email interdit on affiche un message d'erreur
        if (newsletterCheckFormObject.isForbiddenEmail(email)) {
            
                  // blocage du chargement auto de la page
            evt.preventDefault();

    
            const newsletterPopupElement = document.querySelector('.newsletter');
            messages.addMessageToElement("Les adresses jetables ne sont pas autorisées.", newsletterPopupElement);
        }
    },

    // Cette méthode vérifie que l'email fourni en paramètre
    // fait partie des domaines interdits,
    // si c'est le cas, on retourne true
    // sinon on retourne false
    isForbiddenEmail: function(emailToCheck) {
        
        for (const singleDomain of newsletterCheckFormObject.forbiddenDomains) {
            // la fonction includes permet de savoir si la chaine de caractères
            // emailToCheck contient la valeur fournie en argument d'includes => le singleDomain

            if  (emailToCheck.includes(singleDomain)) {
                // Si on passe ici, c'est que le domaine de l'email est interdit
                return true;
            }
        }

        // Si on arrive après la boucle for, c'est que l'email
        // n'appartient pas à un domaine interdit
        return false;
    }
};

document.addEventListener('DOMContentLoaded', newsletterCheckFormObject.init);