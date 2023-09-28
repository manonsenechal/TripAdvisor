const theme = {
    init: function() {
        //console.log('je passe dans init');

        // récupérer le bouton "Lune"
        const darkModeButton = document.getElementById('theme-switch');

        // ajouter l'écouteur d'évènement
        darkModeButton.addEventListener('click', theme.toggleDarkMode);

        // on sélectionne les 3 boutons de changement de thème
        const colorButtonElements = document.querySelectorAll('.theme-button');
       
        // on place les écouteurs d'évènements sur les 3 boutons de changement de thème
        for (const singleColorButtonElement of colorButtonElements) {
            singleColorButtonElement.addEventListener('click', theme.handleThemeColorClick);
        }

        // on récupère le choix du darkMode dans le localStorage
         // et on met à jour l'affichage
         theme.loadDarkModeFromStorage();

        // on récupère également le choix du thème
        theme.loadThemeFromStorage();
    },

    handleThemeColorClick: function(evt) {
        // on récupère la pastille sur laquelle on a cliqué
        const clickedColorButtonElement = evt.currentTarget;
   
        // on récupère l'id de cet élément
        const themeClassName = clickedColorButtonElement.id;

        theme.changeColorTheme(themeClassName);
        // sauvegarde du choix du theme dans le localstorage
        //valeur est une string donc pas besoin de convertir en JSON
        localStorage.setItem('colorTheme', themeClassName);
    },

    changeColorTheme: function(colorTheme) {

    // Récupération de l'élément <body>
    const bodyElement = document.body;

    // Pour éviter les conflits dans l'application des styles dû au fait qu'il y aurait
    // plusieurs classes de thème différentes, on commence par supprimer la classe
    // du thème courant
    bodyElement.classList.remove('theme-green', 'theme-red', 'theme-blue');

    // Ajout de la classe du nouveau thème sélectionné
    bodyElement.classList.add(colorTheme);

    // on change l'image du logo
    const imgLogoElement = document.querySelector('.logo__image');

    imgLogoElement.src = 'img/logo-' + colorTheme + '.png';

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

        loadThemeFromStorage: function () {
            // on récupère le thème depuis le localStorage
            const colorTheme = localStorage.getItem('colorTheme');
            console.log('colorTheme', colorTheme);
   
            // Si on récupère bien une valeur ?
            if (colorTheme !== null) {
                theme.changeColorTheme(colorTheme);
            }
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
