// pour mieux organiser le code on regroupe l'affichage des message d'erreur dans un objet

const message = {
    addMessageToElement: function(messageContent, parentElement){

        //suppression des anciens messages
        messages.removeOldMessages(parentElement);

        //création de l'élement qui contiendra le message
        const messageElement = document.createElement('p');
        //ajout de la classe message
        messageElement.classList.add('message');
        //modification du contenu 
        messageElement.textContent = messageContent;
        //selection de l'élement dans lequel on veut ajouter le message
        parentElement.append(messageElement);

        },

        removeOldMessages: function(parentElement){
            const oldMessages = parentElement.querySelectorAll('.message');
            for (const singleOldMessage of oldMessages){
                singleOldMessage.remove();
            }
        }
}