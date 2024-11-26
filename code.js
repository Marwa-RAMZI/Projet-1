ocument.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("commandeForm");
    const errorMessageDiv = document.getElementById("error-message");
    const totalInput = document.getElementById("total");
    const quantityInput = document.getElementById("quantite");
    
    // Calculer le total de la commande
    function calculateTotal() {
        const pricePerUnit = 100; // Exemple de prix par unité
        const quantity = parseInt(quantityInput.value);
        if (!isNaN(quantity) && quantity > 0) {
            totalInput.value = pricePerUnit * quantity + " MAD"; // Afficher le total en dirhams
        } else {
            totalInput.value = "";
        }
    }

    // Écouter les changements sur le champ de quantité
    quantityInput.addEventListener("input", calculateTotal);

    // Validation du formulaire
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire

        // Réinitialiser le message d'erreur
        errorMessageDiv.textContent = "";

        // Vérifier que tous les champs obligatoires sont remplis
        const nom = document.getElementById("nom").value;
        const adresse = document.getElementById("adresse").value;
        const codePostal = document.getElementById("codePostal").value;
        const telephone = document.getElementById("telephone").value;
        const quantite = document.getElementById("quantite").value;

        if (!nom || !adresse || !codePostal || !telephone || !quantite) {
            errorMessageDiv.textContent = "Veuillez remplir tous les champs obligatoires.";
            return;
        }

        // Si tout est valide, vous pouvez soumettre le formulaire (ou faire une action)
        alert("Commande passée avec succès !");
        form.reset(); // Réinitialiser le formulaire
        totalInput.value = ""; // Réinitialiser le champ total
    });
});