const destinations = {

    //on stocke le message de connexion dans une propriété de l'objet 
    notLoggedInUserMessage:'Vous devez être connecté pour gérer vos favoris',

    init: function(){
        destinations.addEvents();
    },

    addEvents: function(){
        //selection de l'element coeur correspondant à l'ajout en fav
        const likeElements = document.querySelectorAll('.btn__like');
        //impossible de faire un addeventlistener sur une liste 
        for (const singleLikeElement of likeElements){
            singleLikeElement.addEventListener('click',destinations.handleLikeClick);
        }
    },

    handleLikeClick: function (evt){
        //on a besoin de savoir sur quel bouton fav on a cliqué pour ajouter le message d'erreur
        const clickedLikeButtonElement = evt.currentTarget;

        //closest permet d'aller chercher le premier ancêtre qui correspond au selecteur css fourni en argument
        const cardElement = clickedLikeButtonElement.closest('.card');
        //ajout du message d'erreur
        message.addMessageToElement(destinations.notLoggedInUserMessage, cardElement);
    }
};

// pour initialiser le module on demande a executer la méthode init 
// si on apppelle init une fois le DOM chargé cela permet d'être sûr que le dom est complètement disponible
// avant par exemple d'ajouter les ecouteurs d'evenements
document.addEventListener('DOMContentLoaded', destinations.init);