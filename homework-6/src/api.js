import axios from 'axios';

export default axios.create({
  baseURL: 'https://5ee633c152bb0500161fcb77.mockapi.io/contacts/',
  headers: {
    'Content-Type': 'application/json'
  }
})