const theme = {
    init: function() {
        //console.log('je passe dans init');

        // récupérer le bouton "Lune"
        const darkModeButton = document.getElementById('theme-switch');

        // ajouter l'écouteur d'évènement
        darkModeButton.addEventListener('click', theme.toggleDarkMode);

        // on récupère le choix du darkMode dans le localStorage
         // et on met à jour l'affichage
         theme.loadDarkModeFromStorage();
    },

    toggleDarkMode: function() {

        // on récupère l'élément sur lequel on doit intervenir, ici l'élément <body>
        const bodyElement = document.querySelector('body');

        // Avec toggle, cela permet directement d'ajouter la classe si elle n'est pas présente
        // et de la supprimer si elle déjà présente
        bodyElement.classList.toggle('theme-dark');

        //ons auvegarde le choix de darkMode
        theme.saveDarkModeInStorage();
        },

        loadDarkModeFromStorage: function(){

            //on recup la valeur du darkmode depuis le local storage
            const isdarkMode = Json.parse(localStorage.getItem('darkMode'));

            //on passe en affichage darkmode si necessaire
            if (isdarkMode){
                document.body.classList.add('theme-dark');
            }
        },

        saveDarkModeInStorage: function (){
            // il fuat savoir si le darkmode est activé ou non 
            let isdarkMode = false;
            if (document.body.classList.contains('theme-dark')){
                isdarkMode = true;
            }

             // on sauvegarde dans le localstorage
             localStorage.setItem('darkMode', JSON.stringify(isdarkMode));
        }
};

document.addEventListener('DOMContentLoaded', theme.init);
