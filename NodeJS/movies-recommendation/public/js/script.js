async function searchDB(searchText) {
    const res = await fetch(`http://localhost:4000/search?q=${searchText}`);

    const data = await res.json();

    console.log(data);

    createCard(data);
}


const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
    let searchText = searchInput.value;
    // console.log(searchText);
    searchDB(searchText);
})

const con = document.getElementById('container');

function createCard(movies) {
    for (const movie of movies) {
        let card = document.createElement('div');
        card.className = 'card';
        let name = document.createElement('h3');
        name.textContent = movie.name;
        card.appendChild(name);

        con.appendChild(card);
    }
}