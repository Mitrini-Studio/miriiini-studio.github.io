const artistData = {
    'badbunny': {
        name: 'Bad Bunny',
        bio: {
            image: 'images/jpg/artists/badbunny.jpg',
            description: `
                Bad Bunny, de son vrai nom Benito Antonio Martínez Ocasio, est un artiste portoricain de renom mondial. Connu pour son style unique mélangeant le reggaeton, le trap latino et des influences de rock, il a su briser les barrières culturelles. Bad Bunny a gagné de multiples Grammy Awards et est devenu une icône de la musique latine, célèbre pour ses textes qui abordent des thèmes comme l'amour, l'inclusion et la justice sociale.
            `
        },
        albums: [
            {
                title: 'DeBÍ TiRAR MáS FOToS',
                year: '2025',
                image: 'images/jpg/album/1.jpg',
                tracks: [
                    { title: 'ALAMBRE PÚA', path: 'audio/badbunny/1/1.mp3' },
                    { title: 'BAILE INOUBLIABLE', path: 'audio/badbunny/1/2.mp3' },
                    { title: 'BOKETE', path: 'audio/badbunny/1/3.mp3' },
                    { title: 'CAFÉ CON RON', path: 'audio/badbunny/1/4.mp3' },
                    { title: 'CAMPEÓN', path: 'audio/badbunny/1/5.mp3' },
                    { title: 'DtMF', path: 'audio/badbunny/1/6.mp3' },
                    { title: 'EL CLÚB', path: 'audio/badbunny/1/7.mp3' },
                    { title: 'EoO', path: 'audio/badbunny/1/8.mp3' },
                    { title: 'KETU TeCRÉ', path: 'audio/badbunny/1/9.mp3' },
                    { title: 'LA MuDANZA', path: 'audio/badbunny/1/10.mp3' },
                    { title: 'NUEVAYoL', path: 'audio/badbunny/1/11.mp3' },
                    { title: 'Pa Ti', path: 'audio/badbunny/1/12.mp3' },
                    { title: 'PIToRRO DE COCO', path: 'audio/badbunny/1/13.mp3' },
                    { title: 'TURiSTA', path: 'audio/badbunny/1/14.mp3' },
                    { title: 'Una Velita', path: 'audio/badbunny/1/15.mp3' },
                    { title: 'VeLDÁ', path: 'audio/badbunny/1/16.mp3' },
                    { title: 'VOY A LLeVARTE PA PR', path: 'audio/badbunny/1/17.mp3' },
                ]
            },
            {
                title: 'Nadie Sabe Lo Que Va a Pasar Mañana',
                year: '2023',
                image: 'images/jpg/album/2.jpg',
                tracks: [
                    { title: 'NADIE SABE', path: 'audio/badbunny/2/1.mp3' },
                    { title: 'MONACO', path: 'audio/badbunny/2/2.mp3' },
                    { title: 'TELEFONO NUEVO', path: 'audio/badbunny/2/3.mp3' },
                    { title: 'SEDA', path: 'audio/badbunny/2/4.mp3' },
                    { title: 'GRACIAS A DIOS', path: 'audio/badbunny/2/5.mp3' },
                    { title: 'FUEGO', path: 'audio/badbunny/2/6.mp3' },
                    { title: 'PA QUE ME QUIERES', path: 'audio/badbunny/2/7.mp3' },
                    { title: 'VAMOS A LA PLAYA', path: 'audio/badbunny/2/8.mp3' },
                    { title: 'UN PREVIEW', path: 'audio/badbunny/2/9.mp3' },
                    { title: 'LOS DÚOS', path: 'audio/badbunny/2/10.mp3' },
                    { title: 'Y LUEGO TE DEJO', path: 'audio/badbunny/2/11.mp3' },
                    { title: 'UN DÍA MÁS', path: 'audio/badbunny/2/12.mp3' },
                    { title: 'AHORA SOY FELIZ', path: 'audio/badbunny/2/13.mp3' },
                    { title: 'PERRO NEGRO', path: 'audio/badbunny/2/14.mp3' },
                    { title: 'APAGÓN', path: 'audio/badbunny/2/15.mp3' },
                    { title: 'DÁKITI', path: 'audio/badbunny/2/16.mp3' },
                    { title: 'LA DIFÍCIL', path: 'audio/badbunny/2/17.mp3' },
                ]
            },
            {
                title: 'Un Verano Sin Ti',
                year: '2022',
                image: 'images/jpg/album/3.jpg',
                tracks: [
                    { title: 'Moscow Mule', path: 'audio/badbunny/3/1.mp3' },
                    { title: 'Después de la Playa', path: 'audio/badbunny/3/2.mp3' },
                    { title: 'Me Porto Bonito', path: 'audio/badbunny/3/3.mp3' },
                    { title: 'Tití Me Preguntó', path: 'audio/badbunny/3/4.mp3' },
                    { title: 'Un Ratito', path: 'audio/badbunny/3/5.mp3' },
                    { title: 'Andrea', path: 'audio/badbunny/3/6.mp3' },
                    { title: 'Yo No Soy Celoso', path: 'audio/badbunny/3/7.mp3' },
                    { title: 'Efecto', path: 'audio/badbunny/3/8.mp3' },
                    { title: 'Party', path: 'audio/badbunny/3/9.mp3' },
                    { title: 'Un Coco', path: 'audio/badbunny/3/10.mp3' },
                    { title: 'La Corriente', path: 'audio/badbunny/3/11.mp3' },
                    { title: 'Neverita', path: 'audio/badbunny/3/12.mp3' },
                    { title: 'Tarot', path: 'audio/badbunny/3/13.mp3' },
                    { title: 'Nadie', path: 'audio/badbunny/3/14.mp3' },
                    { title: 'Aguacero', path: 'audio/badbunny/3/15.mp3' },
                    { title: 'Enséñame a Bailar', path: 'audio/badbunny/3/16.mp3' },
                    { title: 'Ojitos Lindos', path: 'audio/badbunny/3/17.mp3' },
                    { title: 'Otro Atardecer', path: 'audio/badbunny/3/18.mp3' },
                    { title: 'Un Verano Sin Ti', path: 'audio/badbunny/3/19.mp3' },
                ]
            },
            {
                title: 'EL ÚLTIMO TOUR DEL MUNDO',
                year: '2020',
                image: 'images/jpg/album/4.jpg',
                tracks: [
                    { title: 'EL MUNDO ES MIO', path: 'audio/badbunny/4/1.mp3' },
                    { title: 'MALDITA POBREZA', path: 'audio/badbunny/4/2.mp3' },
                    { title: 'LA NOCHE DE ANOCHE', path: 'audio/badbunny/4/3.mp3' },
                    { title: 'COMO SE SIENTE', path: 'audio/badbunny/4/4.mp3' },
                    { title: 'HOY COBRÉ', path: 'audio/badbunny/4/5.mp3' },
                    { title: 'TE MUDASTE', path: 'audio/badbunny/4/6.mp3' },
                    { title: 'DÁKITI', path: 'audio/badbunny/4/7.mp3' },
                    { title: 'YO VISTO ASÍ', path: 'audio/badbunny/4/8.mp3' },
                    { title: 'LO SIENTO BB:/', path: 'audio/badbunny/4/9.mp3' },
                    { title: 'BOOKER T', path: 'audio/badbunny/4/10.mp3' },
                    { title: 'TRELLAS', path: 'audio/badbunny/4/11.mp3' },
                    { title: '120', path: 'audio/badbunny/4/12.mp3' },
                    { title: 'ANTES QUE SE ACABE', path: 'audio/badbunny/4/13.mp3' },
                    { title: 'CANCIÓN DE AMOR', path: 'audio/badbunny/4/14.mp3' },
                    { title: 'PUERTO RICO', path: 'audio/badbunny/4/15.mp3' },
                ]
            },
            {
                title: 'LAS QUE NO IBAN A SALIR',
                year: '2020',
                image: 'images/jpg/album/5.jpg',
                tracks: [
                    { title: 'SIENTO', path: 'audio/badbunny/5/1.mp3' },
                    { title: 'QUÉ MALO', path: 'audio/badbunny/5/2.mp3' },
                    { title: 'MI NENA', path: 'audio/badbunny/5/3.mp3' },
                    { title: 'DAME UNA NOCHE', path: 'audio/badbunny/5/4.mp3' },
                    { title: 'ESTOY EN MI CASA', path: 'audio/badbunny/5/5.mp3' },
                    { title: 'A TI', path: 'audio/badbunny/5/6.mp3' },
                    { title: 'DIOS', path: 'audio/badbunny/5/7.mp3' },
                    { title: 'AMÉ', path: 'audio/badbunny/5/8.mp3' },
                    { title: 'SOY', path: 'audio/badbunny/5/9.mp3' },
                    { title: 'DICE', path: 'audio/badbunny/5/10.mp3' },
                ]
            },
            {
                title: 'YHLQMDLG',
                year: '2020',
                image: 'images/jpg/album/6.jpg',
                tracks: [
                    { title: 'Si Veo a Tu Mamá', path: 'audio/badbunny/6/1.mp3' },
                    { title: 'La Santa', path: 'audio/badbunny/6/2.mp3' },
                    { title: 'Vete', path: 'audio/badbunny/6/3.mp3' },
                    { title: 'Ignorantes', path: 'audio/badbunny/6/4.mp3' },
                    { title: 'A Tu Merced', path: 'audio/badbunny/6/5.mp3' },
                    { title: 'Una Vez', path: 'audio/badbunny/6/6.mp3' },
                    { title: 'Safaera', path: 'audio/badbunny/6/7.mp3' },
                    { title: 'Yo Perreo Sola', path: 'audio/badbunny/6/8.mp3' },
                    { title: 'La Zona', path: 'audio/badbunny/6/9.mp3' },
                    { title: 'La Difícil', path: 'audio/badbunny/6/10.mp3' },
                    { title: 'Me Ponen a Prueba', path: 'audio/badbunny/6/11.mp3' },
                    { title: 'P FKN R', path: 'audio/badbunny/6/12.mp3' },
                    { title: '25/8', path: 'audio/badbunny/6/13.mp3' },
                    { title: 'Bichiyal', path: 'audio/badbunny/6/14.mp3' },
                    { title: 'Está Cabrón Ser Yo', path: 'audio/badbunny/6/15.mp3' },
                    { title: '<3', path: 'audio/badbunny/6/16.mp3' },
                ]
            },
            {
                title: 'OASIS',
                year: '2019',
                image: 'images/jpg/album/7.jpg',
                tracks: [
                    { title: 'MOJADITA', path: 'audio/badbunny/7/1.mp3' },
                    { title: 'YO NO SÉ', path: 'audio/badbunny/7/2.mp3' },
                    { title: 'LA NOCHE DE ANOCHE', path: 'audio/badbunny/7/3.mp3' },
                    { title: 'TE MUDAS O TE QUEDAS', path: 'audio/badbunny/7/4.mp3' },
                    { title: 'TÚ NO ERES MALA', path: 'audio/badbunny/7/5.mp3' },
                    { title: 'CUIDAO', path: 'audio/badbunny/7/6.mp3' },
                    { title: 'LA OTRA', path: 'audio/badbunny/7/7.mp3' },
                    { title: 'FIESTA EN MÍ', path: 'audio/badbunny/7/8.mp3' },
                ]
            },
            {
                title: 'X 100PRE',
                year: '2018',
                image: 'images/jpg/album/8.jpg',
                tracks: [
                    { title: 'NI BIEN NI MAL', path: 'audio/badbunny/8/1.mp3' },
                    { title: '200 MPH', path: 'audio/badbunny/8/2.mp3' },
                    { title: '¿Quién Tú Eres?', path: 'audio/badbunny/8/3.mp3' },
                    { title: 'Estamos Bien', path: 'audio/badbunny/8/4.mp3' },
                    { title: 'MIA', path: 'audio/badbunny/8/5.mp3' },
                    { title: 'La Romana', path: 'audio/badbunny/8/6.mp3' },
                    { title: 'Caro', path: 'audio/badbunny/8/7.mp3' },
                    { title: 'Tenemos Que Hablar', path: 'audio/badbunny/8/8.mp3' },
                    { title: 'Otra Noche en Miami', path: 'audio/badbunny/8/9.mp3' },
                    { title: 'RLNDT', path: 'audio/badbunny/8/10.mp3' },
                    { title: 'Como Antes', path: 'audio/badbunny/8/11.mp3' },
                    { title: 'Solo de Mí', path: 'audio/badbunny/8/12.mp3' },
                    { title: 'Cuando Perriabas', path: 'audio/badbunny/8/13.mp3' },
                    { title: 'Estamos Clear', path: 'audio/badbunny/8/14.mp3' },
                    { title: 'Será Que Soy', path: 'audio/badbunny/8/15.mp3' },
                ]
            }
        ]
    }
};

function displayArtistPage(artistKey) {
    const main = document.querySelector('main');
    const artist = artistData[artistKey];

    if (!artist) {
        main.innerHTML = `<section class="wrapper"><h1 class="page-title">Artiste non trouvé</h1></section>`;
        return;
    }

    const bioHtml = `
        <section class="artist-bio-block">
            <img class="artist-bio-image" src="${artist.bio.image}" alt="Photo de ${artist.name}">
            <div class="artist-bio-text">
                <h1 class="artist-bio-name">${artist.name}</h1>
                <p class="artist-bio-description">${artist.bio.description}</p>
            </div>
        </section>
    `;

    const albumsHtml = artist.albums.map(album => {
        const trackPreviews = album.tracks.slice(0, 3).map((track, index) => {
            const zIndex = 3 - index;
            const leftOffset = index * 10;
            return `<img class="track-preview" style="z-index: ${zIndex}; left: ${leftOffset}px;" src="${album.image}" alt="Pochette de ${track.title}">`;
        }).join('');

        return `
            <div class="album-card">
                <div class="album-header">
                    <div class="album-info-and-image">
                        <img src="${album.image}" alt="Pochette de l'album ${album.title}">
                        <div class="album-info">
                            <p class="album-name">${album.title}</p>
                            <p class="album-year">${album.year}</p>
                        </div>
                    </div>
                    <div class="album-actions">
                        <div class="track-previews-container">
                            ${trackPreviews}
                        </div>
                        <span class="album-track-count">+${album.tracks.length}</span>
                    </div>
                </div>
                <div class="track-list">
                    ${album.tracks.map(track => {
                        return `
                        <div class="track-card" 
                            data-track-path="${track.path}"
                            data-album-image="${album.image}"
                            data-track-title="${track.title}"
                            data-artist-name="${artist.name}"
                            >
                            <div class="track-card-left">
                                <img src="${album.image}" alt="Pochette de la chanson">
                                <div class="track-info">
                                    <p class="track-title">${track.title}</p>
                                    <p class="track-artist">${artist.name}</p>
                                    <p class="track-date">${album.year}</p>
                                </div>
                            </div>
                            <div class="track-actions">
                                <button class="play-btn">
                                    <img src="images/png/buttons/play.png" alt="Play">
                                </button>
                                <button class="plus-btn"><img src="images/png/buttons/plus.png" alt="Plus"></button>
                                <button class="heart-btn"><img src="images/png/buttons/heart.png" alt="Cœur"></button>
                            </div>
                        </div>
                    `;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');

    main.innerHTML = `
        <section class="wrapper">
            ${bioHtml}
            <h2 class="section-title">Albums</h2>
            <section class="albums-list">${albumsHtml}</section>
        </section>
    `;

    document.querySelectorAll('.album-card').forEach(albumCard => {
        albumCard.addEventListener('click', (event) => {
            if (event.target.closest('.track-card')) {
                return;
            }
            const trackList = albumCard.querySelector('.track-list');
            trackList.classList.toggle('visible');
        });
    });

    document.querySelectorAll('.track-card').forEach(trackCard => {
        trackCard.addEventListener('click', (event) => {
            const path = trackCard.getAttribute('data-track-path');
            const title = trackCard.getAttribute('data-track-title');
            const artistName = trackCard.getAttribute('data-artist-name');
            const albumImage = trackCard.getAttribute('data-album-image');

            if (typeof playTrack === 'function') {
                playTrack(path, title, artistName, albumImage);
            }
        });
    });
}

function initPage(routeParts) {
    displayArtistPage(routeParts[0]);
}

initPage(window.location.hash.substring(1).split('/'));