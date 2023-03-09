import './styles/index.scss';
import { data } from './data.js';

const root_api = 'http://api.github.com';
const search_repo = '/search/repositories';


const form = document.querySelector('#search');

const result = document.querySelector('.result');

//card
const cardRepo = (elem) => {
    let article = document.createElement('article');

    let infoProfile = document.createElement('div');
    infoProfile.classList.add('profile-info');

    let nameRepoContain = document.createElement('div');
    nameRepoContain.classList.add('repo-info');

    let container = document.createElement('div');
    container.classList.add('container');

    let dateContainer = document.createElement('div');
    dateContainer.classList.add('date');

    let starForkContainer = document.createElement('div');
    starForkContainer.classList.add('star-fork');



    let nameRepo = document.createElement('a');
    nameRepo.setAttribute('href', elem.svn_url);
    nameRepo.setAttribute('target', '_blanc');
    nameRepo.innerHTML = elem.name;

    let authorName = document.createElement('a');
    authorName.setAttribute('href', elem.owner.html_url);
    authorName.setAttribute('target', '_blanc');
    authorName.innerHTML = elem.owner.login;

    let authorImg = document.createElement('img');
    authorImg.setAttribute('src', elem.owner.avatar_url);

    let createDate = document.createElement('p');
    createDate.innerHTML = `created: ${new Date(elem.created_at).toLocaleDateString()}`;

    let updateDate = document.createElement('p');
    updateDate.innerHTML = `updated: ${new Date(elem.updated_at).toLocaleDateString()}`;

    

    let star = document.createElement('p');
    star.innerHTML = `star: ${elem.stargazers_count}`;

    let fork = document.createElement('p');
    fork.innerHTML = `fork: ${elem.forks}`;

    let visibility = document.createElement('p');
    visibility.innerHTML = elem.visibility;

    
    

    let description = document.createElement('p');
    description.innerHTML = elem.description; 

    infoProfile.append(authorImg, authorName);   
    nameRepoContain.append(nameRepo, visibility);

    if (elem.license !== null) {
        let license = document.createElement('p');
        license.innerHTML = elem.license.spdx_id;
        nameRepoContain.append(license);
    }

    if (elem.language) {
        let language = document.createElement('p');
        language.innerHTML = elem.language;
        nameRepoContain.append(language);
    }

    dateContainer.append(createDate, updateDate);

    starForkContainer.append(star, fork);

    container.append(nameRepoContain,starForkContainer, description, dateContainer);

    

    article.append(infoProfile, container);
    return article;
};
let cards = data.items.map(elem => cardRepo(elem));
cards.map(elem => result.append(elem));



form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let text = formData.get('text');


    fetch(`${root_api}${search_repo}?q=${text}`)
        .then(response => {
            if (response.ok) {
                return response.json();
                
            }


        })
        .then(data => {
            let repoData = data;
            let cards = data.items.map(elem => cardRepo(elem));
            cards.map(elem => result.append(elem));
        })
    ;

    

   

    
})


