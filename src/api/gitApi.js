import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com'
})

export const gitAPi = {
    getSearchItems(search, page, itemsCount) {
        return instance.get(`/search/repositories?q=${search}%2Blanguage%3Ajavascript&page=${page}&per_page=${itemsCount}&sort=stars&order=desc`)
    }
}