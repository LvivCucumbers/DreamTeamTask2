import axios from "axios";

export function getPersonData(id){
    return axiosRequest(`https://swapi.dev/api/people/${id}/`)
}

export function getPlanetData(id){
    return axiosRequest(`https://swapi.dev/api/planets/${id}/`)
}

export function getStarshipData(id){
    return axiosRequest(`https://swapi.dev/api/starships/${id}/`)
}

export function getIdFromUrl(url){
    if (typeof(url) !== 'undefined') {
       return parseInt(url.split('/').slice(-2)[0])
    }
}

function axiosRequest(url) {
    return axios.get(url, { timeout: 5000})
}