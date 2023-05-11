console.log("Let's get this party started!");

//api key: U3EhAYrzsVS32ZiUSpTL2QpuL784EaL6

const form = document.querySelector('#searchForm');
const input = document.querySelector('#input');
const searchBtn = document.querySelector('#search');
const removeBtn = document.querySelector('#remove');
const section = document.querySelector('#section');
const imgContainer = document.createElement('div');
section.appendChild(imgContainer);

async function getSearch(searchTerm) {
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=U3EhAYrzsVS32ZiUSpTL2QpuL784EaL6`);
    const imgURL = res.data.data[0].images.fixed_width.url;
    displayImage(imgURL);
}

function displayImage(src) {
    const img = document.createElement('img');
    img.src = src;
    imgContainer.appendChild(img);
}

searchBtn.addEventListener('click', function(e) {
    e.preventDefault();

    let userInput = input.value;
    getSearch(userInput);
    input.value = '';
});


removeBtn.addEventListener('click', function() {
    imgContainer.remove();
})

