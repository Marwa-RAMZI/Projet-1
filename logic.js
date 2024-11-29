// Calculer le total
const calculTotal = () => {
    const quantite = document.getElementById('quantite').value || 0;
    document.getElementById('montant').textContent = `${(quantite * 250).toFixed(2)} DH`;
};

// Valider le formulaire
const validerFormulaire = (event) => {
    event.preventDefault(); // Empêche l'envoi automatique du formulaire
    resetErrorMessages(); // Réinitialise les messages d'erreur

    let isValid = true;
    const champsObligatoires = ['nom', 'adresse', 'code', 'tel', 'quantite'];

    champsObligatoires.forEach(id => {
        const valeur = document.getElementById(id).value.trim();
        if (!valeur) {
            afficherErreur(`error-${id}`, `Champ obligatoire.`);
            isValid = false;
        }
    });

    ['code', 'tel'].forEach(id => {
        const regex = id === 'code' ? /^\d{5}$/ : /^\d{5,10}$/;
        if (!regex.test(document.getElementById(id).value)) {
            afficherErreur(`error-${id}`, "Champ invalide.");
            isValid = false;
        }
    });

    // Si le formulaire est valide, afficher le message de succès
    if (isValid) {
        document.getElementById('message-succes').style.display = 'block'; // Affiche le message de succès
    }
};

// Afficher les erreurs
const afficherErreur = (id, message) => document.getElementById(id).textContent = message;

// Réinitialiser les erreurs
const resetErrorMessages = () => {
    ['nom', 'adresse', 'code', 'tel', 'quantite'].forEach(id => {
        document.getElementById(`error-${id}`).textContent = '';
    });
};

// Ajouter les événements
document.getElementById('commande').addEventListener('submit', validerFormulaire);
document.getElementById('quantite').addEventListener('input', calculTotal);