// Attend que le document soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les éléments avec la classe 'counter-number'
    var counters = document.querySelectorAll('.counter-number');

    // Pour chaque compteur, commence l'animation
    counters.forEach(function(counter) {
        var speed = parseInt(counter.getAttribute('data-speed')); // Vitesse de l'animation en millisecondes
        var from = parseInt(counter.getAttribute('data-from'));   // Valeur de départ
        var to = parseInt(counter.getAttribute('data-to'));       // Valeur d'arrivée

        // Vérifie que les valeurs 'from' et 'to' sont des nombres valides
        if (!isNaN(from) && !isNaN(to)) {
            var current = from;
            var increment = to > from ? 1 : -1;
            var interval = Math.abs(Math.floor(speed / (to - from)));

            // Commence l'animation
            var timer = setInterval(function() {
                current += increment;
                counter.textContent = current;

                // Arrête l'animation lorsque la valeur d'arrivée est atteinte
                if (current == to) {
                    clearInterval(timer);
                }
            }, interval);
        }
    });
});
