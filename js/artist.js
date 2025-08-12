// js/artist.js

const artists = [
  {
    name: "Bad Bunny",
    artistKey: "badbunny",
    image: "badbunny.jpg"
  },
  {
    name: "Betia",
    artistKey: "betia",
    image: "betia.jpg"
  },
  {
    name: "Billie Eilish",
    artistKey: "billieeilish",
    image: "billieeilish.jpg"
  },
  {
    name: "Bruno Mars",
    artistKey: "brunomars",
    image: "brunomars.jpg"
  },
  {
    name: "BTS",
    artistKey: "bts",
    image: "bts.jpg"
  },
  {
    name: "Ceis",
    artistKey: "ceis",
    image: "ceis.jpg"
  },
  {
    name: "Central Cee",
    artistKey: "centralcee",
    image: "centralcee.jpg"
  },
  {
    name: "Conan Gray",
    artistKey: "conangray",
    image: "conangray.jpg"
  },
  {
    name: "Damso",
    artistKey: "damso",
    image: "damso.jpg"
  },
  {
    name: "Duncan Laurence",
    artistKey: "duncanlaurence",
    image: "duncanlaurence.jpg"
  },
  {
    name: "Emile Mosseri",
    artistKey: "emilemosseri",
    image: "emilemosseri.jpg"
  },
  {
    name: "Fran Vasilic",
    artistKey: "franvasilic",
    image: "franvasilic.jpg"
  },
  {
    name: "Gabriel Aplin",
    artistKey: "gabrielaplin",
    image: "gabrielaplin.jpg"
  },
  {
    name: "Gigi Perez",
    artistKey: "gigiperez",
    image: "gigiperez.jpg"
  },
  {
    name: "Giveon",
    artistKey: "giveon",
    image: "giveon.jpg"
  },
  {
    name: "Hosea Marlyn",
    artistKey: "hoseamarlyn",
    image: "hoseamarlyn.jpg"
  },
  {
    name: "IU",
    artistKey: "iu",
    image: "iu.jpg"
  },
  {
    name: "Ivan Cornejo",
    artistKey: "ivancornejo",
    image: "ivancornejo.jpg"
  },
  {
    name: "Jaden Smith",
    artistKey: "jadensmith",
    image: "jadensmith.jpg"
  },
  {
    name: "Jeremy Zucker",
    artistKey: "jeremyzucker",
    image: "jeremyzucker.jpg"
  },
  {
    name: "Joji",
    artistKey: "joji",
    image: "joji.jpg"
  },
  {
    name: "Justin Bieber",
    artistKey: "justinbieber",
    image: "justinbieber.jpg"
  },
  {
    name: "Kevin Kaarl",
    artistKey: "kevinkaarl",
    image: "kevinkaarl.jpg"
  },
  {
    name: "Kresnik",
    artistKey: "kresnik",
    image: "kresnik.jpg"
  },
  {
    name: "Laura Pergolizzi",
    artistKey: "laurapergolizzi",
    image: "laurapergolizzi.jpg"
  },
  {
    name: "Lion Hill",
    artistKey: "lionhill",
    image: "lionhill.jpg"
  },
  {
    name: "Lucas Ravoson",
    artistKey: "lucasravoson",
    image: "lucasravoson.jpg"
  },
  {
    name: "Mad Max",
    artistKey: "madmax",
    image: "madmax.jpg"
  },
  {
    name: "Mahaleo",
    artistKey: "mahaleo",
    image: "mahaleo.jpg"
  },
  {
    name: "Moji x Sboy",
    artistKey: "mojixsboy",
    image: "mojixsboy.jpg"
  },
  {
    name: "Niu Raza",
    artistKey: "niuraza",
    image: "niuraza.jpg"
  },
  {
    name: "Novo Amor",
    artistKey: "novoamor",
    image: "novoamor.jpg"
  },
  {
    name: "Powfu",
    artistKey: "powfu",
    image: "powfu.jpg"
  },
  {
    name: "Rakroots",
    artistKey: "rakroots",
    image: "rakroots.jpg"
  },
  {
    name: "Reko",
    artistKey: "rekoband",
    image: "rekoband.jpg"
  },
  {
    name: "Rex Orange County",
    artistKey: "rexorangecounty",
    image: "rexorangecounty.jpg"
  },
  {
    name: "SenSey",
    artistKey: "sensey",
    image: "sensey.jpg"
  },
  {
    name: "Shikki",
    artistKey: "shikki",
    image: "shikki.jpg"
  },
  {
    name: "Shyn",
    artistKey: "shyn",
    image: "shyn.jpg"
  },
  {
    name: "Shylow Dinasty",
    artistKey: "shylowdinasty",
    image: "shylowdinasty.jpg"
  },
  {
    name: "Solomon",
    artistKey: "solomon",
    image: "solomon.jpg"
  },
  {
    name: "Stromae",
    artistKey: "stromae",
    image: "stromae.jpg"
  },
  {
    name: "Tan Faya",
    artistKey: "tanfaya",
    image: "tanfaya.jpg"
  },
  {
    name: "The Weeknd",
    artistKey: "theweekend",
    image: "theweekend.jpg"
  },
  {
    name: "Trevor Daniel",
    artistKey: "trevordaniel",
    image: "trevordaniel.jpg"
  },
  {
    name: "Tsew The Kid",
    artistKey: "tsewthekid",
    image: "tsewthekid.jpg"
  },
  {
    name: "Wamen",
    artistKey: "wamen",
    image: "wamen.jpg"
  },
  {
    name: "XXXTentacion",
    artistKey: "xxxtentacion",
    image: "xxxtentacion.jpg"
  },
  {
    name: "Yame",
    artistKey: "yame",
    image: "yame.jpg"
  },
  {
    name: "Zenokiz",
    artistKey: "zenokiz",
    image: "zenokiz.jpg"
  }
];

// Fonction pour générer le HTML des artistes
function generateArtistCards() {
  const artistsGrid = document.querySelector('.artists-grid');

  if (!artistsGrid) {
    console.error("L'élément '.artists-grid' n'a pas été trouvé.");
    return;
  }

  artists.forEach(artist => {
    const artistCard = document.createElement('a');
    artistCard.href = `#${artist.artistKey}`; // Lien vers la nouvelle route
    artistCard.className = 'artist-card';
    artistCard.dataset.artist = artist.artistKey; // Ajout d'un attribut pour le routage

    artistCard.innerHTML = `
      <img src="images/jpg/artists/${artist.image}" alt="${artist.name}">
      <div class="artist-info">
        <p class="artist-name">${artist.name}</p>
      </div>
    `;

    artistsGrid.appendChild(artistCard);
  });
}

// Exécuter la fonction une fois le script chargé par app.js
generateArtistCards();