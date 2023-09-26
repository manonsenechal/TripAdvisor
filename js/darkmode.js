// Cette fonction doit activer le dark mode s'il n'est pas activé
// et désactiver le dark mode s'il est déjà activé
function toggleDarkMode() {

    // on récupère l'élément sur lequel on doit intervenir, ici l'élément <body>
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);

    // Si la classe theme-dark est déjà présente sur l'élément body ?
    if (bodyElement.classList.contains('theme-dark')) {
        // alors on l'enlève
        bodyElement.classList.remove('theme-dark');
    } else {
        // sinon on l'ajoute
        bodyElement.classList.add('theme-dark');
    }

}