const reviewsFilter = {
    init: function() {
        reviewsFilter.addEvents();
    },

    addEvents: function() {
        // on récupère la liste de cases à cocher (checkbox)
        // utilisation d'un sélecteur basé sur la valeur d'un attribut avec [attribut=value]
        const ratingCheckboxList = document.querySelectorAll('.filter [name="rating"]');

        // on ajoute les écouteurs d'évènements sur chaque élément de la liste
        for (const ratingCheckboxElement of ratingCheckboxList) {
            ratingCheckboxElement.addEventListener('change', reviewsFilter.handleChanceOnRatingCheckbox);
        }
    },

    handleChanceOnRatingCheckbox: function(evt) {
        // on récupère la checkbox à qui on a changé la valeur
        const ratingCheckboxElement = evt.currentTarget;
        // on récupère la valeur associée à cette checkbox
        const ratingCheckboxValue = ratingCheckboxElement.value;

        // on récupère uniquement les commentaires qui correspondent à la note de la checkbox
        const reviewElementsToUpdate = 
            document.querySelectorAll('[data-rating="' + ratingCheckboxValue + '"]');

        console.log('reviewElementsToUpdate ', reviewElementsToUpdate);

        
        for (const singleReviewElementToUpdate of reviewElementsToUpdate) {
            // on met à jour l'affichage :
            // - si la checkbox est cochée, on affiche le commentaire
            // - sinon on cache le commentaire
     
            if (ratingCheckboxElement.checked) {
                // on affiche le commentaire
                singleReviewElementToUpdate.classList.remove('review--hidden');
            } else {
                // on cache le commentaire
                singleReviewElementToUpdate.classList.add('review--hidden');
            }

        }
    }
};

document.addEventListener('DOMContentLoaded', reviewsFilter.init);