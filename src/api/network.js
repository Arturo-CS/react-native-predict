import axios from "./axios.js";

export const uploadImage = image => axios.post('/uploadfile', image)