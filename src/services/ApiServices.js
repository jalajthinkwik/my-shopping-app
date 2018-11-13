import axios from 'axios';

const endPoint = 'https://raw.githubusercontent.com/jalajthinkwik/my-shopping-app/master/src/data/';

export function GetRequest(route) {
  return axios.get(`${endPoint}${route}`);
}

export function PostRequest(route, data) {
  return axios.post(`${endPoint}${route}`, data)
}

export function PutRequest(route, data) {
  return axios.put(`${endPoint}${route}`, data)
}

export function DeleteRequest(route, data) {
  return axios.delete(`${endPoint}${route}`, { data: data })
}
