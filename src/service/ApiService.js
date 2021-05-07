import axios from "axios"

const BASE_URL = 'http://localhost:3004/'

export async function getAllFrameset() {
    const response = await axios.get(BASE_URL + 'frameset')
    return response.data 
}

export async function getFramesetById(id) {
    const result = await axios.get(BASE_URL + 'frameset/' + id)
    return result.data
}

export async function getAllWheelset() {
    const response = await axios.get(BASE_URL + 'wheelset')
    return response.data
}

export async function getWheelsetById(id) {
    const result = await axios.get(BASE_URL + 'wheelset/' + id)
    return result.data
}

export async function getAllGroupset() {
    const response = await axios.get(BASE_URL + 'groupset')
    return response.data
}

export async function getGroupsetById(id) {
    const result = await axios.get(BASE_URL + 'groupset/' + id)
    return result.data
}

export async function getBestProduct() {
    
    const frameset = await axios.get(BASE_URL + 'frameset?_limit=2')
    const groupset = await axios.get(BASE_URL + 'groupset?_limit=2')
    const wheelset = await axios.get(BASE_URL + 'wheelset?_limit=2')
    
    const result = await axios.all([frameset, groupset, wheelset])

    let data = []
    for(let i in result) {
        for(let j in result[i].data) {
            data.push(result[i].data[j])
        }
    }
    return data
}

export async function getByTitle(queryString) {
    const frameset = await axios.get(BASE_URL + 'frameset?q=' + queryString)
    const groupset = await axios.get(BASE_URL + 'groupset?q=' + queryString)
    const wheelset = await axios.get(BASE_URL + 'wheelset?q=' + queryString)

    const result = await axios.all([frameset, groupset, wheelset])

    let data = []
    for(let i in result) {
        for(let j in result[i].data) {
            data.push(result[i].data[j])
        }
    }
    return data
}

export const refresh = () => {
    window.location.reload()
} 
