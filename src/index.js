import './css/style.css';
const location = {
   currentPage: window.location.pathname
}

//display popular movies
const displayMovies = async() => {
    const result = await fetchData('./movie-details.html')
    return result;
}


//fetch api data
const fetchData = async(LINK) => {
    API_KEY = '';
    API_URL = 'https://api.themoviedb.org/3/';
    const response = await fetch(`${API_URL}${LINK}?api_key=${API_KEY}&language=en-US`)
    const data = await response.json();
    return data;
}

// highlighting the active link
const highlightLink = () => {
    //get links
    const links = document.querySelectorAll('nav-link');
    links.forEach(link => {
        if(link.getAttribute('href') === location.currentPage){
            link.classList.add('active');
        }
    })
}

const init = () => {
    switch(location.currentPage){
        case '/':
        case '/index.html':
            console.log('home');
            break;
        case '/shows.html':
            console.log('shows');
            break;
        case '/movie-details.html':
            displayMovies();
            break;
        case '/tv-details.html':
            console.log('TV details')
            break;
        case '/search.html':
            console.log('Search')
            break;
    }
    highlightLink()
}

document.addEventListener('DOMContentLoaded', init);