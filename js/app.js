// js/app.js

// Définition des routes
const routes = {
    'artistes': {
        title: 'Découvrez les artistes',
        content: `
            <section class="wrapper">
                <h1 class="page-title">Découvrez les artistes</h1>
                <section class="artists-grid"></section>
            </section>
        `,
        css: 'css/artist.css',
        js: 'js/artist.js'
    },
    'badbunny': {
        title: 'Bad Bunny',
        content: `<main></main>`,
        css: 'css/badbunny.css',
        js: 'js/badbunny.js'
    }
};

// Fonction pour charger dynamiquement le contenu
async function loadContent(path) {
    const main = document.querySelector('main');
    const routeParts = path.split('/');
    const baseRoute = routeParts[0];

    const route = routes[baseRoute];

    if (!route) {
        console.error('Route non trouvée:', path);
        return;
    }

    document.title = `Mitriiini - ${route.title}`;

    document.querySelectorAll('link[data-dynamic]').forEach(link => link.remove());
    if (route.css) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = route.css;
        link.dataset.dynamic = 'true';
        document.head.appendChild(link);
    }
    
    document.querySelectorAll('script[data-dynamic]').forEach(script => script.remove());
    if (route.js) {
        const oldScript = document.querySelector(`script[src="${route.js}"]`);
        if (oldScript) oldScript.remove();
        
        const script = document.createElement('script');
        script.src = route.js;
        script.dataset.dynamic = 'true';
        document.body.appendChild(script);
        
        script.onload = () => {
            if (typeof initPage === 'function') {
                initPage(routeParts);
            }
        };
    } else {
        main.innerHTML = route.content;
    }
}

// Gérer la navigation
function handleNavigation(event) {
    const target = event.target.closest('a[data-route], a[data-artist]');
    if (target) {
        event.preventDefault();
        const route = target.dataset.route || target.dataset.artist;
        window.history.pushState(null, '', `#${route}`);
        loadContent(route);
    }
}

// Gérer le clic sur les cartes d'artiste
function handleArtistClick(event) {
    const artistCard = event.target.closest('.artist-card');
    if (artistCard) {
        event.preventDefault();
        const artistKey = artistCard.dataset.artist;
        window.history.pushState(null, '', `#${artistKey}`);
        loadContent(artistKey);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.sidebar').addEventListener('click', handleNavigation);

    window.addEventListener('popstate', () => {
        const path = window.location.hash.substring(1) || 'artistes';
        loadContent(path);
    });

    document.querySelector('main').addEventListener('click', handleArtistClick);

    const initialPath = window.location.hash.substring(1) || 'artistes';
    loadContent(initialPath);
});