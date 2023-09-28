const theme = {
    init: function() {
        //console.log('je passe dans init');

        // récupérer le bouton "Lune"
        const darkModeButton = document.getElementById('theme-switch');

        // ajouter l'écouteur d'évènement
        darkModeButton.addEventListener('click', theme.toggleDarkMode);
    },

    toggleDarkMode: function() {

        // on récupère l'élément sur lequel on doit intervenir, ici l'élément <body>
        const bodyElement = document.querySelector('body');

        // Avec toggle, cela permet directement d'ajouter la classe si elle n'est pas présente
        // et de la supprimer si elle déjà présente
        bodyElement.classList.toggle('theme-dark');
    }
};

document.addEventListener('DOMContentLoaded', theme.init);
