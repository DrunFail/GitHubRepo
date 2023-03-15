import RepoCard from './RepoCard';
import API from './api';

const form = document.querySelector('#search');

const result = document.querySelector('.result');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let text = formData.get('text');

    //query

    const queryString = `q=${text}`;


    //fetch data
    API.getRepo(queryString)
        .then(data => data.items.map(elem => result.append(RepoCard(elem))))

})
