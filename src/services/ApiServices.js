import axios from 'axios';

const url = 'https://raw.githubusercontent.com/jalajthinkwik/my-shopping-app/master/src/data/';

export function GetRequest(endPoint) {
  return axios.get(`${url}${endPoint}`);
}

export function PostRequest(endPoint, data) {
  return axios.post(`${url}${endPoint}`, data)
}

export function PutRequest(endPoint, data) {
  return axios.put(`${url}${endPoint}`, data)
}

export function DeleteRequest(endPoint, data) {
  return axios.delete(`${url}${endPoint}`, { data: data })
}
