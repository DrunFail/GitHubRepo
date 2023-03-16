export default function RepoCard(elem) {
    //main container 
    let article = document.createElement('article');

    //container for profile info
    let infoProfile = document.createElement('div');
    infoProfile.classList.add('profile-info');

    //link on author repo
    let authorName = document.createElement('a');
    authorName.setAttribute('href', elem.owner.html_url);
    authorName.setAttribute('target', '_blanc');
    authorName.innerHTML = elem.owner.login;

    //author image profile
    let authorImg = document.createElement('img');
    authorImg.setAttribute('src', elem.owner.avatar_url);

    infoProfile.append(authorImg, authorName);

    
    let nameRepoContain = document.createElement('div');//create nameRepo
    nameRepoContain.classList.add('repo-info');

    //link on repo
    let nameRepo = document.createElement('a');
    nameRepo.setAttribute('href', elem.svn_url);
    nameRepo.setAttribute('target', '_blanc');
    nameRepo.innerHTML = elem.name;

    // public or private repo 
    let visibility = document.createElement('p');
    visibility.classList.add('visibility');
    visibility.innerHTML = elem.visibility;

    nameRepoContain.append(nameRepo, visibility); //append nameRepo
    //type license
    if (elem.license) {
        let license = document.createElement('p');
        license.classList.add('license');
        license.innerHTML = elem.license.spdx_id;
        nameRepoContain.append(license);
    }

    //language repo
    if (elem.language) {
        let language = document.createElement('p');
        language.classList.add('language');
        language.innerHTML = elem.language;
        nameRepoContain.append(language);
    }



    //container for date create and update
    let dateContainer = document.createElement('div'); //create dateContainer
    dateContainer.classList.add('date');

    //date created repo
    let createDate = document.createElement('p');
    createDate.innerHTML = `created: ${new Date(elem.created_at)
        .toLocaleDateString()}`;

    //date updated repo
    let updateDate = document.createElement('p');
    updateDate.innerHTML = `updated: ${new Date(elem.updated_at)
        .toLocaleDateString()}`;


    dateContainer.append(createDate, updateDate); //append dateContainer


    //container for stars and forks
    let starForkContainer = document.createElement('div');//create starForkContainer
    starForkContainer.classList.add('star-fork');

    //number of stars
    let star = document.createElement('p');
    star.innerHTML = `star: ${elem.stargazers_count}`;

    //number of forks
    let fork = document.createElement('p');
    fork.innerHTML = `fork: ${elem.forks}`;


    starForkContainer.append(star, fork);//append starForkContainer



    let container = document.createElement('div');
    container.classList.add('container');


    //description repo
    let description = document.createElement('p');
    description.innerHTML = elem.description;

    container.append(nameRepoContain, starForkContainer, description, dateContainer);
    article.append(infoProfile, container);

    return article;
};