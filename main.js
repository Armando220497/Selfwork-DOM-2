document.getElementById('creaArticoloButton').addEventListener('click', creaArticolo);

function creaArticolo() {
    const titolo = document.getElementById('titolo').value.trim();
    const paragrafo = document.getElementById('paragrafo').value.trim();

    // Controlla se i campi sono vuoti
    if (titolo === '' || paragrafo === '') {
        alert('Per favore, compila sia il titolo che il paragrafo.');
        return;
    }

    // Data
    let date = new Date();
    let formatDate = date.toLocaleDateString();

    // Crea articolo
    const articolo = document.getElementById('articolo');
    articolo.innerHTML = `
        <p class="date">Data di pubblicazione: ${formatDate}</p>
        <h2>${titolo}</h2>
        <p>${paragrafo}</p>
    `;

    // Pulisci gli input
    document.getElementById('titolo').value = '';
    document.getElementById('paragrafo').value = '';
}
