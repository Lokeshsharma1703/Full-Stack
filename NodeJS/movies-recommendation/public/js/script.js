let result = document.getElementById('main');

async function searchDB(searchText) {
    const res = await fetch(`http://localhost:4000/search?q=${searchText}`);

    const data = await res.json();

    // console.log(data);

    for (const ele of data) {

        // console.log(ele);

        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'main-div');
        newDiv.textContent = ele.name;
        newDiv.classList = 'card';
        newDiv.style.width = '200px';
        newDiv.style.height = '150px';
        result.appendChild(newDiv);
    };

}


const searchInput = document.getElementById('search');

searchInput.addEventListener('keyup', () => {
    let searchText = searchInput.value;
    // console.log(searchText);
    searchDB(searchText);
})