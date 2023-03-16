import RepoCard from './RepoCard';
import API from './api';

const form = document.querySelector('#search');
const result = document.querySelector('.result');

const fetchRepo = (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let text = formData.get('text');

    if (text) {
        //query
        const queryString = `q=${text}&per_page=10`;

        result.innerHTML = '';

        //fetch data
        API.getRepo(queryString)
            .then(data => {
                if (data.items.length) {
                    data.items.map(elem => result.append(RepoCard(elem)))
                } else {
                    result.innerHTML = '<p class="alert">Hичего не найдено</p>'
                }
            }
            )

    } else {
        result.innerHTML = '<p class="alert">Введите хотя бы один символ</p>'
    }


}


const input = document.querySelector('input');

input.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        fetchRepo
    }
})

form.addEventListener('submit', fetchRepo)
