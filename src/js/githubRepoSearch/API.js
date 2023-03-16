class API {

    BASE_URL = 'http://api.github.com';
    search_repo = '/search/repositories?';

    async getRepo(params) {
        return await fetch(this.BASE_URL + this.search_repo + params)
            
    }
    

}

export default new API()