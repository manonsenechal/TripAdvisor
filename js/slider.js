const slider = {
    sliderImageElements: [],

    currentIndex: 0,

    init: function() {
        slider.generateSliderImages();

        // On récupère les éléments images dans une liste
        slider.sliderImageElements = document.querySelectorAll('.slider__img');
     
        // On ajoute les écouteurs d'évènements sur les boutons suivant/précédent
        slider.addEvents();
    },

    addEvents: function() {
        // on récupère les boutons précédent et suivant
        const sliderButtons = document.querySelectorAll('.slider__btn');

        // on place un écouteur d'évènement sur le bouton précédent
        const previousSliderButton = sliderButtons[0];
        previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);

        // on place un écouteur d'évènement sur le bouton suivant
        const nextSliderButton = sliderButtons[1];
        nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
    },

    handleClickPreviousSlide: function() {
      
    },

    handleClickNextSlide: function() {
        // pour passer à l'image suivante, on commence par changer l'index
        slider.currentIndex++;

        // Si après avoir incrémenté l'index, celui-ci est égale à la longueur du tableau 
        // on repasse à la première image
        if (slider.currentIndex === slider.sliderImageElements.length) {
            slider.currentIndex = 0;
        }

        slider.refreshCurrentImage();
    },

    // méthode chargée de caché l'ancienne image et d'afficher la nouvelle image courante
    refreshCurrentImage: function() {
        // on cache la précédente image affichée
        document.querySelector('.slider__img--current').classList.remove('slider__img--current');

        // on affiche la nouvelle image courante
        const imgElement = slider.sliderImageElements[slider.currentIndex];
        imgElement.classList.add('slider__img--current');
    },

    generateSliderImages: function() {
        const sliderImages = [
            'ocean.jpg',
            'ski.jpg',
            'city.jpg'
        ];

        // On sélectionne l'élément parent qui va accueillir les nouveaux éléments image
        const sliderContainer = document.querySelector('.slider');

      
        for (const currentImage of sliderImages) {

            // on crée une balise <img>
            const newSliderImage = document.createElement('img');

            // on ajoute les attributs nécessaires
            // - l'attribut src
            newSliderImage.src = "img/" + currentImage;
            // - l'attribut alt
            newSliderImage.alt = "Image du slider";
            // - l'atttribut class
            newSliderImage.classList.add('slider__img');

            // On ajoute l'élément image (créé précédemment) dans le slider
            sliderContainer.prepend(newSliderImage);
        }

        // on ajoute la classe slider__img--current sur la première image
        document.querySelector('.slider__img').classList.add('slider__img--current');
    }
};

document.addEventListener('DOMContentLoaded', slider.init);