// Initialisation de Firebase (les SDK Firebase sont chargés dans index.html et login.html)
const auth = firebase.auth();
const userProfilePic = document.getElementById('userProfilePic'); // Peut être null si on est sur login.html
const userProfileContainer = document.getElementById('userProfileContainer'); // Peut être null si on est sur login.html
const googleLoginButton = document.getElementById('googleLoginButton'); // Peut être null si on n'est PAS sur login.html

// Chemins vers vos images et pages (mis à jour)
const DEFAULT_PROFILE_PIC = 'images/jpg/default/default.jpg'; // <-- THIS LINE IS UPDATED
const RESTRICTED_PAGE_URL = '/Restricted';
const LOGIN_PAGE_URL = '/Login';
const HOMEPAGE_URL = '/';

// Clé pour stocker l'URL précédente dans sessionStorage
const LAST_PAGE_KEY = 'lastPageBeforeLogin';

// --- Fonctions de gestion de l'UI et de l'authentification ---

// Met à jour l'image de profil et l'action du clic sur le bouton circulaire
function updateProfileButtonUI(user) {
    if (userProfilePic && userProfileContainer) { // S'assurer que les éléments existent (pas sur login.html)
        if (user) {
            // Utilisateur connecté
            userProfilePic.src = user.photoURL || DEFAULT_PROFILE_PIC;
            userProfilePic.alt = user.displayName || 'User Profile';
            userProfileContainer.onclick = logoutUser; // Au clic, déconnexion
            userProfileContainer.title = `Connecté(e) en tant que ${user.displayName || 'Utilisateur'}. Cliquez pour vous déconnecter.`;
        } else {
            // Utilisateur déconnecté
            userProfilePic.src = DEFAULT_PROFILE_PIC;
            userProfilePic.alt = 'Default Profile';
            userProfileContainer.onclick = redirectToLoginPage; // Au clic, rediriger vers Login
            userProfileContainer.title = 'Cliquez pour vous connecter';
        }
    }
}

// Redirige vers la page de connexion et stocke l'URL actuelle
function redirectToLoginPage() {
    // Ne pas stocker l'URL si on est déjà sur la page de login ou la homepage
    const currentPath = window.location.pathname;
    if (currentPath !== LOGIN_PAGE_URL && currentPath !== HOMEPAGE_URL) {
        sessionStorage.setItem(LAST_PAGE_KEY, currentPath + window.location.search);
        console.log("Dernière page enregistrée:", sessionStorage.getItem(LAST_PAGE_KEY));
    } else if (currentPath === HOMEPAGE_URL) {
        // Si on est sur la homepage, stocker la homepage pour y revenir
        sessionStorage.setItem(LAST_PAGE_KEY, HOMEPAGE_URL);
    }
    window.location.href = LOGIN_PAGE_URL;
}

// Fonction pour se connecter avec Google
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            // L'utilisateur est connecté. La redirection sera gérée par onAuthStateChanged.
            console.log('Utilisateur connecté :', result.user.displayName);
        })
        .catch((error) => {
            console.error('Erreur de connexion Google :', error);
            if (error.code === 'auth/popup-closed-by-user') {
                console.log('Fenêtre de connexion fermée par l\'utilisateur.');
            }
        });
}

// Fonction pour déconnecter l'utilisateur
function logoutUser() {
    auth.signOut()
        .then(() => {
            console.log('Utilisateur déconnecté.');
            // Si l'utilisateur est sur une page restreinte après déconnexion, le rediriger vers l'accueil
            if (window.location.pathname === RESTRICTED_PAGE_URL) {
                window.location.href = HOMEPAGE_URL;
            }
            // L'UI sera mise à jour par onAuthStateChanged
        })
        .catch((error) => {
            console.error('Erreur lors de la déconnexion :', error);
        });
}

// --- Écouteurs d'événements et logique principale ---

// Écoute les changements d'état d'authentification Firebase
auth.onAuthStateChanged(user => {
    // Met à jour le bouton de profil si présent
    updateProfileButtonUI(user);

    // Logique de redirection après connexion
    if (user && window.location.pathname === LOGIN_PAGE_URL) {
        // L'utilisateur vient de se connecter depuis la page de login
        const lastPage = sessionStorage.getItem(LAST_PAGE_KEY);
        if (lastPage) {
            sessionStorage.removeItem(LAST_PAGE_KEY); // Supprimer l'entrée après utilisation
            window.location.href = lastPage;
        } else {
            // Si pas de dernière page enregistrée (ex: accès direct à /Login), rediriger vers l'accueil
            window.location.href = HOMEPAGE_URL;
        }
    } 
    // Logique de redirection si on est sur une page restreinte et déconnecté
    else if (!user && window.location.pathname === RESTRICTED_PAGE_URL) {
        sessionStorage.setItem(LAST_PAGE_KEY, window.location.pathname + window.location.search); // Stocker la page restreinte pour y revenir
        window.location.href = LOGIN_PAGE_URL; // Rediriger vers la page de connexion
    }
});

// Exécuter ce code une fois le DOM chargé
document.addEventListener('DOMContentLoaded', () => {
    // Si nous sommes sur la page de connexion, attacher l'écouteur au bouton de connexion Google
    if (googleLoginButton) {
        googleLoginButton.addEventListener('click', signInWithGoogle);
    }

    // Mettre à jour l'UI du bouton de profil dès le chargement si l'utilisateur est déjà connecté
    // C'est important pour les pages autres que login.html
    updateProfileButtonUI(auth.currentUser);
});