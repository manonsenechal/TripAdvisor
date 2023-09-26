function generateSliderImages() {
    const sliderImages = [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg'
    ];

    // On sélectionne l'élément parent qui va accueillir les nouveaux éléments image
    const sliderContainer = document.querySelector('.slider');

    // On parcourt le tableau d'images
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

generateSliderImages();